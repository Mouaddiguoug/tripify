"use client"
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import NavBar from "@/components/home/navBar";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { useEffect, useState, useCallback, use } from "react";
import OrderConfirmation from "@/components/events/orderConfirmation";


function page() {
  const [user, setUser] = useState(null);
  const searchParams = useSearchParams();
  const [toggleOrder, setToggleOrder] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <OrderConfirmation
        tripTitle={searchParams.get("title")}
        tripPrice={searchParams.get("price")}
        toggleOrder={toggleOrder} setToggleOrder={setToggleOrder} />
      <NavBar />
      <div className="w-full flex relative justify-center flex-col md:flex-row">

        <Image src={searchParams.get("image")} width={2000} height={2000} className="md:w-3/6 w-full h-3/6 md:h-screen" />
        <div className="md:w-3/6 flex justify-between md:pb-5 md:pt-24 pt-10 px-7 flex-col items-start">
          <div className="flex justify-start gap-7 md:mb-0 mb-10 flex-col items-start">
            <h1 className="text-3xl font-bold">{searchParams.get("title")}</h1>
            <p className="font-light">{searchParams.get("description")}</p>
            <p className="font-light">{searchParams.get("startingDate")}</p>
            <p className="font-light text-2xl">{searchParams.get("price")}</p>
           

          </div>
          <button onClick={() => setToggleOrder(true)} className="w-full bg-blue-600 py-2 rounded-xl">Buy</button>
        </div>
      </div>
    </LocalizationProvider>
  )
}

export default page
