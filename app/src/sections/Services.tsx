import React from "react";
import { Target, Palette, Code } from "lucide-react";

interface ServicesProps {
  isDark: boolean;
  starkOrange: string;
}

const Services: React.FC<ServicesProps> = ({ isDark, starkOrange }) => (
  <section
    id="services"
    className={`px-6 py-20 transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-white"}`}
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Integrated Solutions. Built to Perform.
        </h2>
        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 leading-relaxed mb-4 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          Powered by Innovation.
        </p>
        <p
          className={`text-base max-w-4xl mx-auto transition-colors duration-300 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          Unlike fragmented freelancers or traditional firms, we offer one unified team, one shared strategy, and
          one powerful partner — capable of building, launching, and scaling brands in today's fast-moving digital
          world.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div
          className={`text-center p-8 rounded-lg border transition-all duration-300 ${
            isDark
              ? "bg-gray-800 border-gray-700 hover:border-gray-600"
              : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl"
          }`}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: isDark ? "rgba(255, 128, 0, 0.15)" : "rgba(255, 128, 0, 0.1)" }}
          >
            <Target className="h-8 w-8" style={{ color: starkOrange }} />
          </div>
          <h3
            className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Brand Strategy & Marketing
          </h3>
          <p
            className={`transition-colors duration-300 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            AI-driven insights, strategic planning, social media marketing, and results-focused campaigns that
            transform local ambition into global achievement.
          </p>
        </div>
        <div
          className={`text-center p-8 rounded-lg border transition-all duration-300 ${
            isDark
              ? "bg-gray-800 border-gray-700 hover:border-gray-600"
              : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl"
          }`}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: isDark ? "rgba(255, 128, 0, 0.15)" : "rgba(255, 128, 0, 0.1)" }}
          >
            <Palette className="h-8 w-8" style={{ color: starkOrange }} />
          </div>
          <h3
            className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Creative & Design
          </h3>
          <p
            className={`transition-colors duration-300 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Bold thinking, innovative creativity, UI/UX design, and brand identity that sets new benchmarks across
            the MENA region.
          </p>
        </div>
        <div
          className={`text-center p-8 rounded-lg border transition-all duration-300 ${
            isDark
              ? "bg-gray-800 border-gray-700 hover:border-gray-600"
              : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl"
          }`}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: isDark ? "rgba(255, 128, 0, 0.15)" : "rgba(255, 128, 0, 0.1)" }}
          >
            <Code className="h-8 w-8" style={{ color: starkOrange }} />
          </div>
          <h3
            className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Technology & Development
          </h3>
          <p
            className={`transition-colors duration-300 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Full-stack web and app development, automation, and scalable solutions to power your brand's growth.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;

