import Link from "next/link";

type Props = {
  params: {
    id: number;
  };
};

export function generateMetadata({ params: { id } }: Props) {
  return {
    title: `Client Post ${id}`,
  };
}

export default async function Blog({ params: { id } }: Props) {
  // const post = await getPostById(id);

  return (
    <>
      <Link href={"/blog"}>&lt; Back</Link>

      <h1 className="text-2xl font-bold mb-2">
        {/*{post?.title}*/}
        Post details
      </h1>

      {/*<div>{post?.body}</div>*/}
    </>
  );
}