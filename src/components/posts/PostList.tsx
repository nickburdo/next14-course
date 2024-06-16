import { Post } from "@prisma/client";
import Link from "next/link";

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props): JSX.Element {
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id} className="border-b border-gray-200 mb-1 py-2">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
