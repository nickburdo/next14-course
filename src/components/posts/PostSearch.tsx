"use client";

import { usePosts } from "@/store";
import React from "react";

export default function PostSearch(): JSX.Element {
  const [search, setSearch] = React.useState("");
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getPostsBySearch(search);
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
