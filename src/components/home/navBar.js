"use client"
import React, { useDeferredValue, useEffect, useState } from 'react'
import AccountDropDown from '../auth/accountDropDown';
import { useRouter } from 'next/navigation';
import { RxHamburgerMenu } from "react-icons/rx";

function navBar() {
  const router = useRouter();
  const [isToggled, setIsToggeled] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userDataLocal = JSON.parse(localStorage.getItem("user"));
    if (userDataLocal) {
      setUserData(userDataLocal.data);
    }
  }, [])

  return (
    <div className={`w-full fixed z-50 md:h-auto justify-between backdrop-blur-3xl items-center bg-black/60 p-5 flex-col md:flex-row flex ${isToggled ? "h-screen" : "md:h-20"} `}>
      <div className={`md:w-2/6 w-full justify-between ${isToggled ? "flex" : "md:flex hidden"}`}>
        <img className='w-2/6' src="assets/logo.png" onClick={() => router.push("/")} />
        <div className='md:hidden block py-2'>
          <RxHamburgerMenu onClick={() => setIsToggeled(!isToggled)} size={30} />
        </div>
      </div>
      <div className={`md:w-[35%] w-full font-semibold text-2xl px-8 md:px-0 md:text-lg flex-col md:flex-row gap-y-6 justify-between ${isToggled ? "flex" : "md:flex hidden"}`}>
        <a href='/'>Home</a>
        <a href='/discover'>Discover</a>
        <a href='/packs'>Packs</a>
        <a href='/about_us'>About us</a>
      </div>
      {
        userData.name ? <div className={`md:w-2/6 w-full flex justify-end ${isToggled ? "flex" : "md:flex hidden"}`}>
          <div className='md:block hidden'>
            <AccountDropDown name={userData.name} />
          </div>
          <button className='w-full block md:hidden bg-slate-900 rounded-2xl h-12'>Sign out</button>
        </div> : <div className={`w-full md:w-2/6 items-center justify-end gap-5 flex-col md:flex-row ${isToggled ? "flex" : "md:flex hidden"}`}>
        </div>
      }
      <div className={`md:hidden justify-between w-full py-2 ${isToggled ? "hidden" : "flex"}`}>
        <img className='w-2/6' src="assets/logo.png" onClick={() => router.push("/")} />

        <RxHamburgerMenu onClick={() => setIsToggeled(!isToggled)} size={30} />
      </div>
    </div>
  )
}

export default navBar
