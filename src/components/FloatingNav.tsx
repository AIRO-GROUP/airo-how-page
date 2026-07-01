"use client";

import { siteConfig } from "@/config/content";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingNav({ onSelect }: { onSelect?: (id: string) => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past hero
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { label: string, target: string }) => {
    if (item.target === 'squeezer' || item.target === 'twist') {
      e.preventDefault();
      if (onSelect) onSelect(item.target);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    } else if (item.target === 'faq') {
      e.preventDefault();
      const el = document.getElementById('faq');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none"
        >
          <nav className="bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-full px-2 py-2 flex items-center gap-1 shadow-lg pointer-events-auto">
            {siteConfig.nav.map((item, index) => (
              <a
                key={index}
                href={item.target.startsWith('http') ? item.target : `#${item.target}`}
                onClick={(e) => handleClick(e, item)}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:bg-foreground/5 hover:text-foreground transition-colors"
                target={item.target.startsWith('http') ? "_blank" : "_self"}
                rel={item.target.startsWith('http') ? "noopener noreferrer" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
