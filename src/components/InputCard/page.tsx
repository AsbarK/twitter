'use client'
import { useCreateTweet } from "@/hooks/tweet";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import { useCallback, useState } from "react";
import { GoFileMedia } from "react-icons/go";


export default function TweetInputCard(){
    const [content,setContent] = useState('')
    const handleSelectImage = useCallback(()=>{
        const inputtt = document.createElement('input')
        inputtt.setAttribute('type','file')
        inputtt.setAttribute('accept','image/*')
        inputtt.click()
    },[])
    const {user} = useCurrentUser()

    const {mutate} = useCreateTweet()

    const handleCreateTweet = useCallback(()=>{
        mutate({
            content,
        })
    },[content,mutate])
    
    return (
        user && <div className="grid grid-cols-12 border border-gray-600 border-x-0 border-b-0 mb-2 px-2">
            <div className="col-span-1">
                {user?.profileImageUrl && <Image src={user?.profileImageUrl} alt={user?.firstName[0].toUpperCase()} height={40} width={40} className="rounded-full mt-5"/>}
            </div>
            <div className="col-span-11">
                <div className="mt-4">
                    <textarea name={user.firstName} id={user.id} className="w-full bg-transparent text-xl focus:outline-none border border-gray-600 border-x-0 border-t-0" placeholder="What is happening?!" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                </div>
                <div className="flex justify-between items-center py-2">
                    <div className="text-[#1D9BF0] text-lg p-2 hover:cursor-pointer rounded-full hover:bg-gradient-radial from-[#043657] to-black  transition-all">
                        <GoFileMedia onClick={handleSelectImage}/>
                    </div>
                    <button onClick={handleCreateTweet} className="font-semibold bg-[#1D9BF0] w-fit px-3 py-1 rounded-full hover:bg-[#188CD8] transition-all cursor-pointer">Post</button>
                </div>
            </div> 
        </div>
    )
}