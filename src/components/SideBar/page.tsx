'use client'
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi2";
import { FaRegEnvelope,FaRegBookmark } from "react-icons/fa";
import { FaRegUser,FaXTwitter } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { BsSlashSquare } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import ProfileBadge from "@/components/profile/page";
import { useCurrentUser } from "@/hooks/user";
import Link from "next/link";


interface sideBarItemsType  {
    title: string,
    icon: React.ReactNode,
    link:string
}



export default function SideBar(){
    const {user} = useCurrentUser()
    const sideBarItems : sideBarItemsType[] = [
        {
            title: 'Home',
            icon: <GoHomeFill/>,
            link:'/'
        },
        {
            title: 'Explore',
            icon: <IoSearch/>,
            link:'/'
        },
        {
            title: 'Notifications',
            icon: <HiOutlineBell/>,
            link:'/'
        },
        {
            title: 'Messages',
            icon: <FaRegEnvelope/>,
            link:'/'
        },
        {
            title: 'Grok',
            icon: <BsSlashSquare/>,
            link:'/'
        },
        {
            title: 'Lists',
            icon: <TbNotes/>,
            link:'/'
        },
        {
            title: 'Bookmarks',
            icon: <FaRegBookmark/>,
            link:'/'
        },
        {
            title: 'Communities',
            icon: <LuUsers2/>,
            link:'/'
        },
        {
            title: 'Premium',
            icon: <FaXTwitter/>,
            link:'/'
        },
        {
            title: 'Profile',
            icon: <FaRegUser/>,
            link:`/${user?.id}`
        },
        {
            title: 'More',
            icon: <CiCircleMore/>,
            link:'/'
        },
    
    ]
    return (
        <div>
            <div className="text-3xl w-fit p-2 hover:bg-[#181818] rounded-full sm:m-1 cursor-pointer transition-all">
            <FaXTwitter/>
            </div>
            <div>
              <ul>
                  {sideBarItems.map((item)=>(
                    <li key={item.title} >
                        <Link href={item.link} className="flex sm:gap-4 w-fit my-2 hover:bg-[#181818] rounded-full pr-6 pl-3 py-2 cursor-pointer transition-all">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="hidden text-lg md:block">{item.title}</span>
                        </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <button className="hidden md:block text-lg font-semibold bg-[#1D9BF0] p-3 w-full rounded-full hover:bg-[#188CD8] transition-all cursor-pointer">Post</button>
            <button className="md:hidden text-lg font-semibold bg-[#1D9BF0] p-3 w-fit rounded-full hover:bg-[#188CD8] transition-all cursor-pointer"><FaXTwitter/></button>
            <div className="hidden md:block absolute bottom-4 px-3 py-2  hover:bg-[#181818] rounded-full transition-all cursor-pointer">
                <ProfileBadge/>
            </div>
        </div>
    )
}