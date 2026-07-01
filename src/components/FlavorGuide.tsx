import { siteConfig } from "@/config/content";

export function FlavorGuide() {
  const { title, description, cards } = siteConfig.flavorGuide;

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-foreground/70 text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index}
            className={`p-8 rounded-3xl text-center border transition-all ${
              card.recommended 
                ? "border-foreground bg-foreground/5 shadow-sm scale-105" 
                : "border-foreground/10 bg-transparent hover:bg-foreground/5"
            }`}
          >
            {card.recommended && (
              <div className="inline-block px-3 py-1 bg-foreground text-background text-xs font-bold rounded-full mb-4">
                Recommended
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{card.level}</h3>
            <p className="text-foreground/70">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
