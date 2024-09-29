"use client";
import { IoIosMenu } from "react-icons/io";
import MenuClick from "./MenuClick";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";

interface Props {
    image: string | null | undefined;
    name: string | null | undefined;
    id: string | null | undefined;
}

export default function MenuSide({ image, name, id }: Props) {
    const [isMenu, setIsMenu] = useState(false);
    const handleMenubar = () => {
        setIsMenu(prev => !prev);
    }
    useEffect(() => {
        if (isMenu) console.log("Open");
        else console.log("Close")
    }, [isMenu]);

    return (
        <div className="inline-block flex">
            <MenuClick onClick={handleMenubar}>
                <IoIosMenu className="w-full h-full" size={24} />
            </MenuClick>
            {isMenu &&
                <>
                    <SideBar setIsMenu={setIsMenu} image={image} name={name} id={id}/>
                    <div className="bg-[#090909] opacity-50 fixed inset-0 z-[100]" />
                </>
            }
        </div>
    )
}