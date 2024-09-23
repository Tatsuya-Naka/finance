"use client";
import Image from "next/image";
import { ReactEventHandler, useState } from "react";
import { TbSettings } from "react-icons/tb";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import SideBar from "./SideBar";
import { BsSearch } from "react-icons/bs";

type CustomType = {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
} | undefined;

interface Props {
    userData: CustomType;
};

export default function HeaderComp({ userData }: Props) {
    const [color, setColor] = useState("bright");
    const [isMenu, setIsMenu] = useState(false);
    const [search, setSearch] = useState("");

    const handleColor = () => {
        if (color == "bright") {
            setColor("dark");
        }
        else if (color == "dark") {
            setColor("bright");
        }
    };

    const handleMenubar = () => {
        setIsMenu(prev => !prev);
        if (isMenu) console.log("open ");
        else console.log("close");
    };

    const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearch(e.currentTarget.value);
    };

    return (
        <>
            <nav className="bg-white z-[100 fixed top-0 right-0 left-0 w-full h-[56px] box-border">
                <div className="max-w-[1380px] flex items-center relative px-[0.5rem] m-auto h-full ">
                    {/* Menu bar & Logo */}
                    <div className="flex items-center gap-3">
                        {/* Menu */}
                        <div className="inline-block flex">
                            <button
                                className="bg-transparent hover:bg-gray-400 text-black h-full w-full hover:text-gray-10/20 p-[0.5rem] rounded-[0.375rem] text-center border-none"
                                onClick={handleMenubar}
                            >
                                <IoIosMenu className="w-full h-full" size={24} />
                            </button>
                        </div>
                        <Link
                            href={userData ? '/' : '/'}
                        >
                            <h1 className="text-[1.5rem] font-[700]">
                                Finance
                            </h1>
                        </Link>
                    </div>

                    {/* Search Box */}
                    <div className="flex flex-auto mx-[1rem] items-center max-w-[400px]">
                        <form
                            className="block w-full"
                        >
                            <div className="md:flex hidden flex-nowrap ">
                                <div className="relative flex flex-1 flex-col text-[1rem] ">
                                    <input
                                        className="pl-[40px] pr-[142px] leading-relaxed py-[calc(0.5rem-2.5px)] px-[0.5rem] text-[1rem] w-full resize-y border-[1.5px] border-gray-200 rounded-[0.375rem] transition-all duration-100 "
                                        placeholder="Search..."
                                        type="text"
                                        id="search"
                                        onChange={handleSearch}
                                    />
                                    {/* Search Drop Box */}


                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        className="absolute py-0 mt-0 right-auto inset-0 p-[0.5rem] bg-transparent hover:bg-gray-600 text-black hover:text-gray-700 inline-block rounded-l-[0.375rem] text-center "
                                    >
                                        <BsSearch size={24} />
                                    </button>

                                    {/* Produced by Tatsuya */}
                                    <Link
                                        href="https://github.com/Tatsuya-Naka"
                                        className="absolute right-[8px] top-[3px] block text-[13px] text-[#717171] pl-[3px] flex items-center bg-white  mt-[0.5rem] gap-1 "
                                        target="_blank"
                                    >
                                        Powered by <span>@Tatsuya</span>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Dark mode & Setting & Profile */}
                    <div className="flex items-center h-100 ml-auto">
                        {/* Search Engine */}
                        <div className="flex md:hidden ">
                            <Link
                                href="#"
                                className="bg-white text-black font-[700] mx-1 p-[0.5rem] inline-block rounded-[0.375rem] w-full hover:text-gray-300 hover:bg-blue-200"
                            >
                                <BsSearch size={24} />
                            </Link>
                        </div>
                        {/* Dark Mode */}
                        <span
                            className="..."
                        >
                            <div className="mx-1">
                                <button
                                    type="button"
                                    className="items-center transition-all flex p-1 rounded-full bg-transparent hover:bg:blue-200 text-black hover:text-gray-700 text-center hover:animate-spin"
                                    onClick={handleColor}
                                >
                                    {color == "bright" ? <IoSunnyOutline className="w-full h-full" size={32} /> : <LuMoon className="w-full h-full" size={32} />}
                                </button>
                            </div>
                        </span>
                        {/* Setting */}
                        <span
                            className="..."
                        >
                            <div className="mx-1">
                                <button
                                    type="button"
                                    className="items-center transition-all flex p-1 rounded-full bg-transparent hover:bg:blue-200 text-black hover:text-gray-700 text-center hover:animate-spin"
                                >
                                    <TbSettings className="w-full h-full" size={32} />
                                </button>
                            </div>
                        </span>
                        {/* User Icon */}
                        {userData &&
                            <span
                                className="..."
                            >
                                <div className="mx-1">
                                    <button
                                        type="button"
                                        className="items-center transition-all flex p-1 rounded-full bg-transparent hover:bg:blue-200 text-black hover:text-gray-700 text-center"
                                    >
                                        <Image
                                            src={userData.image ?? ""}
                                            alt={userData.name ?? ""}
                                            height={32}
                                            width={32}
                                            className="w-full  h-full rounded-full"
                                        />
                                    </button>
                                </div>
                            </span>
                        }
                    </div>
                </div>
            </nav>
            {isMenu &&
                <div>
                    <SideBar userData={userData} isMenu={isMenu} setIsMenu={setIsMenu} />
                    <div className="bg-[#090909] opacity-50 fixed inset-0 z-[100]" onClick={() => setIsMenu(false)}/>
                </div>
            }
        </>
    );
};