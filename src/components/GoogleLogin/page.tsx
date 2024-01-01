'use client'
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleToken } from "@/graphql/queries/user";
import { useCurrentUser } from "@/hooks/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import toast from "react-hot-toast";

export default function GoogleLoginSiginIn(){
    const {user} = useCurrentUser()

    const handleLoginWithGoogle = useCallback(async(cred:CredentialResponse)=>{
        const googleToken = cred.credential
        if(!googleToken){
            return toast.error('Google Token Invalid')
        }
        const {verifyGoogleToken} = await graphqlClient.request(verifyUserGoogleToken,{token:googleToken})
        toast.success('verified Successfully')
        if(verifyGoogleToken){
            window.localStorage.setItem('twittertoken',verifyGoogleToken)
            window.location.href = 'http://localhost:3000/home'
        }
    },[])
    return (
        !user ? <div className="p-4 text-center">
            <h1>New to TWITTER?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
        </div> :
        <div className="my-2 px-3 py-3 bg-[#16181C] rounded-xl flex justify-start items-start w-[70%]">
            <div>
                <h1 className="my-2 text-2xl font-bold mb-5">Who to follow</h1>
                {user?.recomendeUsers?.map((el) => (
                    <div className="flex items-center">
                        <div className="flex items-center justify-start">
                            {el?.profileImageUrl && (
                                <Image
                                    src={el?.profileImageUrl}
                                    alt="user-image"
                                    className="rounded-full"
                                    width={60}
                                    height={60}
                                />
                            )}
                            <div className="flex flex-col items-start justify-center">
                                <div className="text-lg text-ellipsis max-w-[70%] overflow-hidden line-clamp-1">
                                    {el?.firstName} {el?.lastName}
                                </div>
                                <span className="text-ellipsis max-w-[70%] overflow-hidden line-clamp-1">@{el?.id}</span>
                            </div>
                        </div>
                        
                        <Link
                            href={`/${el?.id}`}
                            className="bg-white text-black text-sm px-5 py-1 w-fit rounded-lg"
                        >
                            View
                        </Link>
                    </div>
                ))}
            </div>
        
      </div>
    )
}