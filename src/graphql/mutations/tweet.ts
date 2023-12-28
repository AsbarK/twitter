import { graphql } from "@/gql";


export const createUserTweet = graphql(`
    mutation CreateTweet($payload: CreateTweetData!){
        CreateTweet(payload: $payload) {
            id
        }
    }
`)