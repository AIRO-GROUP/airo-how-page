export const siteConfig = {
  hero: {
    headline: "How to Use AIRO",
    subheadline: "Choose the AIRO product you're holding to watch a quick demonstration.",
  },
  products: {
    squeezer: {
      id: "squeezer",
      name: "AIRO Squeezer Bottle",
      description: "Add AIRO to your water with a simple squeeze and customize the flavor intensity to your preference.",
      buttonText: "Watch Squeezer Demo",
      image: "/squeezer.png",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder for Squeezer Video URL
      instructions: [
        "Fill your bottle or glass with water.",
        "Squeeze AIRO into the water.",
        "Adjust the amount to your preferred flavor strength.",
        "Shake gently.",
        "Enjoy."
      ]
    },
    twist: {
      id: "twist",
      name: "AIRO Twist Cap Bottle",
      description: "Twist the cap to release the flavor into your water, then shake gently and enjoy.",
      buttonText: "Watch Twist Cap Demo",
      image: "/twist.png",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder for Twist Cap Video URL
      instructions: [
        "Open your bottle of water.",
        "Place the AIRO Twist Cap onto the bottle if applicable.",
        "Twist the cap until the flavor is released into the water.",
        "Shake gently to mix.",
        "Enjoy."
      ]
    }
  },
  dosingGuide: {
    title: "How Much to Use",
    description: "Get the perfect flavor balance for your bottle size.",
    cards: [
      { volume: "300ml Water", dose: "4ml of Liquid", action: "1 Squeeze" },
      { volume: "600ml Water", dose: "8ml of Liquid", action: "2 Squeezes" }
    ]
  },
  tips: [
    "Best served chilled",
    "Shake before drinking",
    "Works best with approximately 250–750 mL of water",
    "Enjoy anytime during the day"
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How much should I use?",
        answer: "It depends on your preference. We recommend starting with a small squeeze or a half twist and adjusting from there."
      },
      {
        question: "Can I drink it every day?",
        answer: "Yes, AIRO is designed to be enjoyed daily."
      },
      {
        question: "Does it contain sugar?",
        answer: "AIRO products are sugar-free and use premium zero-calorie sweeteners."
      },
      {
        question: "Can I use sparkling water?",
        answer: "Absolutely! AIRO works great with both still and sparkling water."
      },
      {
        question: "How many servings are in one bottle?",
        answer: "A standard squeezer provides approximately 30 servings, depending on usage intensity."
      },
      {
        question: "Is the Twist Cap reusable?",
        answer: "The twist cap is designed for single-use with its corresponding bottle, but the bottle itself is fully recyclable."
      },
      {
        question: "Can I recycle the packaging?",
        answer: "Yes, our packaging is 100% recyclable."
      }
    ]
  },
  cta: {
    headline: "Want to Learn More About AIRO?",
    text: "Explore every flavor, ingredients, benefits, and where to buy AIRO.",
    primaryButton: {
      text: "Visit Website",
      url: "#"
    },
    secondaryButton: {
      text: "Shop AIRO",
      url: "#"
    }
  },
  nav: [
    { label: "Squeezer", target: "squeezer" },
    { label: "Twist Cap", target: "twist" },
    { label: "FAQ", target: "faq" },
    { label: "Visit Website", target: "#" }
  ]
};
