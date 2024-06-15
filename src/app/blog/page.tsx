import Link from "next/link";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getData(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  return await response.json();
}

export const metadata = {
  title: "Blog - Post List",
};

export default async function Blog() {
  const data = (await getData()) ?? [];

  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Blog</h1>

      <nav>
        <ul>
          {data.map((post) => (
            <li key={post.id} className="border-b border-gray-200 mb-1 py-2">
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
