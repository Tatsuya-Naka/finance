import Image from "next/image";
import { TbSettings } from "react-icons/tb";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { getServerAuthSession } from "~/server/auth";
import Color from "./Color";
import MenuSide from "./Menu";
import HeaderIcon from "./HeaderIcon";

export default async function HeaderComp() {
    const session = await getServerAuthSession();

    const searchresult = async (formData: FormData) => {
        "use server";
        const search = formData.get("searchvalue") as string;

        try {
            // writing prisma or any other database query
            console.log("connecting to database, serach result: ", search);
        } catch (error) {
            console.log("Error occured while connecting database: ", error);
        }
    }

    return (
        <>
            <nav className="bg-white z-[100] fixed top-0 right-0 left-0 w-full h-[56px] box-border">
                <div className="max-w-[1380px] flex items-center relative px-[0.5rem] m-auto h-full ">
                    {/* Menu bar & Logo */}
                    <div className="flex items-center gap-3">
                        {/* Menu */}
                        <MenuSide image={session?.user.image} name={session?.user.name} id={session?.user.id}/>
                        <Link
                            href={session?.user ? '/' : '/'}
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
                            action={searchresult}
                        >
                            <div className="md:flex hidden flex-nowrap ">
                                <div className="relative flex flex-1 flex-col text-[1rem] ">
                                    <input
                                        className="pl-[40px] pr-[142px] leading-relaxed py-[calc(0.5rem-2.5px)] px-[0.5rem] text-[1rem] w-full resize-y border-[1.5px] border-gray-200 rounded-[0.375rem] transition-all duration-100 "
                                        placeholder="Search..."
                                        type="text"
                                        id="search"
                                        // onChange={handleSearch}
                                        name="searchvalue"
                                    />
                                    {/* Search Drop Box */}


                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        className="absolute py-0 mt-0 right-auto inset-0 p-[0.5rem] bg-transparent hover:bg-gray-600 text-black hover:text-gray-700 inline-block rounded-l-[0.375rem] text-center "
                                        formAction={searchresult}
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
                        <form className="flex md:hidden " action={searchresult}>
                            <HeaderIcon type="submit">
                                <BsSearch size={24} />
                            </HeaderIcon>
                        </form>
                        {/* Dark Mode */}
                        <span
                            className="..."
                        >
                            <div className="mx-1">
                                <Color />
                            </div>
                        </span>
                        {/* Setting */}
                        <span
                            className="..."
                        >
                            <div className="mx-1">
                                <HeaderIcon className="hover:animate-spin">
                                    <TbSettings className="w-full h-full" size={32} />
                                </HeaderIcon>
                            </div>
                        </span>
                        {/* User Icon */}
                        {session &&
                            <span
                                className="..."
                            >
                                <div className="mx-1" >
                                    <HeaderIcon>
                                        <Image
                                            src={session?.user.image ?? ""}
                                            alt={session?.user.name ?? ""}
                                            height={32}
                                            width={32}
                                            className="w-full  h-full rounded-full"
                                        />
                                    </HeaderIcon>
                                </div>
                            </span>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
};