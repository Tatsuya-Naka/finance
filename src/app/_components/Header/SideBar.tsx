"use client"
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import SideBarLink from "./SideBarLink";

interface Props {
    setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
    image: string | null | undefined;
    name: string | null | undefined;
    id: string | null | undefined;
}

export default function SideBar({ setIsMenu, image, name, id }: Props) {

    return (
        <div className="block fixed inset-0 z-[200]">
            <div className="bg-white max-w-[300px] w-10/12 fixed h-full overflow-y-auto">
                {/* header */}
                <div className="min-h-[56px] flex items-center justify-between pr-[1rem] pl-[1rem]">
                    <h2 className="flex-1 font-[700] leading-[1.25] text-[1.25rem] ">
                        Finance
                    </h2>
                    <button
                        className="shrink-0 bg-transparent hover:bg-gray-300 text-black hover:text-gray-300"
                        onClick={() => setIsMenu(false)}
                    >
                        <IoMdClose size={24} />
                    </button>
                </div>

                <div className="p-2 block">
                    {/* user Info */}
                    {image &&
                        <div className="block p-4">
                            <div className="flex flex-col items-center gap-3">
                                <Image
                                    src={image ?? ""}
                                    alt={"Profile Image"}
                                    height={200}
                                    width={200}
                                    className="rounded-full"
                                />
                                <h2 className="text-[1.5rem] font-[500]">{name}</h2>
                            </div>
                        </div>
                    }

                    {/* Page */}
                    <nav className="my-4">
                        <ul className="m-0 p-0 block">
                            {/* Home */}
                            <SideBarLink url={"/"} title={"Home"}>
                                <IoHome size={24} className="w-full h-full" />
                            </SideBarLink>
                            {/* Dashboard */}
                            <SideBarLink url={"/"} title={"Dashboard"}>
                                <MdSpaceDashboard size={24} className="w-full h-full" />
                            </SideBarLink>
                        </ul>
                    </nav>

                    {/* Form Register */}
                    <nav className="mb-4 block">
                        <p className="border-b-[1px] border-b-[#0e0e0e] border-b-solid pb-2 text-[0.875rem] leading-[1.5] font-[300] text-black">Post</p>
                        <ul className="m-0 pt-3 block">
                            {/* Post */}
                            <SideBarLink url={`/form/${id}`} title={"Form"}>
                                <IoHome size={24} className="w-full h-full" />
                            </SideBarLink>
                        </ul>
                    </nav>

                    {/*  */}
                    <nav className="mb-4 block">
                        <p className="border-b-[1px] border-b-[#0e0e0e] border-b-solid pb-2 text-[0.875rem] leading-[1.5] font-[300] text-black">Analysis</p>
                        <ul className="m-0 pt-3 block">
                            {/* Home */}
                            <SideBarLink url={"/"} title={"Home"}>
                                <IoHome size={24} className="w-full h-full" />
                            </SideBarLink>
                            {/* Dashboard */}
                            <SideBarLink url={"/"} title={"Dashboard"}>
                                <MdSpaceDashboard size={24} className="w-full h-full" />
                            </SideBarLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
};