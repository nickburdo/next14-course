"use client";
import PostList from "@/components/posts/PostList";
import PostService from "@/services/post.service";
import useSWR from "swr";

export default function SwrPosts() {
  const { data: posts, isLoading: loading } = useSWR(
    "posts",
    PostService.getAllPosts,
  );

  if (loading) return <div className="text-center">Loading...</div>;

  return <PostList posts={posts || []} type="swr" />;
}
