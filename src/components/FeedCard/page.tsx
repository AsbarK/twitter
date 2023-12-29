import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { BiRepost,BiMessageRounded } from "react-icons/bi";
import { IoIosHeartEmpty,IoIosStats } from "react-icons/io";
import { LuShare } from "react-icons/lu";
import { Tweet } from "@/gql/graphql";
import Link from "next/link";

interface FeedCardDataType{
    data: Tweet
}
export default function FeedCard(props:FeedCardDataType){
    return(
        <div className="grid grid-cols-12 border border-gray-600 border-x-0 border-b-0 mb-2 px-2">
            <div className="col-span-1">
                {props.data.author?.profileImageUrl && props.data.author &&<Image src={props.data.author.profileImageUrl} alt={props.data.author?.firstName[0].toUpperCase()} height={40} width={40} className="rounded-full mt-5"/>}
            </div>
            <div className="col-span-11 p-2 flex-col justify-between items-center">
                <div>
                    <Link href={`/${props.data.author?.id}`}>
                        <div>
                            {props.data.author?.firstName}
                            {props.data.author?.lastName}
                        </div>
                    </Link>
                    <p>
                        {props.data.content}
                    </p>
                    {props.data.imageUrl && <Image src={props.data.imageUrl} alt="user-tweet-img" height={300} width={300}/>}
                </div>
                <div className="flex justify-between text-lg text-[#71767B]">
                    <div className="hover:bg-gradient-radial from-[#043657] to-black rounded-full p-2 transition-all cursor-pointer">
                        <BiMessageRounded/>
                    </div>
                    <div className="hover:bg-gradient-radial from-[#043657] to-black rounded-full p-2 transition-all cursor-pointer">
                        <BiRepost/>
                    </div>
                    <div className="hover:bg-gradient-radial from-[#043657] to-black rounded-full p-2 transition-all cursor-pointer">
                        <IoIosHeartEmpty/>
                    </div>
                    <div className="hover:bg-gradient-radial from-[#043657] to-black rounded-full p-2 transition-all cursor-pointer">
                        <IoIosStats/>
                    </div>
                    <div className="flex text-sm ">
                        <div className="hover:bg-gradient-radial from-[#043657] to-black rounded-full p-2 transition-all cursor-pointer">
                        <FaRegBookmark />
                        </div>
                        <div className="hover:bg-gradient-radial from-[#043657] to-black rounded-full p-2 transition-all cursor-pointer">

                        <LuShare/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}