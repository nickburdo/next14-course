import { createPost } from "@/app/blog/actions";

export default function CreatePost() {
  return (
    <>
      <h1 className="text-xl font-bold mb-2">Create Post</h1>
      <form action={createPost}>
        <div className="mb-3">
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="w-full sm:w-1/2 lg:w-1/3"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="block">
            Content
          </label>
          <textarea
            id="body"
            name="body"
            rows={5}
            className="w-full sm:w-1/2 lg:w-1/3"
          />
        </div>

        <div className="mb-3">
          <button className="bg-blue-900 text-white p-2" type="submit">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
