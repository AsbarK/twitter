import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { BiRepost,BiMessageRounded } from "react-icons/bi";
import { IoIosHeartEmpty,IoIosStats } from "react-icons/io";
import { LuShare } from "react-icons/lu";

export default function FeedCard(){
    return(
        <div className="grid grid-cols-12 border border-gray-600 border-x-0 border-b-0 mb-2 px-2">
            <div className="col-span-1"><Image src={'https://avatars.githubusercontent.com/u/106991686?v=4'} alt="user_avatar" height={40} width={40} className="rounded-full mt-5"/></div>
            <div className="col-span-11 p-2 flex-col justify-between items-center">
                <div>
                    <div>
                        author
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iste! Ratione eos sequi tempora ad earum reprehenderit. Id a expedita reiciendis neque sunt laboriosam officiis. Magnam ipsum voluptas pariatur modi?
                    </p>
                </div>
                <div className="flex justify-between text-lg text-[#71767B]">
                    <div className="hover:bg-[#1C294E] rounded-full p-2 transition-all cursor-pointer">
                        <BiMessageRounded/>
                    </div>
                    <div className="hover:bg-[#1C294E] rounded-full p-2 transition-all cursor-pointer">
                        <BiRepost/>
                    </div>
                    <div className="hover:bg-[#1C294E] rounded-full p-2 transition-all cursor-pointer">
                        <IoIosHeartEmpty/>
                    </div>
                    <div className="hover:bg-[#1C294E] rounded-full p-2 transition-all cursor-pointer">
                        <IoIosStats/>
                    </div>
                    <div className="flex text-sm ">
                        <div className="hover:bg-[#1C294E] rounded-full p-2 transition-all cursor-pointer">
                        <FaRegBookmark />
                        </div>
                        <div className="hover:bg-[#1C294E] rounded-full p-2 transition-all cursor-pointer">

                        <LuShare/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}