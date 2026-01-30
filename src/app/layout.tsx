import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack Gladowsky",
  description: "Software Engineer. Building things that ship.",
  openGraph: {
    title: "Jack Gladowsky",
    description: "Software Engineer. Building things that ship.",
    url: "https://jackgladowsky.com",
    siteName: "Jack Gladowsky",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Gladowsky",
    description: "Software Engineer. Building things that ship.",
  },
};

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white hover:text-[var(--accent)] transition-colors">
          jg
        </Link>
        <div className="flex gap-6 text-sm text-[var(--muted)]">
          <Link href="/projects" className="hover:text-white transition-colors">
            projects
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors">
            blog
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            about
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Nav />
        <main className="max-w-3xl mx-auto px-6 pt-24 pb-16">
          {children}
        </main>
      </body>
    </html>
  );
}
