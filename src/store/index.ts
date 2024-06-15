import PostService, { Post } from "@/services/postService";
import { create } from "zustand";

interface UsePosts {
  posts: Post[];
  loading: boolean;
  getAllPosts(): Promise<void>;
  getPostsBySearch(search: string): Promise<void>;
}

export const usePosts = create<UsePosts>((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true });
    const posts = await PostService.getPosts();
    set({ posts: posts });
    set({ loading: false });
  },
  getPostsBySearch: async (search: string) => {
    set({ loading: true });
    const posts = await PostService.getPostsBySearch(search);
    set({ posts });
    set({ loading: false });
  },
}));
