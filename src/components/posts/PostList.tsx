import { BlogPost } from "@/services/post.service";
import { Post } from "@prisma/client";
import Link from "next/link";

interface Props {
  posts: Post[] | BlogPost[];
  type?: "blog" | "client" | "zustand" | "swr";
}

export default function PostList({ posts, type }: Props): JSX.Element {
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id} className="border-b border-gray-200 mb-1 py-2">
          <Link href={`/${type || "blog"}/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
