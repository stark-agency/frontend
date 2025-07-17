"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Header from "@/app/src/sections/Header";
import Hero from "@/app/src/sections/Hero";
import Vision from "@/app/src/sections/Vision";
import CoreValues from "@/app/src/sections/CoreValues";
import Services from "@/app/src/sections/Services";
import About from "@/app/src/sections/About";
import Stats from "@/app/src/sections/Stats";
import Contact from "@/app/src/sections/Contact";
import Footer from "@/app/src/sections/Footer";

export default function StarkAgencyPage() {
  const [isDark, setIsDark] = useState(true)
  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  const starkOrange = "#FF8000"

  type AnimatedSectionProps = {
    children: React.ReactNode;
    delay?: number;
  };

  function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} starkOrange={starkOrange}/>
      <AnimatedSection>
        <Hero isDark={isDark} starkOrange={starkOrange}/>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Vision isDark={isDark} starkOrange={starkOrange}/>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <CoreValues isDark={isDark} starkOrange={starkOrange}/>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <About isDark={isDark} starkOrange={starkOrange}/>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <Stats isDark={isDark} starkOrange={starkOrange}/>
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <Services isDark={isDark} starkOrange={starkOrange}/>
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <Contact starkOrange={starkOrange} isDark={isDark}/>
      </AnimatedSection>
      <Footer isDark={isDark} starkOrange={starkOrange}/>
    </div>
  );
}
