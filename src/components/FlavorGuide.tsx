import { siteConfig } from "@/config/content";

export function FlavorGuide() {
  const { title, description, cards } = siteConfig.flavorGuide;

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-brand-muted text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index}
            className={`p-8 rounded-3xl text-center border transition-all ${
              card.recommended 
                ? "border-brand-navy bg-brand-card shadow-lg scale-105" 
                : "border-brand-border bg-brand-card shadow-sm hover:shadow-md"
            }`}
          >
            {card.recommended && (
              <div className="inline-block px-3 py-1 bg-brand-navy text-white text-xs font-bold rounded-full mb-4">
                Recommended
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{card.level}</h3>
            <p className="text-brand-muted">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
