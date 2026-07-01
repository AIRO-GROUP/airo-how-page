import { HowClient } from "./HowClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use AIRO | AIRO Water Enhancer",
  description: "Learn how to use AIRO Water Enhancer products. Choose between the AIRO Squeezer Bottle and AIRO Twist Cap Bottle for quick demonstrations and instructions.",
};

export default function HowPage() {
  return <HowClient />;
}
