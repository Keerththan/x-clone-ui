import Images from "./Image"
import PostInfo from "./PostInfo"

const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
    {/* POST TYPE */}
    <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        icon
        <span>Lama Dev reposted</span>
    </div>
    {/* POST CONTENT */}
    <div className="flex gap-4">
        {/* Avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Images src="/general/avatar.png" alt="" w={100} h={100} tr={true} />
        </div>
      {/* Content */}
        <div className="flex-1  "> 
            {/* TOP */}
            <div className="flex item-center justify-between gap-2 ">
                <div className="flex item-center gap-2 flex- flex-wrap">
                <h1 className="text-md font-bold" >Lama Dev</h1>
                <span className="text-textGray">@lamaWebDev</span>
                <span className="text-textGray">1 day ago</span>
                </div>
              <PostInfo/>
            </div>
             {/* TEXT MEDIA */}
             <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore doloremque facere autem ipsum quasi cupiditate debitis quidem, aliquam magni sed cum nisi beatae ullam saepe asperiores ipsam? Laboriosam, voluptate!
             </p>

        </div>

    </div>
    </div>
  )
}

export default Post
