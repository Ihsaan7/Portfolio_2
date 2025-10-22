interface AboutSectionProps {
  content: string;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="py-16 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="heading-about">
        About
      </h2>
      <div className="prose prose-zinc dark:prose-invert max-w-2xl">
        <p className="text-base md:text-lg leading-relaxed" data-testid="text-about">
          {content}
        </p>
      </div>
    </section>
  );
}
