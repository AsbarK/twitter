/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation CreateTweet($payload: CreateTweetData!){\n        CreateTweet(payload: $payload) {\n            id\n        }\n    }\n": types.CreateTweetDocument,
    "#graphql\n    mutation userFollow($to: ID!){\n        followUser(to: $to)\n    }\n": types.UserFollowDocument,
    "#graphql\n    mutation userUnFollow($to: ID!){\n        unFollowUser(to: $to)\n    }\n": types.UserUnFollowDocument,
    "\n    query GetAllTweets {\n        GetAllTweets {\n            id\n            content\n            imageUrl\n            author {\n                profileImageUrl\n                firstName\n                id\n            }\n        }\n    }\n\n\n": types.GetAllTweetsDocument,
    "#graphql\n    query GetSignedUrls($imageType: String!) {\n        GetSignedUrls(imageType: $imageType)\n    }\n": types.GetSignedUrlsDocument,
    "#graphql\n    query verifyUserGoogleToken( $token: String!){\n        verifyGoogleToken(token: $token)\n    }\n": types.VerifyUserGoogleTokenDocument,
    "\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            firstName\n            lastName\n            profileImageUrl\n            email\n            followers {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n            following {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n        }\n    }   \n": types.GetCurrentUserDocument,
    "#graphql \n    query GetUserById($id: String!) {\n        getUserById(id: $id) {\n            id\n            firstName\n            lastName\n            profileImageUrl\n            followers {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n            following {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n            tweets {\n                id\n                content\n                author {\n                    id\n                    firstName\n                    profileImageUrl\n                }\n            }\n        }\n    }\n": types.GetUserByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateTweet($payload: CreateTweetData!){\n        CreateTweet(payload: $payload) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateTweet($payload: CreateTweetData!){\n        CreateTweet(payload: $payload) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation userFollow($to: ID!){\n        followUser(to: $to)\n    }\n"): (typeof documents)["#graphql\n    mutation userFollow($to: ID!){\n        followUser(to: $to)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation userUnFollow($to: ID!){\n        unFollowUser(to: $to)\n    }\n"): (typeof documents)["#graphql\n    mutation userUnFollow($to: ID!){\n        unFollowUser(to: $to)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetAllTweets {\n        GetAllTweets {\n            id\n            content\n            imageUrl\n            author {\n                profileImageUrl\n                firstName\n                id\n            }\n        }\n    }\n\n\n"): (typeof documents)["\n    query GetAllTweets {\n        GetAllTweets {\n            id\n            content\n            imageUrl\n            author {\n                profileImageUrl\n                firstName\n                id\n            }\n        }\n    }\n\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query GetSignedUrls($imageType: String!) {\n        GetSignedUrls(imageType: $imageType)\n    }\n"): (typeof documents)["#graphql\n    query GetSignedUrls($imageType: String!) {\n        GetSignedUrls(imageType: $imageType)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query verifyUserGoogleToken( $token: String!){\n        verifyGoogleToken(token: $token)\n    }\n"): (typeof documents)["#graphql\n    query verifyUserGoogleToken( $token: String!){\n        verifyGoogleToken(token: $token)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            firstName\n            lastName\n            profileImageUrl\n            email\n            followers {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n            following {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n        }\n    }   \n"): (typeof documents)["\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            firstName\n            lastName\n            profileImageUrl\n            email\n            followers {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n            following {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n        }\n    }   \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql \n    query GetUserById($id: String!) {\n        getUserById(id: $id) {\n            id\n            firstName\n            lastName\n            profileImageUrl\n            followers {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n            following {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n            tweets {\n                id\n                content\n                author {\n                    id\n                    firstName\n                    profileImageUrl\n                }\n            }\n        }\n    }\n"): (typeof documents)["#graphql \n    query GetUserById($id: String!) {\n        getUserById(id: $id) {\n            id\n            firstName\n            lastName\n            profileImageUrl\n            followers {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n            following {\n                id\n                firstName\n                lastName\n                email\n                profileImageUrl\n            }\n            tweets {\n                id\n                content\n                author {\n                    id\n                    firstName\n                    profileImageUrl\n                }\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;