import PostSearch from "@/components/posts/PostSearch";
import ZustandPosts from "@/components/posts/ZustandPosts";

export const metadata = {
  title: "Zustand BlogPost List",
};

export default function ZustandPostList() {
  return (
    <>
      <header className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Blog based on Zustand</h1>;
        <PostSearch type="zustand" />
      </header>

      <ZustandPosts />
    </>
  );
}
