import { graphql } from "@/gql";

export const getAllTweets = graphql(`
    query GetAllTweets {
        GetAllTweets {
            id
            content
            author {
                profileImageUrl
                firstName
                id
            }
        }
    }


`)