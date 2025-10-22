import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import blogImage from "@assets/generated_images/Blog_post_featured_image_5cd2c5f8.png";

export interface BlogPost {
  title: string;
  date: string;
  image?: string;
  url?: string;
  isNew?: boolean;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="py-16 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="heading-blog">
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.url || "#"}
            className="block border border-border rounded-md overflow-hidden hover-elevate transition-transform hover:-translate-y-1"
            data-testid={`blog-post-${index}`}
          >
            <div className="relative aspect-video bg-muted overflow-hidden">
              <img
                src={post.image || blogImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              {post.isNew && (
                <Badge className="absolute top-3 left-3 bg-primary">
                  New
                </Badge>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground">Published on {post.date}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center">
        <Button variant="outline" data-testid="button-all-posts">
          All Posts
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
