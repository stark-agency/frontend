interface StatsProps {
  isDark: boolean;
  starkOrange: string;
}

export default function Stats({ isDark, starkOrange }: StatsProps) {
  return (
    <section className={`px-6 py-20 transition-colors duration-300 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ color: starkOrange, fontFamily: "Montserrat, sans-serif" }}
            >
              #1
            </div>
            <p
              className={`text-lg transition-colors duration-300 tracking-wide ${isDark ? "text-gray-300" : "text-gray-600"}`}
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              AI-Driven Agency
            </p>
          </div>
          <div className="p-6">
            <div
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ color: starkOrange, fontFamily: "Montserrat, sans-serif" }}
            >
              100+
            </div>
            <p
              className={`text-lg transition-colors duration-300 tracking-wide ${isDark ? "text-gray-300" : "text-gray-600"}`}
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Brands Transformed
            </p>
          </div>
          <div className="p-6">
            <div
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ color: starkOrange, fontFamily: "Montserrat, sans-serif" }}
            >
              MENA
            </div>
            <p
              className={`text-lg transition-colors duration-300 tracking-wide ${isDark ? "text-gray-300" : "text-gray-600"}`}
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Regional Impact & Reach
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

