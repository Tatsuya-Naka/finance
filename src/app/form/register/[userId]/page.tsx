"use server";
import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
// import { IoClose } from "react-icons/io5";
import UploadImage from "~/app/_components/form/UploadImage";
import AddDelete from "~/app/_components/form/AddDelete";
import DeleteForm from "~/app/_components/form/DeleteForm";
import { getServerAuthSession } from "~/server/auth";

export default async function Register() {
    const session = await getServerAuthSession();
    
    return (
        <HydrateClient>
            {/* stacking: need to consider position then everything looks good!  */}
            <form className="max-w-[1380px] mx-auto relative">
                <nav className="flex justify-between items-center px-[2rem] relative z-100 relative py-[1rem]">
                    <div className="flex gap-3">
                        {/* need to capture if it is not saved or posted */}
                        <Link
                            href="/"
                            className="text-[16px] font-[700]"
                        >
                            Finance
                        </Link>
                        <h2>Post your purchase record</h2>
                    </div>
                    <div className="">
                        <DeleteForm userId={session?.user.id}/>
                    </div>
                </nav>

                <main className="t-[56px] px-[1rem] min-h-[calc(100vh-56px)] absolute -z-10">
                    <div className="grid grid-cols-[3fr_5fr] gap-4 min-h-[calc(100vh-56px)] flex">
                        {/* Upload a receipt from image or camera */}
                        <div className="flex items-center h-full">
                            <div className="flex flex-col gap-3 items-center">
                                {/* Upload image */}
                                <label className="bg-gray-300 rounded-lg shadow-lg flex flex-col items-center gap-3 px-[4rem] py-[15rem] mb-[2rem] w-full cursor-pointer">
                                    <UploadImage />
                                </label>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label>
                                            Date of Purchase
                                        </label>
                                        <input
                                            name="date"
                                            type="date"
                                            className="outline-none w-full bg-gray-300 rounded-md px-[1rem] py-[0.5rem]"
                                            placeholder="2001-01-01"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>
                                            Place
                                        </label>
                                        <input
                                            name="place"
                                            type="text"
                                            className="outline-none w-full bg-gray-300 rounded-md px-[1rem] py-[0.5rem]"
                                            placeholder="Input the place to buy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Item */}
                        <div className="t-0 right-0 left-0 max-h-[calc(100vh-56px)] no-scrollbar relative z-0">
                            <AddDelete />

                            {/* Comment & save/confirm */}
                            <div className="h-[56px] flex justify-between mx-[1.5rem] bottom-[1rem] absolute left-0 right-0">
                                <div className=" w-full max-w-[520px] mr-[1rem] flex items-center">
                                    <input
                                        type="text"
                                        name="comment"
                                        className="outline-none w-full bg-gray-300 rounded-md px-[1rem] py-[0.5rem]"
                                        placeholder="Comment..."
                                    />
                                </div>

                                <div className="flex items-center gap-3 ">
                                    {/* save */}
                                    <button
                                        type="button"
                                        className="px-[1rem] py-[0.5rem] text-white bg-blue-400 hover:bg-blue-600 rounded-md"
                                    >
                                        Save
                                    </button>

                                    {/* Confirm */}
                                    <Link
                                        href="/"
                                        className="px-[1rem] text-white py-[0.5em] test-white bg-red-400 hover:bg-red-500 rounded-md items-center flex text-center"
                                    >
                                        <span>Confirm</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </form>
            
        </HydrateClient>
    )
};