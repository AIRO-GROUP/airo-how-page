import { siteConfig } from "@/config/content";
import { motion, AnimatePresence } from "framer-motion";

interface VideoSectionProps {
  selectedProduct: string | null;
}

export function VideoSection({ selectedProduct }: VideoSectionProps) {
  if (!selectedProduct) return null;

  const product = siteConfig.products[selectedProduct as keyof typeof siteConfig.products];

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto w-full" id="video-section">
      <div className="bg-brand-card p-4 rounded-3xl border border-brand-border shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="aspect-video rounded-2xl overflow-hidden bg-brand-bg relative"
          >
            {/* We use an iframe for external videos or a video tag for MP4s */}
            <video 
              src={product.videoUrl} 
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
