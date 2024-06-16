export type BlogPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

/*
export function getPostById(id: string) {
  return prisma.post.findUnique({ where: { id } });
}

export function getAllPosts() {
  return prisma.post.findMany();
}
*/

export default class PostService {
  static async getAllPosts(): Promise<BlogPost[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 60 },
    });
    return await response.json();
  }

  static async getPostsBySearch(search: string): Promise<BlogPost[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 60 },
    });
    const posts = await response.json();

    return posts.filter((post: BlogPost) =>
      post.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  static async getPost(id: number): Promise<BlogPost> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        next: { revalidate: 60 },
      },
    );
    return await response.json();
  }
}
