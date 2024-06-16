import PostSearch from "@/components/posts/PostSearch";
import SwrPosts from "@/components/posts/SwrPosts";

export const metadata = {
  title: "SWR BlogPost List",
};

export default function SwrPostList() {
  return (
    <>
      <header className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Blog based on SWR</h1>;
        <PostSearch type="swr" />
      </header>

      <SwrPosts />
    </>
  );
}
