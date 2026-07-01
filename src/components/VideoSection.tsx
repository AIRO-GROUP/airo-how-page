import { siteConfig } from "@/config/content";
import { motion, AnimatePresence } from "framer-motion";

interface VideoSectionProps {
  selectedProduct: string | null;
}

export function VideoSection({ selectedProduct }: VideoSectionProps) {
  if (!selectedProduct) return null;

  const product = siteConfig.products[selectedProduct as keyof typeof siteConfig.products];

  return (
            playsInline
            preload="metadata"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
