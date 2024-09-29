"use client";
import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import HeaderIcon from "./HeaderIcon";
export default function Color() {
    const [color, setColor] = useState("bright");

    const handleColor = () => {
        if (color == "bright") {
            setColor("dark");
        }
        else if (color == "dark") {
            setColor("bright");
        }
    };
    return (
        <HeaderIcon type="button" className="hover:animate-spin" onClick={handleColor}>
            {color == "bright" ? <IoSunnyOutline className="w-full h-full" size={32} /> : <LuMoon className="w-full h-full" size={32} />}
        </HeaderIcon>
    )
};