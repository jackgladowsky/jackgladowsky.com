import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Jack Gladowsky",
  description: "Thoughts on engineering, ML, and building things.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8 pt-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Blog</h1>
        <p className="text-[var(--muted)] mt-2">
          Thoughts on engineering, ML, and building things.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-[var(--muted)]">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-4 -mx-4 rounded-lg hover:bg-[var(--card)] transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-medium text-white group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[var(--muted)] mt-1">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-[var(--muted)]">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
