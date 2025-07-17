import { Check, Target } from "lucide-react";

interface AboutProps {
  isDark: boolean;
  starkOrange: string;
}

export default function About({ isDark, starkOrange }: AboutProps) {
  return (
    <section
      id="about"
      className={`px-6 py-20 transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              About Stark Agency
            </h2>
            <p
              className={`text-lg mb-6 transition-colors duration-300 leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              <strong>Mission:</strong> To empower ambitious businesses across the MENA region and beyond by
              delivering seamlessly integrated marketing, creative, and technical solutions — built with the newest
              tools, boldest thinking, and most scalable technology in the market.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                  style={{ backgroundColor: isDark ? "rgba(255, 128, 0, 0.15)" : "rgba(255, 128, 0, 0.1)" }}
                >
                  <Check className="h-3 w-3" style={{ color: starkOrange }} />
                </div>
                <p
                  className={`text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  <strong>Brand Voice:</strong> Confident & Bold, Clear & Technical, Creative & Curious, Professional & Relatable
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                  style={{ backgroundColor: isDark ? "rgba(255, 128, 0, 0.15)" : "rgba(255, 128, 0, 0.1)" }}
                >
                  <Target className="h-3 w-3" style={{ color: starkOrange }} />
                </div>
                <p
                  className={`text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  <strong>Specialization:</strong> Team in action, tech-focused solutions, AI visuals, authentic and bold approach
                </p>
              </div>
            </div>
          </div>
          <div
            className={`p-8 rounded-lg border transition-colors duration-300 ${
              isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"
            }`}
          >
            <h3
              className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Social Media Strategy
            </h3>
            <div className="space-y-3">
              <div>
                <h4
                  className={`font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Content Pillars:
                </h4>
                <ul
                  className={`text-sm space-y-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  <li>• Showcase Our Work (case studies, stats)</li>
                  <li>• Tech + Marketing Tips (AI, tools, advice)</li>
                  <li>• Meet the Team / Behind the Scenes</li>
                  <li>• Community & Local Impact</li>
                  <li>• Industry Trends & Insights</li>
                </ul>
              </div>
              <div>
                <h4
                  className={`font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Key Hashtags:
                </h4>
                <p
                  className={`text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  #StarkAgency #MarketingMENA #AITechAgency #BrandStrategy #UIUX #SocialMediaMarketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

