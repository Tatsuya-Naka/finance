import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import Title from "~/app/_components/title/Title";
import Items from "~/app/_components/form/Items";

export default async function Register() {
    return (
        <HydrateClient>
            <div className="max-w-[1380px] mx-auto">
                <nav className="flex justify-between items-center px-[2rem] py-[1rem] ">
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
                    <div className="flex">
                        <button
                            className=""
                            type="button"
                        >
                            <IoClose />
                        </button>
                    </div>
                </nav>

                <main className="t-[56px] px-[1rem] min-h-[calc(100vh-56px)]">
                    <form className="grid grid-cols-[3fr_5fr] gap-4 min-h-[calc(100vh-56px)] flex">
                        {/* Upload a receipt from image or camera */}
                        <div className="flex items-center h-full">
                            <div className="flex flex-col gap-3 items-center">
                                <div className="bg-gray-400 rounded-lg shadow-lg flex flex-col items-center gap-3 px-[4rem] py-[15rem] mb-[2rem] w-full cursor-pointer">
                                    <FaCameraRetro size={42} />
                                    <span className="flex text-basis font-[500]">
                                        Select from your image / Take a shot
                                    </span>
                                    {/* <input
                                type="file"
                                className="flex flex-col gap-2 cursor-pointer"
                                name="image"
                            >
                                <div className="">
                                    <FaCameraRetro />
                                </div>
                                <span className="text-base font-[500]">
                                    Select from your image/Take a shot
                                </span>
                            </input> */}
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label>
                                            Date of Purchase
                                        </label>
                                        <input
                                            name="date"
                                            type="date"
                                            className="rounded-md bg-gray-400 px-[2rem] py-[0.5rem] cursor-pointer outline-none"
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
                                            className="rounded-md bg-gray-400 px-[2rem] py-[0.5rem] cursor-pointer outline-none"
                                            placeholder="Input the place to buy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Item */}
                        <div className="t-0 right-0 left-0 max-h-[calc(100vh-56px)] no-scrollbar ">
                            <div className="mx-[1.5rem] flex justify-between">
                                <Title title={"Item"} />
                                <button
                                    className="bg-green-400 text-white hover:bg-green-700 rounded-md px-[2rem] py-[0.125rem]"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="overflow-y-scroll max-h-[calc(100vh-140px-3rem)] no-scrollbar flex flex-col gap-3 mx-[1.5rem] my-[1rem]">
                                {/* Attributes */}
                                <div className="grid grid-cols-3 w-full gap-1 pr-[16px]">
                                    <div className="flex flex-col gap-1">
                                        <label >
                                            Name
                                        </label>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label >
                                            Category
                                        </label>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex flex-col gap-1">
                                            <label >
                                                amount
                                            </label>
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <label >
                                                price
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Items */}
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                                <Items />
                            </div>

                            {/* Comment & save/confirm */}
                            <div className="h-[56px] flex justify-between mx-[1.5rem]">
                                <div className="pb-[1rem] w-full max-w-[520px] mr-[1rem]">
                                    <input
                                        type="text"
                                        name="comment"
                                        className="outline-none w-full bg-gray-300 rounded-md px-[1rem] py-[0.5rem]"
                                        placeholder="Comment..."
                                    />
                                </div>

                                <div className="flex gap-3 pb-[1rem]">
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
                                        className="px-[1rem] text-white py-[0.25em] test-white bg-red-400 hover:bg-red-500 rounded-md items-center flex text-center"
                                    >
                                        <span>Confirm</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>

                </main>
            </div>
        </HydrateClient>
    )
};