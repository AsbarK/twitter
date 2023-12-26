'use client'
import {GraphQLClient} from 'graphql-request'

const isClientSide = typeof window !== 'undefined'

export const graphqlClient = new GraphQLClient('http://localhost:8000/graphql',{
    headers:{
        Authorization: isClientSide ?`Bearer ${window.localStorage.getItem('token')}`:''
    }
})