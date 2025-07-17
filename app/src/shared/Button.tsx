import React from "react";

interface SharedButtonProps {
    className?: string;
    onPress?: () => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export const SharedButton: React.FC<SharedButtonProps> = ({
    className = "",
    onPress,
    children,
    style,
}) => {
    return (
        <button
            className={`px-4 py-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
            style={style}
            onClick={onPress}
        >
            {children || "Click Me"}
        </button>
    );
}