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
                    <div className="text-3xl w-fit p-2 hover:bg-gray-600 rounded-full m-1 cursor-pointer">
                    <FaXTwitter/>
                    </div>
                    <ul>
                        {sideBarItems.map((item)=>(
                            <li key={item.title} className="flex gap-4 w-fit my-2 hover:bg-gray-600 rounded-full px-3 py-2 cursor-pointer">
                                <span className="text-3xl">{item.icon}</span>
                                <span className="text-xl">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="text-lg font-semibold bg-[#1D9BF0] p-3 w-full rounded-full hover:bg-[#188CD8]">Post</button>
                </div>
                <div className='col-span-6 border'>feed</div>
                <div className='col-span-3'>search</div>
            </div>
        </div>
        
    );
}