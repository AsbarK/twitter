import { graphql } from "@/gql";

export const verifyUserGoogleToken = graphql(`#graphql
    query verifyUserGoogleToken( $token: String!){
        verifyGoogleToken(token: $token)
    }
`)