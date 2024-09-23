"use client";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
type CustomType = {
    name?: string | null;
    email?: string | null;
    id: string;
    image?: string | null;
};
interface Props {
    userData?: CustomType;
    isMenu: boolean;
    setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SideBar({ userData, isMenu, setIsMenu }: Props) {
    return (
        <div className="block fixed inset-0 z-[200]">
            <div className="bg-white max-w-[380px] w-10/12 fixed h-full overflow-y-auto">
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

                {/* user Info */}
                {userData &&
                    <div className="block py-[1.5rem]">
                        <div className="flex flex-col items-center gap-3">
                            <Image
                                src={userData?.image ?? ""}
                                alt={userData.name ?? ""}
                                height={200}
                                width={200}
                                className="rounded-full"
                            />
                            <h2 className="text-[1.5rem] font-[500]">{userData.name}</h2>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
};