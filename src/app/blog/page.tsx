import PostList from "@/components/posts/PostList";
import PostSearch from "@/components/posts/PostSearch";

export const metadata = {
  title: "Blog - Post List",
};

export default async function Blog() {
  return (
    <>
      <header className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Blog</h1>

        <PostSearch />
      </header>

      <PostList />
    </>
  );
}
