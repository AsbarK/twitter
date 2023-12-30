'use client'
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleToken } from "@/graphql/queries/user";
import { useCurrentUser } from "@/hooks/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
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
        !user && <div className="p-4 text-center">
            <h1>New to TWITTER?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
        </div> 
    )
}