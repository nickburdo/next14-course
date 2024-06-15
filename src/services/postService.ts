export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export default class PostService {
  static async getPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 60 },
    });
    return await response.json();
  }
}
