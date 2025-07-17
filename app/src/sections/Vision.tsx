import React from "react";
import { Eye } from "lucide-react";

interface VisionProps {
  isDark: boolean;
  starkOrange: string;
}

const Vision: React.FC<VisionProps> = ({ isDark, starkOrange }) => (
  <section
    id="vision"
    className={`px-6 py-20 transition-colors duration-300 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
  >
    <div className="max-w-4xl mx-auto text-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ backgroundColor: isDark ? "rgba(255, 128, 0, 0.15)" : "rgba(255, 128, 0, 0.1)" }}
      >
        <Eye className="h-8 w-8" style={{ color: starkOrange }} />
      </div>
      <h2
        className={`text-3xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Our Vision
      </h2>
      <p
        className={`text-lg md:text-xl leading-relaxed transition-colors duration-300 ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        To lead the future of digital transformation by redefining what a full-stack agency can do — turning local
        ambition into global achievement, and setting new creative, technical, and strategic benchmarks across the
        region.
      </p>
    </div>
  </section>
);

export default Vision;

