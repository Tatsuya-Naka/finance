"use server"
import { getServerAuthSession } from "~/server/auth"
import Image from "next/image";

export default async function SidebarIcon() {
    const session = await getServerAuthSession();
    return (
        <>
            {session &&
                <div className="block p-4">
                    <div className="flex flex-col items-center gap-3">
                        <Image
                            src={session.user.image ?? ""}
                            alt={session.user.name ?? ""}
                            height={200}
                            width={200}
                            className="rounded-full"
                        />
                        <h2 className="text-[1.5rem] font-[500]">{session.user.name}</h2>
                    </div>
                </div>
            }
        </>
    )
}