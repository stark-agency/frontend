import React from "react";
import { SharedButton } from "./Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface ButtonGroupProps {
  isDark: boolean;
  starkOrange: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ isDark, starkOrange }) => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <SharedButton
      className="text-white font-bold px-8 py-4 hover:opacity-90 transition-opacity tracking-wide flex items-center justify-center"
      style={{ backgroundColor: starkOrange, fontFamily: "Montserrat, sans-serif" }}
    >
      <span className="flex items-center gap-2">
        Start Your Transformation
        <ArrowRightIcon className="h-5 w-5" />
      </span>
    </SharedButton>
    <SharedButton
      className={`px-8 py-4 border-2 bg-transparent transition-colors duration-300 font-bold tracking-wide ${
        isDark ? "hover:bg-gray-800" : "hover:bg-gray-50"
      }`}
      style={{ borderColor: starkOrange, color: starkOrange, fontFamily: "Montserrat, sans-serif" }}
    >
      View Our Work
    </SharedButton>
  </div>
);
