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

export const getUserById = graphql(`#graphql 
    query GetUserById($id: String!) {
        getUserById(id: $id) {
            id
            firstName
            lastName
            profileImageUrl
            tweets {
                id
                content
                author {
                    id
                    firstName
                    profileImageUrl
                }
            }
        }
    }
`)