"use client";

import Link from "next/link";

// import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
    url: string;
    title: string;
}
const SideBarLink = ({children, url, title}: Props ) => {
    // const router = useRouter();
    // const handleRouter = async() => {
    //     await router.push(url);
    //     router.reload();
    // };
    return (
        <li className="...">
            <Link
                className="bg-transparent hover:bg-gray-200 cursor-pointer text-black hover:text-blue-300 flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                href={url ?? '/'}
            >
                <span className="mr-[0.5rem] ml-[calc(0.5rem*-1)]">
                    {children}
                </span>
                {title}
            </Link>
        </li>
    )
};
export default SideBarLink;