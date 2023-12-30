import FeedCard from "@/components/FeedCard/page";
import { Tweet } from "@/gql/graphql";
import Image from "next/image";
import { BsArrowLeftShort } from "react-icons/bs";



interface ProfileViewProps{
    userInfo: any,
    paramid: string,
    amIFollowing: Boolean
    unFollowFun: any,
    followFun:any
}
export default function ProfileViewComponent({userInfo,paramid,amIFollowing,unFollowFun,followFun}:ProfileViewProps){
  console.log(amIFollowing)
    return (
        <div>
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
            {userInfo.firstName} {userInfo?.lastName}
            </h1>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 mt-2 text-sm text-gray-400">
                <span className="flex items-center gap-1"><span className=" font-bold text-white">{userInfo?.followers?.length}</span> Followers</span>
                <span className="flex items-center gap-1"><span className=" font-bold text-white">{userInfo?.following?.length}</span> Following</span>
              </div>
              {paramid !== userInfo?.id && (
                <>
                  {amIFollowing ? (
                    <button
                      onClick={unFollowFun}
                      className="bg-white text-black px-3 py-1 rounded-full text-sm"
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={followFun}
                      className="bg-white text-black px-3 py-1 rounded-full text-sm"
                    >
                      Follow
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          <div>
            {userInfo?.tweets?.map((tweet: Tweet) => (
              <FeedCard data={tweet as Tweet} key={tweet?.id} />
            ))}
          </div>
        </div>
    </div>
    )
}