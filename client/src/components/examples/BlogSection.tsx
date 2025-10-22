import { BlogSection } from "../BlogSection";

export default function BlogSectionExample() {
  const posts = [
    {
      title: "Building Modern Web Applications",
      date: "Oct 22, 2025",
      url: "#",
      isNew: true,
    },
    {
      title: "Tips for Creating Beautiful UI",
      date: "Oct 15, 2025",
      url: "#",
    },
    {
      title: "Understanding React Hooks",
      date: "Oct 8, 2025",
      url: "#",
    },
    {
      title: "Getting Started with TypeScript",
      date: "Oct 1, 2025",
      url: "#",
    },
  ];

  return <BlogSection posts={posts} />;
}
