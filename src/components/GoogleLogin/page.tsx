'use client'
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleToken } from "@/graphql/queries/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast";

export default function GoogleLoginSiginIn(){

    const handleLoginWithGoogle = useCallback(async(cred:CredentialResponse)=>{
        const googleToken = cred.credential
        if(!googleToken){
            return toast.error('Google Token Invalid')
        }
        const {verifyGoogleToken} = await graphqlClient.request(verifyUserGoogleToken,{token:googleToken})
        toast.success('verified Successfully')
        if(verifyGoogleToken){
            window.localStorage.setItem('token',verifyGoogleToken)
        }
    },[])
    return (
        <div className="p-4 text-center">
            <h1>New to TWITTER?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
        </div>
    )
}