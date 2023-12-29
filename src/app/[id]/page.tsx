'use client'
import ProfileViewComponent from "@/components/ProfileView/page";
import { useGetUserById } from "@/hooks/user";



export default function ProfilePage({params}:{params:{id:string}}){
    const {userInfo} = useGetUserById(params.id)
    return (
    userInfo ? <ProfileViewComponent userInfo={userInfo}/>: <div>
      no such user
    </div>
    )
}