import { siteConfig } from "@/config/content";
import { motion, AnimatePresence } from "framer-motion";

interface InstructionsProps {
  selectedProduct: string | null;
}

export function Instructions({ selectedProduct }: InstructionsProps) {
  if (!selectedProduct) return null;

  const product = siteConfig.products[selectedProduct as keyof typeof siteConfig.products];

  return (
    <section className="px-6 py-12 max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">How to Use the {product.name}</h2>
          <div className="space-y-4">
            {product.instructions.map((step, index) => (
              <div 
                key={index}
                className="flex items-start p-6 rounded-2xl bg-brand-card shadow-sm border border-brand-border hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </div>
                <p className="text-lg pt-0.5 text-brand-muted">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
