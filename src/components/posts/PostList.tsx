"use client";
import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

export default function PostList(): JSX.Element {
  const [posts, loading, getAllPosts, getPostsBySearch] = usePosts(
    (state) => [
      state.posts,
      state.loading,
      state.getAllPosts,
      state.getPostsBySearch,
    ],
    shallow,
  );

  useEffect(() => {
    getAllPosts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="border-b border-gray-200 mb-1 py-2">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
