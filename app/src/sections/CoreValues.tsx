import { Zap, Users, Star, Lightbulb, Check, Globe } from "lucide-react";

interface CoreValuesProps {
  isDark: boolean;
  starkOrange: string;
}

export default function CoreValues({ isDark, starkOrange }: CoreValuesProps) {
  return (
    <section className={`px-6 py-20 transition-colors duration-300 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Our Core Values
          </h2>
          <p
            className={`text-lg transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            The principles that drive everything we do
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Integration",
              desc: "We operate as one powerful unit — strategy, creativity, and code combined.",
            },
            { icon: Users, title: "Partnership", desc: "Our clients' goals become our mission. We grow together." },
            {
              icon: Star,
              title: "Innovation",
              desc: "We stay ahead of the curve — fast, future-ready, and fearless.",
            },
            {
              icon: Lightbulb,
              title: "Creativity",
              desc: "We plan, act, and deliver in ways no agency has done before — from being Palestine's first AI-driven marketing agency to executing large-scale tech solutions no one else has touched.",
            },
            { icon: Check, title: "Excellence", desc: "We deliver world-class quality in every detail." },
            {
              icon: Globe,
              title: "Local Impact, Regional Reach",
              desc: "Rooted in Jordan, building impact across the MENA region.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border transition-all duration-300 ${
                isDark
                  ? "bg-gray-900 border-gray-700 hover:border-gray-600"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
              }`}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: isDark ? "rgba(255, 128, 0, 0.15)" : "rgba(255, 128, 0, 0.1)" }}
              >
                <value.icon className="h-6 w-6" style={{ color: starkOrange }} />
              </div>
              <h3
                className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {value.title}
              </h3>
              <p
                className={`text-sm transition-colors duration-300 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

