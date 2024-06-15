"use client";
import PostService from "@/services/postService";
import Link from "next/link";
import useSWR from "swr";

export default function PostList(): JSX.Element {
  const { data: posts, isLoading: loading } = useSWR(
    "posts",
    PostService.getPosts,
  );

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id} className="border-b border-gray-200 mb-1 py-2">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
