"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { ProductSelection } from "@/components/ProductSelection";
import { VideoSection } from "@/components/VideoSection";
import { Instructions } from "@/components/Instructions";
import { FlavorGuide } from "@/components/FlavorGuide";
import { HelpfulTips } from "@/components/HelpfulTips";
import { FAQ } from "@/components/FAQ";
import { BottomCTA } from "@/components/BottomCTA";
import { FloatingNav } from "@/components/FloatingNav";

export function HowClient() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleSelectProduct = (id: string) => {
    setSelectedProduct(id);
    // Add a slight delay before scrolling to allow UI to update
    setTimeout(() => {
      const videoSection = document.getElementById("video-section");
      if (videoSection) {
        videoSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen pb-10">
      <FloatingNav onSelect={handleSelectProduct} />
      <Hero />
      <ProductSelection selectedProduct={selectedProduct} onSelect={handleSelectProduct} />
      
      {/* Dynamic Content Based on Selection */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 bg-transparent"
      >
        {!selectedProduct && (
          <div className="text-center py-20 text-foreground/50">
            <p className="text-xl">Please select a product above to view instructions.</p>
          </div>
        )}
        <VideoSection selectedProduct={selectedProduct} />
        <Instructions selectedProduct={selectedProduct} />
      </motion.div>

      <FlavorGuide />
      <HelpfulTips />
      <FAQ />
      <BottomCTA />
    </main>
  );
}
