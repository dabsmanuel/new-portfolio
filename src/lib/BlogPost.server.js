import { use } from "react";
import BlogCard from "../components/Blog/BlogCard";
import client from "./contentful";
import Link from 'next/link';


async function getPosts(page = 1) {
  try {
    let query = {
      content_type: "blogPost",
      order: "-fields.date",
    };

    const response = await client.getEntries(query);
    return response;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { items: [], total: 0 };
  }
}

export default function BlogPost({}) {
  const { items: posts } = use(getPosts());
 
  return (
    <>
      <div className="w-[92%] mx-auto">
        {posts && posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.sys.id}
                  title={post.fields.title}
                  image={post.fields.image}
                  slug={post.fields.slug}
                  date={post.fields.date}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="text-xl">No posts found!!!</p>
        )}
      </div>
    </>
  );
}