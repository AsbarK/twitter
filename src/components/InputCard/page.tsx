'use client'
import { graphqlClient } from "@/clients/api";
import { getSignedUrls } from "@/graphql/queries/tweet";
import { useCreateTweet } from "@/hooks/tweet";
import { useCurrentUser } from "@/hooks/user";
import axios from "axios";
import Image from "next/image";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { GoFileMedia } from "react-icons/go";


export default function TweetInputCard(){
    const [content,setContent] = useState('')
    const [imageUrl,setImageUrl] = useState('')

    const handleInputChange = useCallback((input:HTMLInputElement)=>{
        return async (e:Event)=>{
            e.preventDefault()
            const file:File | null | undefined = input.files?.item(0)
            if(!file) return
            const {GetSignedUrls} = await graphqlClient.request(getSignedUrls,{
                imageType: file.type
            })
            if(GetSignedUrls){
                toast.loading('Uploading.....',{id:'2'})
                await axios.put(GetSignedUrls,file,{
                    headers:{
                        'Content-Type': file.type
                    }
                })
                toast.success("Uploaded",{id:'2'})
                const signedUrl = new URL(GetSignedUrls)
                const myImagePath = `${signedUrl.origin}${signedUrl.pathname}`
                setImageUrl(myImagePath)
            }
        }
    },[])

    const handleSelectImage = useCallback(()=>{
        const inputtt = document.createElement('input')
        inputtt.setAttribute('type','file')
        inputtt.setAttribute('accept','image/*')
        const handleInputFn = handleInputChange(inputtt)
        inputtt.addEventListener('change',handleInputFn)
        inputtt.click()
    },[handleInputChange])
    const {user} = useCurrentUser()

    const {mutate} = useCreateTweet()

    const handleCreateTweet = useCallback(()=>{
        mutate({
            content,
            imageUrl
        })
        setContent('')
        setImageUrl('')
    },[content,mutate,imageUrl])
    
    return (
        user && <div className="grid grid-cols-12 border border-gray-600 border-x-0 border-b-0 mb-2 px-2">
            <div className="col-span-1">
                {user?.profileImageUrl && <Image src={user?.profileImageUrl} alt={user?.firstName[0].toUpperCase()} height={40} width={40} className="rounded-full mt-5"/>}
            </div>
            <div className="col-span-11">
                <div className="mt-4">
                    <textarea name={user.firstName} id={user.id} className="w-full bg-transparent text-xl focus:outline-none border border-gray-600 border-x-0 border-t-0" placeholder="What is happening?!" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                    {imageUrl && <Image src={imageUrl} alt="tweet-image" height={300} width={300}/>}
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