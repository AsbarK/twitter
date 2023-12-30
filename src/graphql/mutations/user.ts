import { graphql } from "@/gql"

export const userFollow = graphql(`#graphql
    mutation userFollow($to: ID!){
        followUser(to: $to)
    }
`)
export const userUnFollow = graphql(`#graphql
    mutation userUnFollow($to: ID!){
        unFollowUser(to: $to)
    }
`)