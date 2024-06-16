import PostService, { BlogPost } from "@/services/post.service";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const posts = await PostService.getAllPosts();
  const query = searchParams.get("q");

  if (query) {
    return NextResponse.json(
      posts.filter((post: BlogPost) =>
        post.title.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  }

  return NextResponse.json(posts);
}
