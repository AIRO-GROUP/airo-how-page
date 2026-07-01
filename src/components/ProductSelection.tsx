import { siteConfig } from "@/config/content";
import { motion } from "framer-motion";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProductSelectionProps {
  selectedProduct: string | null;
  onSelect: (id: string) => void;
}

export function ProductSelection({ selectedProduct, onSelect }: ProductSelectionProps) {
  const products = Object.values(siteConfig.products);

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => {
          const isSelected = selectedProduct === product.id;
          
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => onSelect(product.id)}
              className={cn(
                "relative group cursor-pointer rounded-3xl overflow-hidden p-8 transition-all duration-500 border bg-brand-card",
                isSelected ? "ring-2 ring-brand-navy border-brand-navy shadow-md" : "border-brand-border shadow-sm hover:shadow-md hover:border-brand-navy/30"
              )}
            >
              <div className="aspect-[4/5] relative mb-6 rounded-2xl overflow-hidden bg-transparent">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
                <p className="text-brand-muted mb-6">{product.description}</p>
                <button 
                  className={cn(
                    "px-6 py-3 rounded-full font-medium transition-colors w-full sm:w-auto",
                    isSelected 
                      ? "bg-brand-navy text-white" 
                      : "bg-brand-bg text-brand-navy group-hover:bg-brand-navy group-hover:text-white"
                  )}
                >
                  {product.buttonText}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
