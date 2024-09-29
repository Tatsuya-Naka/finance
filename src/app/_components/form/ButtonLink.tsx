import Link from "next/link";

interface Props {
    children: React.ReactNode;
    url: string;
}

export default function ButtonLink({ children, url }: Props) {
    return (
        <Link
            href={url}
            className="text-white px-[1rem] py-[0.5rem] rounded-md bg-green-500 hover:bg-green-600 cursor-pointer"
        >
            {children}
        </Link>
    )
};