import React from "react";
import { Sun, Moon } from "lucide-react";
import { SharedButton } from "@/app/src/shared/Button";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  starkOrange: string;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme, starkOrange }) => (
  <header
    className={`px-6 py-4 border-b transition-colors duration-300 ${
      isDark ? "border-gray-800" : "border-orange-100"
    }`}
  >
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div
        className={`text-2xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        STARK<span style={{ color: starkOrange }}>.</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a
          href="#services"
          className={`transition-colors duration-300 font-medium tracking-wide ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
          }`}
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          Services
        </a>
        <a
          href="#about"
          className={`transition-colors duration-300 font-medium tracking-wide ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
          }`}
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          About
        </a>
        <a
          href="#vision"
          className={`transition-colors duration-300 font-medium tracking-wide ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
          }`}
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          Vision
        </a>
        <a
          href="#contact"
          className={`transition-colors duration-300 font-medium tracking-wide ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
          }`}
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          Contact
        </a>
      </nav>
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${
            isDark
              ? "bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700"
              : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <SharedButton
          className="text-white font-bold hover:opacity-90 transition-opacity tracking-wide"
          style={{ backgroundColor: starkOrange, fontFamily: "Montserrat, sans-serif" }}
        >
          Get Started
        </SharedButton>
      </div>
    </div>
  </header>
);

export default Header;

