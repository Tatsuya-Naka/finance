import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
}

const HeaderIcon = ({children, className, ...props}: Props) => {
    return (
        <button
            type="button"
            className=
           {twMerge("items-center transition-all flex p-1 rounded-full bg-transparent hover:bg:blue-200 text-black hover:text-gray-700 text-center"
            , className
           )} 
           {...props}
        >
            {children}
        </button>
    )
}

export default HeaderIcon;