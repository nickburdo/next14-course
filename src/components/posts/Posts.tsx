"use client";
import PostList from "@/components/posts/PostList";
import PostSearch from "@/components/posts/PostSearch";
import PostService, { Post } from "@/services/postService";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PostService.getPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (search: string) => {
    setLoading(true);
    PostService.getPosts().then((posts) => {
      setPosts(
        posts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase()),
        ),
      );
      setLoading(false);
    });
  };

  return (
    <>
      <header className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Blog</h1>

        <PostSearch onSearch={handleSearch} />
      </header>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <PostList posts={posts} />
      )}
    </>
  );
}
