import { graphql } from "@/gql";

export const verifyUserGoogleToken = graphql(`#graphql
    query verifyUserGoogleToken( $token: String!){
        verifyGoogleToken(token: $token)
    }
`)

export const getCurrentUserQuery = graphql(`
    query GetCurrentUser {
        getCurrentUser {
            id
            firstName
            lastName
            profileImageUrl
            email
        }
    }   
`)