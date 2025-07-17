interface FooterProps {
  isDark: boolean;
  starkOrange: string;
}

export default function Footer({ isDark, starkOrange }: FooterProps) {
  return (
    <footer
      className={`px-6 py-12 border-t transition-colors duration-300 ${
        isDark ? "border-gray-800 bg-gray-800" : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div
            className={`text-2xl font-bold mb-4 md:mb-0 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            STARK<span style={{ color: starkOrange }}>.</span>
          </div>
          <div
            className={`flex space-x-6 text-sm transition-colors duration-300 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            <a
              href="#"
              className={`transition-colors duration-300 tracking-wide ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`transition-colors duration-300 tracking-wide ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className={`transition-colors duration-300 tracking-wide ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
            >
              Contact
            </a>
          </div>
        </div>
        <div
          className={`mt-8 pt-8 border-t text-center text-sm transition-colors duration-300 ${
            isDark ? "border-gray-700 text-gray-500" : "border-gray-200 text-gray-500"
          }`}
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          © 2024 Stark Agency. Rooted in Jordan, Building Impact Across MENA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

