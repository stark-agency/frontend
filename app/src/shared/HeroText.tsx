import React from "react";

interface HeroTextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  isDark?: boolean
}

export const HeroText: React.FC<HeroTextProps> = ({ children, isDark, style }) => (
  <p className={`text-center ${isDark ? "text-white" : ""} text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6`} style={style}>
    {children}
  </p>
);

