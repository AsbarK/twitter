'use client'
import { graphqlClient } from "@/clients/api";
import ProfileViewComponent from "@/components/ProfileView/page";
import { userFollow, userUnFollow } from "@/graphql/mutations/user";
import { useCurrentUser, useGetUserById } from "@/hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";



export default function ProfilePage({params}:{params:{id:string}}){
    const {userInfo} = useGetUserById(params.id)
    const {user} = useCurrentUser()
    const queryClient = useQueryClient();

    const amIFollowing = useMemo(()=>{
      if(!userInfo ) return false
      
      console.log(user?.following?.findIndex((fl)=>{
        console.log(fl?.id,userInfo?.id,user)
        return fl?.id === user?.id
      }))
      return (
        (user?.following?.findIndex((fl)=>{
          return fl?.id === userInfo?.id
        }) ?? -1) >=0
      )
    },[user?.following,userInfo])

    const handleFollowUser = useCallback(async () => {
      if (!userInfo?.id) return;
  
      await graphqlClient.request(userFollow, { to: userInfo?.id });
      await queryClient.invalidateQueries({queryKey:["curent-user"]});
    }, [userInfo?.id, queryClient]);
  
    const handleUnfollowUser = useCallback(async () => {
      if (!userInfo?.id) return;
  
      await graphqlClient.request(userUnFollow, {
        to: userInfo?.id,
      });
      await queryClient.invalidateQueries({queryKey:["curent-user"]});
    }, [userInfo?.id, queryClient]);
    if(!user || !user.id) return <h1>Not Found</h1>
    return (
    userInfo ? <ProfileViewComponent userInfo={userInfo} paramid={user.id} amIFollowing={amIFollowing} followFun={handleFollowUser} unFollowFun={handleUnfollowUser} />: <div>
      no such user
    </div>
    )
}