"use client";

import PostService, { BlogPost } from "@/services/post.service";
import { usePosts } from "@/store";
import React from "react";
import useSWR from "swr";

interface Props {
  onSearch?: (value: BlogPost[]) => void;
  type?: "blog" | "client" | "zustand" | "swr";
}

export default function PostSearch({
  onSearch,
  type = "client",
}: Props): JSX.Element {
  const [search, setSearch] = React.useState("");
  const getPostBySearch = usePosts((state) => state.getPostsBySearch);
  const { mutate } = useSWR("posts");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const posts = await PostService.getPostsBySearch(search);

    switch (type) {
      case "client":
        onSearch && onSearch(posts);
        break;
      case "zustand":
        await getPostBySearch(search);
        break;
      case "swr":
        await mutate(posts);
        break;
    }
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
