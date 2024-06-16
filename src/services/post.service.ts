import { prisma } from "@/lib/prisma";

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export function getPostById(id: string) {
  return prisma.post.findUnique({ where: { id } });
}

export function getAllPosts() {
  return prisma.post.findMany();
}

export default class PostService {
  static async getPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 60 },
    });
    return await response.json();
  }
  static async getPostsBySearch(search: string): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 60 },
    });
    const posts = await response.json();

    return posts.filter((post: Post) =>
      post.title.toLowerCase().includes(search.toLowerCase()),
    );
  }
}
