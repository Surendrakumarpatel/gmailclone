import React, { useEffect, useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Avatar from 'react-avatar';
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setSearchText } from '../redux/appSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { authUser } = useSelector(store => store.app);

  const signOutHandler = () => {
    signOut(auth).then(() => {
      dispatch(setAuthUser(null));
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    dispatch(setSearchText(search));
  }, [search]);


  return (
    <div className='flex items-center justify-between mx-3 h-16'>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-2'>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <RxHamburgerMenu size={'20px'} />
          </div>
          <img className='w-8' src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"} alt="" />
          <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
        </div>
      </div>
      <div className='md:block hidden w-[50%] mr-60'>
        <div className='flex items-center bg-[#EAF1FB] px-2 py-3  rounded-full'>
          <IoIosSearch size="24px" className='text-gray-700' />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Seach mail'
            className='rounded-full w-full bg-transparent outline-none px-1'
          />
        </div>
      </div>
      <div className='md:block hidden'>
        <div className='flex items-center gap-2'>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoSettingsOutline size={"20px"} />
          </div>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className='relative cursor-pointer'>
            <Avatar onClick={() => setToggle(!toggle)} src={authUser?.photoURL} googleId="118096717852922241760" size="40" round={true} />
            <AnimatePresence>
              {
                toggle && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.1 }}
                    className='absolute right-2 z-20 shadow-lg bg-white rounded-md'>
                    <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>
                  </motion.div>
                )
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar