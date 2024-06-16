import PostService from "@/services/post.service";
import Link from "next/link";

type Props = {
  params: {
    id: number;
  };
};

export async function generateMetadata({ params: { id } }: Props) {
  return {
    title: `Client Post ${id}`,
  };
}

export default async function Blog({ params: { id } }: Props) {
  const post = await PostService.getPost(id);

  return (
    <article>
      <Link href={"/client"}>&lt; Back</Link>

      <h1 className="text-2xl font-bold mb-2">{post?.title}</h1>

      <p>{post?.body}</p>
    </article>
  );
}
