import { graphql } from "@/gql";

export const getAllTweets = graphql(`
    query GetAllTweets {
        GetAllTweets {
            id
            content
            imageUrl
            author {
                profileImageUrl
                firstName
                id
            }
        }
    }


`)

export const getSignedUrls = graphql(`#graphql
    query GetSignedUrls($imageType: String!) {
        GetSignedUrls(imageType: $imageType)
    }
`)