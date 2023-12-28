'use client'
import FeedCard from "@/components/FeedCard/page";
import { Tweet } from "@/gql/graphql";
import { useGetUserById } from "@/hooks/user";
import Image from "next/image";
import { BsArrowLeftShort } from "react-icons/bs";



export default function ProfilePage({params}:{params:{id:string}}){
    const {userInfo} = useGetUserById(params.id)
    return (
    userInfo ? <div>
        <div>
          <nav className="flex items-center gap-3 py-3 px-3">
            <BsArrowLeftShort className="text-4xl" />
            <div>
              <h1 className="text-2xl font-bold">
                {userInfo.firstName} {userInfo?.lastName}
              </h1>
              <h1 className="text-md font-bold text-slate-500">
                {userInfo?.tweets?.length} Tweets
              </h1>
            </div>
          </nav>
          <div className="p-4 border-b border-slate-800">
            {userInfo?.profileImageUrl && (
              <Image
                src={userInfo?.profileImageUrl}
                alt="user-image"
                className="rounded-full"
                width={100}
                height={100}
              />
            )}
            <h1 className="text-2xl font-bold mt-5">
              {userInfo?.firstName} {userInfo?.lastName}
            </h1>
            {/* <div className="flex justify-between items-center">
              <div className="flex gap-4 mt-2 text-sm text-gray-400">
                <span>{props.userInfo?.followers?.length} followers</span>
                <span>{props.userInfo?.following?.length} following</span>
              </div>
              {currentUser?.id !== props.userInfo?.id && (
                <>
                  {amIFollowing ? (
                    <button
                      onClick={handleUnfollowUser}
                      className="bg-white text-black px-3 py-1 rounded-full text-sm"
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={handleFollowUser}
                      className="bg-white text-black px-3 py-1 rounded-full text-sm"
                    >
                      Follow
                    </button>
                  )}
                </>
              )}
            </div> */}
          </div>
          <div>
            {userInfo?.tweets?.map((tweet) => (
              <FeedCard data={tweet as Tweet} key={tweet?.id} />
            ))}
          </div>
        </div>
    </div>: <div>
      no such user
    </div>
    )
}