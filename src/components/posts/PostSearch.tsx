"use client";

import PostService from "@/services/postService";
import React from "react";
import useSWR from "swr";

export default function PostSearch(): JSX.Element {
  const [search, setSearch] = React.useState("");
  const { mutate } = useSWR("posts");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const posts = await PostService.getPostsBySearch(search);
    await mutate(posts);
  };

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <input
        className="border border-slate-800 p-2"
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-blue-900 text-white p-2" type="submit">
        Search
      </button>
    </form>
  );
}
