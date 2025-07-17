import React from "react";
import { HeroText } from "@/app/src/shared/HeroText";
import { ButtonGroup } from "@/app/src/shared/ButtonGroup";

interface HeroProps {
  isDark: boolean;
  starkOrange: string;
}

const Hero: React.FC<HeroProps> = ({ isDark, starkOrange }) => (
  <section className="px-6 py-20 lg:py-32">
    <div className="max-w-6xl mx-auto text-center">
      <div
        className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 transition-colors duration-300 tracking-wide"
        style={{
          backgroundColor: isDark ? "rgba(255, 128, 0, 0.15)" : "rgba(255, 128, 0, 0.1)",
          color: starkOrange,
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        🚀 Palestine's First AI-Driven Marketing Agency
      </div>
      <h1
        className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-colors duration-300 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Strategy. Creativity. Code.<br />
        <span style={{ color: starkOrange }}>Delivered at Scale.</span>
      </h1>
      <HeroText style={{ fontFamily: "Lato, sans-serif" }}>
        AI-Driven Marketing. Scalable Tech. Unstoppable Brands.
      </HeroText>
      <HeroText style={{ fontFamily: "Lato, sans-serif" }}>
        Your Local Partner for Global Ambition across the MENA region and beyond.
      </HeroText>
      <ButtonGroup isDark={isDark} starkOrange={starkOrange} />
    </div>
  </section>
);

export default Hero;

