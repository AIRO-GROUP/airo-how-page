import { siteConfig } from "@/config/content";
import { CheckCircle2 } from "lucide-react";

export function HelpfulTips() {
  const tips = siteConfig.tips;

  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div 
            key={index}
            className="flex items-center p-6 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-colors"
          >
            <CheckCircle2 className="w-6 h-6 text-foreground mr-4 flex-shrink-0" />
            <span className="text-lg font-medium">{tip}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
