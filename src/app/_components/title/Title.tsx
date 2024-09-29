import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLElement>{
    title: string;
    subtitle?: string;
};

export default async function Title({ title, subtitle, className }: Props) {
    return (
        <div className="w-full flex flex-col itmes-center">
            <h2 className={twMerge("text-xl font-[700]", className)}>
                {title}
            </h2>
            {subtitle &&
                <p className="text-base font-[500]">
                    {subtitle}
                </p>
            }
        </div>
    )
};