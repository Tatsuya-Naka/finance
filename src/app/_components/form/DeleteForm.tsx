"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SaveForm } from "~/app/action/action";

interface Props {
    userId: string | undefined;
};

export default function DeleteForm({ userId }: Props) {
    const router = useRouter();
    const [isClose, setIsClose] = useState(false);
    const handleDeleteForm = () => {
        setIsClose(prev => !prev);
    };

    return (
        <>
            <button
                className="bg-transparent hover:bg-gray-300 rounded-full p-[0.5rem] cursor-pointer"
                type="button"
                onClick={handleDeleteForm}
            >
                <IoClose />
            </button>
            {isClose &&
                // Dialog
                <div className="">
                    <div className="fixed inset-0 bg-black bg-opacity-60" />
                    <div className="fixed overflow-hidden flex items-center justify-center left-0 top-0 right-0 bottom-0">
                        <div className="sm:max-h-[250px] h-full w-full sm:w-[90%] max-w-[640px] grid grid-rows-[auto_1fr] bg-white sm:rounded-lg border-non shadow-xl" >
                            {/* Header */}
                            <div className="px-[1rem] py-[0.5rem] sm:px-[2rem] border-b-[1px] border-b-solid flex items-center justify-between">
                                <h2 className="sm:text-[1.25rem] text-[1.125rem] sm:leading-[1.5] leading-[1.25] font-[700] mb-0">
                                    Final Confirmation
                                </h2>

                                <button
                                    type="button"
                                    className="bg-transparent hover:bg-gray-300 rounded-md p-[0.5rem] cursor-pointer"
                                    onClick={() => setIsClose(false)}
                                >
                                    <IoClose />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="sm:p-[2rem] p-[0.75rem] max-h-full m-auto flex flex-col gap-4 overflow-y-auto">
                                <p className="m-0">
                                    You are making your new purchase record. Do you want to leave this page?
                                </p>
                                <div className="pt-4">
                                    <Link
                                        href={`/form/${userId}`}
                                        prefetch={false}
                                        className="mr-2 bg-gray-200 w-full h-full text-gray-900 px-4 py-3 rounded-md hover:bg-gray-300"
                                    >
                                        Yes, leave this page
                                    </Link>

                                    <button
                                        type="submit"
                                        className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                        formAction={async(formData: FormData) => {
                                            await SaveForm(formData);
                                        }}
                                    >
                                        No, save this record
                                    </button>

                                    <button
                                        type="button"
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                        onClick={() => setIsClose(false)}
                                    >
                                        Keep editting
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};