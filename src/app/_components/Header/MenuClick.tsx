"use client";
import { ButtonHTMLAttributes} from "react";

interface MenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function MenuClick({ children, ...props }: MenuProps) {
    return (
        <button
            className="bg-transparent hover:bg-gray-400 text-black h-full w-full hover:text-gray-10/20 p-[0.5rem] rounded-[0.375rem] text-center border-none"
            {...props}
        >
            {children}
        </button>
    )
}