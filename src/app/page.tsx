'use client'
import FeedCard from '@/components/FeedCard/page'
import { Tweet } from '@/gql/graphql'
import { useGetAllTweets } from '@/hooks/tweet'

export default function Home() {
  const {tweets=[]} = useGetAllTweets()
  return (
    <div>
      {tweets && tweets.map((tweet)=>(
        <FeedCard data={tweet as Tweet} key={tweet?.id}/>
      ))}
    </div>
  )
}
