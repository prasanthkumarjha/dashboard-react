import { HeartIcon, FlagIcon, DotsIcon, SearchIcon } from "./icons/ChatIcons";
export default function ChatMessage({ message }) {
  const { user, role, time, type, content, img, imgBg, fill, date } = message;

  return (
    <>
      {date && (
        <div className="flex justify-center items-center mx-[-16px] my-4 h-[2px] bg-[#F5F6F7]">
          <span className="bg-white circle-shadow border-[2px] border-[#F5F6F7] px-[15px] py-[5px] rounded-full text-[10px] font-black text-[#6B7A99]">
            Today
          </span>
        </div>
      )}
      <div className="flex items-start pt-4 space-x-6 space-y-10">
        <div
          className="w-[30px] h-[30px] overflow-hidden rounded-[5px]"
          style={{ backgroundColor: imgBg }}
        >
          <img src={img} alt={`${user}'s avatar`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between ">
            <div className="space-x-2 flex flex-wrap md:flex-row flex-col">
              <p className="font-bold text-xs text-[#4D5E80]">{user}</p>
              <div className="flex space-x-2">
              <p className="font-bold text-xs text-[#7D8FB3]">{role}</p>
              <p className="font-bold text-xs text-[#7D8FB3] ">{time}</p>
              </div>
            </div>
            <div className="flex-shrink-0 flex space-x-5 justify-end">
              <button>
                <HeartIcon className={`${fill}`} />
              </button>
              <button className="hidden md:block">
                <FlagIcon />
              </button>
              <button>
                <DotsIcon />
              </button>
            </div>
          </div>
          <div className="mt-6">
            {type === "text" && (
              <div className="circle-shadow border-[2px] border-[#F5F6F7] flex flex-col gap-4 p-4 rounded-lg  max-w-[460px]">
                <p className="text-xs font-bold text-[#4D5E80]">{content}</p>
              </div>
            )}
            {type === "file" && (
              <div className="circle-shadow border-[2px] border-[#F5F6F7] flex flex-col gap-4 p-4 rounded-lg  max-w-[460px]">
                <p className="text-sm font-bold text-[#4D5E80]">
                  {content.name}
                  <span className="text-[#3361FF] ml-4">{content.size}</span>
                </p>
                <div className="flex justify-between text-sm font-bold text-[#3361FF]">
                  <p>Downloading ...</p>
                  <p className="">{`${content.progress}%`}</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full mt-2">
                  <div
                    className="bg-blue-600 h-1 rounded-full"
                    style={{ width: `${content.progress}%` }}
                  />
                </div>
              </div>
            )}
            {type === "images" && (
              <div className="flex space-x-4">
                {content.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative max-w-[220px] max-h-[180px] bg-gray-200 rounded-lg overflow-hidden"
                  >
                    <img
                      src={src}
                      alt="idx"
                      className="w-full h-full object-cover"
                    />
                    <button
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   flex justify-center items-center w-10 h-10 rounded-full 
                   bg-black opacity-[0.5] 
                   md:bottom-5 md:right-5 md:left-auto md:top-auto md:translate-x-0 md:translate-y-0 hover:cursor-pointer"
                    >
                      <SearchIcon className={"fill-white"} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
