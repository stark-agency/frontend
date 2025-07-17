import React from "react";

interface TextInputProps {
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    type?: string;
    placeholder?: string;
    className?: string;
}

export const TextInput = ({
    value,
    onChange,
    type = "text",
    placeholder = "Enter text here",
    className = "border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
}: TextInputProps) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type={type}
            style={{ fontFamily: "Lato, sans-serif" }}
            placeholder={placeholder}
            className={className}
        />
    );
}