import ChatMessage from "./ChatMessage";
import { useRef } from "react";
import {
  SearchIcon,
  PhoneIcon,
  VideoIcon,
  ExpandIcon,
  GridIcon,
  AttachmentIcon,
  ImageIcon,
  SendIcon,
  RightArrowFlagIcon,
  AddCircleIcon,
} from "./icons/ChatIcons";
import user1 from "../assets/users/user1.png";
import user2 from "../assets/users/user2.png";
import user3 from "../assets/users/user3.png";
import user4 from "../assets/users/user4.png";
import user5 from "../assets/users/user5.png";
import user6 from "../assets/users/user6.png";
import user7 from "../assets/users/user7.png";
import user8 from "../assets/users/user8.png";
import user9 from "../assets/sidebar/5.jpg";
import user10 from "../assets/users/user10.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

export default function Chat() {
  const fileInputRef = useRef();
  const imgInputRef = useRef();
  const handleAttachClick = () => fileInputRef.current.click();
  const handleImageClick = () => imgInputRef.current.click();
  const directMessages = [
    {
      name: "Ina Perry",
      img: user1,
      bg: "rgba(136, 51, 255, 0.3)",
      status: "Online",
      time: "12:45",
    },
    {
      name: "Wesley Ray",
      img: user2,
      bg: "rgba(41, 204, 57, 0.3)",
      status: "Online",
      time: "12:45",
    },
    {
      name: "Eula Burton",
      img: user3,
      bg: "rgba(255, 102, 51, 0.3)",
      status: "Work",
      time: "12:45",
    },
    {
      name: "Viola Morales",
      img: user4,
      bg: "rgba(51, 97, 255, 0.3)",
      status: "Offline",
      time: "12:45",
    },
    {
      name: "Vincent Terry",
      img: user5,
      bg: "rgba(46, 230, 202, 0.3)",
      status: "Online",
      time: "12:45",
    },
    {
      name: "Nell Burns",
      img: user6,
      bg: "rgba(255, 102, 51, 0.3)",
      status: "Offline",
      time: "12:45",
    },
    {
      name: "Lydia Sutton",
      img: user7,
      bg: "rgba(136, 51, 255, 0.5)",
      status: "Online",
      time: "12:45",
    },
    {
      name: "Cynthia Evans",
      img: user8,
      bg: "rgba(230, 46, 123, 0.4)",
      status: "Offline",
      time: "12:45",
    },
  ];
  const channels = [
    { label: "How To Frontend", count: "+12", id: 564 },
    { label: "Payment Workers", count: "+12", id: 564 },
    { label: "Web Designer", count: "+12", id: 564 },
    { label: "President of Sales", count: "+12", id: 564 },
    { label: "Marketing Coordinator", count: "+12", id: 564 },
  ];
  const projectCompanies = [
    { label: "Walt Disney", count: "+12", id: 564 },
    { label: "Johnson & Johnson", count: "+5", id: 456 },
    { label: "General Electric", count: "", id: 387 },
    { label: "Bank of America", count: "", id: 321 },
  ];

  const messages = [
    {
      id: 1,
      user: "Stella Evans",
      role: "Web Designer",
      time: "12:45 PM",
      type: "file",
      img: user1,
      fill: "fill-yellow-500",
      imgBg: "rgba(46, 230, 202, 0.3)",
      content: {
        name: "Human Design Guidelines.pdf",
        size: "760.90 KB",
        progress: 65,
      },
    },
    {
      id: 2,
      user: "Edward Goodwin",
      role: "Web Designer",
      time: "12:45 PM",
      type: "images",
      img: user9,
      content: [img2, img1],
    },
    {
      id: 3,
      user: "Kyle Peters",
      role: "Web Designer",
      time: "12:45 PM",
      type: "text",
      img: user10,
      date: "Today",
      content:
        "When you starting a company you are thinking on how to cut expenses. One of such options to cut the startup costs is a company logo design. But is it good idea to order a cheap logo or work without company logo at all?",
    },
    {
      id: 4,
      user: "Susan Lane",
      role: "Web Designer",
      time: "12:45 PM",
      type: "text",
      img: user8,
      imgBg: "rgba(46, 230, 202, 0.3)",
      content:
        "When you starting a company you are thinking on how to cut expenses. One of such options to cut the startup costs is a company logo design.",
    },
  ];

  return (
    <div className="flex flex-1 overflow-hidden bg-white rounded-lg circle-shadow">
      <aside className="md:w-62 lg:w-72  border-r-[2px] border-[#F5F6F7] hidden md:flex flex-col">
        <div className="flex items-center mb-4 border-b-[2px] border-[#F5F6F7] p-4">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search in Messages"
            className="w-full text-sm placeholder:text-center placeholder:text-[#7D8FB3] placeholder:text-[13px] placeholder:font-bold outline-none"
          />
          <button className="ml-2">
            <RightArrowFlagIcon />
          </button>
        </div>
        <div className="p-4">
          <div className="flex mb-4 justify-between items-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">
              Direct Messages
            </p>
            <span className="hover:cursor-pointer">
              <AddCircleIcon />
            </span>
          </div>

          <ul className="flex-1  overflow-y-auto space-y-2 mb-2">
            {directMessages.map((dm, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between text-sm hover:cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-[30px] h-[30px] overflow-hidden rounded-[5px]`}
                    style={{ backgroundColor: dm.bg }}
                  >
                    <img src={dm.img} alt={`user${idx + 1}`} />
                  </div>
                  <p className="text-xs font-bold text-[#4D5E80]">{dm.name}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <span
                    className={`text-[13px] font-bold ${
                      dm.status === "Online"
                        ? "text-[#29CC39]"
                        : dm.status === "Work"
                        ? "text-[#FFCB33]"
                        : "text-[#7D8FB3]"
                    }`}
                  >
                    {dm.status}
                  </span>
                  <span className="text-xs font-bold   text-[#7D8FB3] ml-2">
                    {dm.time}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <button className="text-[10px] font-black text-[#6B7A99] hover:cursor-pointer hover:bg-gray-100 border-[2px] border-[#F5F6F7] py-[5px] px-[10px] rounded mb-4">
            Show More Channels
          </button>
        </div>
        <div className="p-4">
          <div className="flex mb-6 justify-between items-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">
              # Channels
            </p>
            <span className="hover:cursor-pointer">
              <AddCircleIcon />
            </span>
          </div>
          <ul className="flex-1  overflow-y-auto space-y-3 mb-2">
            {channels.map((ch, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between text-sm hover:cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 bg-gray-300`}
                  />
                  <p className="text-xs ml-2 font-bold text-[#4D5E80]">
                    {ch.label}
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className={`text-[13px] font-bold  text-[#29CC39]`}>
                    {ch.count}
                  </span>
                  <span className="text-xs font-bold   text-[#7D8FB3] ml-2">
                    {ch.id}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <button className="text-[10px] font-black text-[#6B7A99] hover:cursor-pointer hover:bg-gray-100 border-[2px] border-[#F5F6F7] py-[5px] px-[10px] rounded mb-4">
            Show More Channels
          </button>
        </div>
        <div className="p-4">
          <div className="flex mb-6 justify-between items-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">
              Project Companies
            </p>
            <span className="hover:cursor-pointer">
              <AddCircleIcon />
            </span>
          </div>
          <ul className="flex-1  overflow-y-auto space-y-3 mb-2">
            {projectCompanies.map((pc, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between text-sm hover:cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 bg-gray-300`}
                  />
                  <p className="text-xs ml-2 font-bold text-[#4D5E80]">
                    {pc.label}
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className={`text-[13px] font-bold  text-[#29CC39]`}>
                    {pc.count}
                  </span>
                  <span className="text-xs font-bold   text-[#7D8FB3] ml-2">
                    {pc.id}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <button className="text-[10px] font-black text-[#6B7A99] hover:cursor-pointer hover:bg-gray-100 border-[2px] border-[#F5F6F7] py-[5px] px-[10px] rounded mb-4">
            Show More Channels
          </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        <div className="flex items-center justify-between border-b-[2px] border-[#F5F6F7] p-4 relative">
          <div className="flex items-center space-x-6">
            <button>
              <PhoneIcon className="w-5 h-5 text-gray-400" />
            </button>
            <button>
              <VideoIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            <div className="w-[7px] h-[7px] bg-[#29CC39] rounded-full"></div>
            <p className="text-[#7D8FB3] text-[13px] font-bold">Dennis Smith</p>
          </div>

          <div className="flex items-center space-x-6">
            <button className="ml-2">
              <ExpandIcon className="w-5 h-5 text-gray-400" />
            </button>
            <button>
              <GridIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-10">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </div>
        <div className="flex items-center gap-4 border-t border-[#F5F6F7] px-2 py-4 md:p-4">
          <button onClick={handleAttachClick} className="hover:cursor-pointer">
            <AttachmentIcon className="w-5 h-5 text-gray-400" />
          </button>
          <button onClick={handleImageClick} className="ml-2 hover:cursor-pointer">
            <ImageIcon className="w-5 h-5 text-gray-400" />
          </button>
          <input type="file" multiple ref={fileInputRef} className="hidden" />
          <input
            type="file"
            accept="image/*"
            multiple
            ref={imgInputRef}
            className="hidden"
          />
          <input
            type="text"
            placeholder="Type Message"
            className="ml-4 flex-1 text-sm placeholder:text-xs placeholder:font-bold placeholder:text-[#4D5E80] outline-none"
          />
          <button className="ml-0 md:ml-4 hover:cursor-pointer">
            <SendIcon className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
