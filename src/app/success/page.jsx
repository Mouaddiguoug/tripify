"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function success() {
  const router = useRouter();
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 h-3/6">
        <lottie-player
          style={{width: 190}}
          autoplay
          mode="normal"
          src="assets/success.json"
        >
        </lottie-player>
      </div>
      <div className="w-full flex md:px-0 px-10 justify-center gap-6 items-center flex-col h-3/6">
        <h1 className="text-3xl font-bold">Your trip is confirmed!</h1>
        <p className="text-2xl text-center">Thanks for placing the order, we'll get back to you in a minute</p>
        <button onClick={() => router.push("/")} className=" bg-slate-400 w-5/6 sm:w-1/6 mt-5 rounded-xl py-2">home</button>
      </div>
    </div>
  )
}

export default success
