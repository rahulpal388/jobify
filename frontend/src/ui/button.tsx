import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export function Button({ children, className = "", ...props }: ButtonProps) {
    return (
        <button
            className={`px-4 py-1 rounded cursor-pointer text-lg font-medium text-center ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
