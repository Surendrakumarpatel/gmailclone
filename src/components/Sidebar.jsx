import React, { useState } from 'react'
import { LuPencil } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { MdOutlineWatchLater,MdOutlineKeyboardArrowDown,MdOutlineDrafts,MdInbox } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const sidebarItems = [
    {
        icon: <MdInbox size={"20px"} />,
        text: "Inbox"
    },
    {
        icon: <IoMdStar size={"20px"} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={"20px"} />,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={"20px"} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={"20px"} />,
        text: "Drafts"
    },
]

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const dispatch = useDispatch();
    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button onClick={() => dispatch(setOpen(true))} className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md'>
                    <LuPencil size={"24px"} />
                    Compose
                </button>
            </div>
            <div className='text-gray-500'>
                {
                    sidebarItems.map((item, idx) => {
                        return (
                            <div onClick={() => setSelected(idx)} key={idx} className={`${selected === idx ? 'bg-[#C2E7FF] text-black' : "hover:bg-gray-200 hover:text-black"} flex pl-6 py-1 rounded-r-full items-center gap-4 my-2  hover:cursor-pointer`}>
                                {item.icon}
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }
                <div className='flex items-center pl-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-r-full py-1'>
                    <MdOutlineKeyboardArrowDown size={"20px"} />
                    <span>More</span>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Sidebar