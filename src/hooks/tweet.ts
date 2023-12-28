import { graphqlClient } from "@/clients/api"
import { CreateTweetData } from "@/gql/graphql"
import { createUserTweet } from "@/graphql/mutations/tweet"
import { getAllTweets } from "@/graphql/queries/tweet"
import { useMutation,useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"


export const useCreateTweet = ()=>{
    const queryClient = useQueryClient()
    
    const mutation = useMutation({
        mutationFn: async(payload:CreateTweetData)=> (await graphqlClient.request(createUserTweet,{payload})),
        onMutate: ()=>{
            toast.loading('Creating Tweet',{id:'1'})
        },
        onSuccess: async()=> {
            await queryClient.invalidateQueries({queryKey:['all-tweets']})
            toast.success('Created Tweet',{id:'1'})
        }
    })

    return mutation
}

export const useGetAllTweets = ()=>{
    const query = useQuery({
        queryKey:['all-tweets'],
        queryFn: ()=> (graphqlClient.request(getAllTweets))
    })

    return {...query,tweets:query.data?.GetAllTweets}
}
