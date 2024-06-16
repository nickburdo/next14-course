"use client";
import PostList from "@/components/posts/PostList";
import PostSearch from "@/components/posts/PostSearch";
import PostService, { BlogPost } from "@/services/post.service";
import { useEffect, useState } from "react";

export default function ClientPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PostService.getAllPosts()
      .then((posts) => setPosts(posts))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <header className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Blog based on Client Components</h1>

        <PostSearch onSearch={setPosts} />
      </header>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <PostList posts={posts} type="client" />
      )}
    </>
  );
}
