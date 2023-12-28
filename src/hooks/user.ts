import { graphqlClient } from "@/clients/api"
import { getCurrentUserQuery, getUserById } from "@/graphql/queries/user"
import { useQuery } from "@tanstack/react-query"


export const useCurrentUser = ()=>{
    const query = useQuery({
        queryKey: ['current-user'],
        queryFn: ()=> graphqlClient.request(getCurrentUserQuery)
    })
    return {...query, user:query.data?.getCurrentUser}
}

export const useGetUserById = (id:string)=>{
    const query = useQuery({
        queryKey:['userWithId'],
        queryFn: ()=>graphqlClient.request(getUserById,{id})
    })
    return {...query, userInfo:query.data?.getUserById}
}