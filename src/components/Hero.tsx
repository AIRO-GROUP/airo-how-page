import { siteConfig } from "@/config/content";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 px-6 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4 font-serif">
          {siteConfig.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
          {siteConfig.hero.subheadline}
        </p>
      </motion.div>
    </section>
  );
}
