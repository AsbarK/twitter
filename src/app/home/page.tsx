import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi2";
import { FaRegEnvelope,FaRegBookmark } from "react-icons/fa";
import { FaRegUser,FaXTwitter } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { BsSlashSquare } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import FeedCard from "@/components/FeedCard/page";
import GoogleLoginSiginIn from "@/components/GoogleLogin/page";
import ProfileBadge from "@/components/profile/page";


interface sideBarItemsType  {
    title: string,
    icon: React.ReactNode
}

const sideBarItems : sideBarItemsType[] = [
    {
        title: 'Home',
        icon: <GoHomeFill/>
    },
    {
        title: 'Explore',
        icon: <IoSearch/>
    },
    {
        title: 'Notifications',
        icon: <HiOutlineBell/>
    },
    {
        title: 'Messages',
        icon: <FaRegEnvelope/>
    },
    {
        title: 'Grok',
        icon: <BsSlashSquare/>
    },
    {
        title: 'Lists',
        icon: <TbNotes/>
    },
    {
        title: 'Bookmarks',
        icon: <FaRegBookmark/>
    },
    {
        title: 'Communities',
        icon: <LuUsers2/>
    },
    {
        title: 'Premium',
        icon: <FaXTwitter/>
    },
    {
        title: 'Profile',
        icon: <FaRegUser/>
    },
    {
        title: 'More',
        icon: <CiCircleMore/>
    },

]

export default function HomeLayout(){
    
    return(
        <div>
            <div className='grid grid-cols-12 w-screen h-screen'>
                <div className='col-span-3 pl-[25%] mr-8'>
                    <div className="text-3xl w-fit p-2 hover:bg-[#181818] rounded-full m-1 cursor-pointer transition-all">
                    <FaXTwitter/>
                    </div>
                    <ul>
                        {sideBarItems.map((item)=>(
                            <li key={item.title} className="flex gap-4 w-fit my-2 hover:bg-[#181818] rounded-full pr-6 pl-3 py-2 cursor-pointer transition-all">
                                <span className="text-2xl">{item.icon}</span>
                                <span className="text-lg">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="text-lg font-semibold bg-[#1D9BF0] p-3 w-full rounded-full hover:bg-[#188CD8] transition-all cursor-pointer">Post</button>
                    <div className="absolute bottom-4 px-3 py-2 hover:bg-[#181818] rounded-full transition-all cursor-pointer">
                        <ProfileBadge/>
                    </div>
                </div>
                <div className='col-span-5 border border-gray-600 border-y-0 overflow-scroll'>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                </div>
                <div className='col-span-4'>
                    <GoogleLoginSiginIn />
                </div>
            </div>
        </div>
        
    );
}