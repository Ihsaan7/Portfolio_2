interface AboutSectionProps {
  content: string;
}

export function AboutSection({ content }: AboutSectionProps) {
  // Parse markdown-style bold (**text**) and render as styled spans
  const renderContent = () => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const text = part.slice(2, -2);
        return (
          <span key={index} className="font-semibold text-primary">
            {text}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="py-16 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="heading-about">
        About
      </h2>
      <div className="prose prose-zinc dark:prose-invert max-w-2xl">
        <p className="text-base md:text-lg leading-relaxed" data-testid="text-about">
          {renderContent()}
        </p>
      </div>
    </section>
  );
}
