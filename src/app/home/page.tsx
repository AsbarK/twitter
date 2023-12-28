'use client'
import React from "react";
import FeedCard from "@/components/FeedCard/page";
import TweetInputCard from "@/components/InputCard/page";
import { useGetAllTweets } from "@/hooks/tweet";
import { Tweet} from "@/gql/graphql";


export default function HomeLayout(){
    const {tweets=[]} = useGetAllTweets()
    return(
        <div className='col-span-5 border border-gray-600 border-y-0 overflow-scroll'>
            <TweetInputCard/>
            {tweets && tweets.map((tweet)=>(
                <FeedCard data={tweet as Tweet} key={tweet?.id}/>
            ))}
        </div>
        
    );
}