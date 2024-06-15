"use client";

import React from "react";

interface Props {
  onSearch: (search: string) => void;
}

export default function PostSearch({ onSearch }: Props): JSX.Element {
  const [search, setSearch] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(search);
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
