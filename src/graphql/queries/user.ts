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
            recomendeUsers {
                id
                firstName
                lastName
                email
                profileImageUrl
            }
            followers {
                id
                firstName
                lastName
                email
                profileImageUrl
            }
            following {
                id
                firstName
                lastName
                email
                profileImageUrl
            }
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
            followers {
                id
                firstName
                lastName
                email
                profileImageUrl
            }
            following {
                id
                firstName
                lastName
                email
                profileImageUrl
            }
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