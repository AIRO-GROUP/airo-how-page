import { siteConfig } from "@/config/content";

export function BottomCTA() {
  const { headline, text, primaryButton, secondaryButton } = siteConfig.cta;

  return (
    <section className="px-6 py-20 max-w-4xl mx-auto text-center">
      <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif tracking-tight">
          {headline}
        </h2>
        <p className="text-lg md:text-xl opacity-80 mb-10 max-w-xl">
          {text}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href={primaryButton.url}
            className="px-8 py-4 bg-background text-foreground rounded-full font-semibold text-lg hover:scale-105 transition-transform text-center"
          >
            {primaryButton.text}
          </a>
          <a 
            href={secondaryButton.url}
            className="px-8 py-4 bg-transparent border border-background/30 hover:bg-background/10 text-background rounded-full font-semibold text-lg transition-colors text-center"
          >
            {secondaryButton.text}
          </a>
        </div>
      </div>
    </section>
  );
}
