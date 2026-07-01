import { siteConfig } from "@/config/content";

export function DosingGuide() {
  const { title, description, cards } = siteConfig.dosingGuide;

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-brand-muted text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="p-8 rounded-3xl text-center border transition-all border-brand-border bg-brand-card shadow-sm hover:shadow-md"
          >
            <div className="inline-block px-4 py-2 bg-brand-navy text-white text-sm font-bold rounded-full mb-6">
              {card.action}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{card.volume}</h3>
            <p className="text-brand-muted text-lg">{card.dose}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
