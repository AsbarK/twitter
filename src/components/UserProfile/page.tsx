'use client'
import { useCurrentUser } from "@/hooks/user"
import Image from "next/image"


export default function ProfileBadge(){
    const {user} = useCurrentUser()
    return (
        user && user.profileImageUrl && (<div className="flex gap-2 items-center justify-between sm:pr-12">
                <Image src={user.profileImageUrl} alt={user.firstName} height={50} width={50} className="rounded-full"></Image> 
                <div>
                    <h1 className="text-lg font-bold overflow-hidden">{user.firstName} {user.lastName}</h1>
                    <h5 className="text-sm font-thin">{user.email}</h5>
                </div>
        </div>)
    )
}