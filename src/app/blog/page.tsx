import PostList from "@/components/posts/PostList";
import { BlogPost } from "@/services/post.service";
import Link from "next/link";

export const metadata = {
  title: "Blog - BlogPost List",
};

export const revalidate = 10;

export default async function Blog() {
  // const posts = await getAllPosts();
  return (
    <>
      <header className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Blog based on DB</h1>

        <Link href={"/blog/create"} className="bg-blue-900 text-white p-2">
          Create post
        </Link>
      </header>

      {/*<PostList posts={posts} />*/}
    </>
  );
}
