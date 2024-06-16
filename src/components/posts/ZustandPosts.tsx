"use client";
import PostList from "@/components/posts/PostList";
import { usePosts } from "@/store";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

export default function ZustandPosts() {
  const [posts, loading, getAllPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getAllPosts],
    shallow,
  );

  useEffect(() => {
    getAllPosts().then(null);
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  return <PostList posts={posts} type="zustand" />;
}
