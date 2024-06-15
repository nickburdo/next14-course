import { Post } from "@/app/blog/page";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 60 },
    },
  );

  return await response.json();
}

export function generateMetadata({ params: { id } }: Props) {
  return {
    title: `Blog - Post ${id}`,
  };
}

export default async function Blog({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <>
      <Link href="/blog">&lt; Back</Link>

      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>

      <div>{post.body}</div>
    </>
  );
}
