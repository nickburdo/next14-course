import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `Blog - ${slug}`,
  };
}

export default function Blog({ params: { slug } }: Props) {
  return (
    <>
      <h1>Post {slug}</h1>

      <Link href="/blog">Back</Link>
    </>
  );
}
