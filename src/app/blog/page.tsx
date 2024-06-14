import Link from "next/link";

export const metadata = {
  title: "Blog - Post List",
};

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>

      <nav>
        <ul>
          <li>
            <Link href="/blog/post1">Post 1</Link>
          </li>
          <li>
            <Link href="/blog/post2">Post 2</Link>
          </li>
          <li>
            <Link href="/blog/post3">Post 3</Link>
          </li>
          <li>
            <Link href="/blog/post4">Post 4</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
