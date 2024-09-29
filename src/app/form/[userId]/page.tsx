import HeaderComp from "~/app/_components/Header/Header";
import { HydrateClient } from "~/trpc/server";
import Image from "next/image";
import image from "../../../images/image.png"
import { StaticImageData } from "next/image";
import Title from "~/app/_components/title/Title";
import { FaTools } from "react-icons/fa";
import ButtonLink from "~/app/_components/form/ButtonLink";
import { getServerAuthSession } from "~/server/auth";

export default async function FormUpdate() {
    const image_data: StaticImageData = image
    const session = await getServerAuthSession();

    return (
        <HydrateClient>
            <HeaderComp />
            <main className="pt-[56px] bg-transparent grid grid-cols-[3fr_2fr] p-[1rem] min-h-[calc(100vh-56px)] gap-4">
                {/* Put the way like how to post your purchase record by a video or git something*/}
                <div className="w-full flex items-center">
                    <div className="w-full bg-white shadow-lg rounded-lg">
                        <Image
                            src={image_data}
                            alt={"Image"}
                            height={400}
                            width={400}
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col py-[1rem]">
                    <Title title={"Register Your Purchase Record"} subtitle={"Keep up your financial status"} />
                    <div className="my-[1rem]">
                        <h2>Key concept</h2>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2">
                        <div className="bg-white shadow-lg rounded-lg w-full h-full">
                            <div className="flex px-[1rem] items-center py-[0.5rem] gap-2 ">
                                <FaTools />
                                <span>
                                    <p>Save your money</p>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg w-full h-full">
                            <div className="flex px-[1rem] items-center py-[0.5rem] gap-2 ">
                                <FaTools />
                                <span>
                                    <p>Save your money</p>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg w-full h-full">
                            <div className="flex px-[1rem] items-center py-[0.5rem] gap-2 ">
                                <FaTools />
                                <span>
                                    <p>Save your money</p>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg w-full h-full">
                            <div className="flex px-[1rem] items-center py-[0.5rem] gap-2 ">
                                <FaTools />
                                <span>
                                    <p>Save your money</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-[1rem] ">
                        <Title title={"In a miniute"} className="text-sm" />
                        <div className="text-center py-[1rem]">
                            <ButtonLink url={`/form/register/${session?.user.id}`}>
                                Click here
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </main>
        </HydrateClient>
    )
};