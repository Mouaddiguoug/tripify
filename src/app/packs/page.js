"use client"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPacks } from "../data/features/events/eventsSlice";
import PackCard from "@/components/packs/packCard";
import NavBar from "@/components/home/navBar";
import Footer from "@/components/home/footer";
import { Breathing } from "react-shimmer";

function pages() {
  const dispach = useDispatch();
  const [packsState, setPacksState] = useState([]);

  const { packs } = useSelector(
    (state) => state.events
  );

  useEffect(() => {
    dispach(fetchPacks());
  }, []);

  useEffect(() => {
    if (packs.length > 0) {
      setPacksState(packs);
    }
    console.log(packs);
  }, [packs]);

  return (
    <>
      <img src='assets/color-sharp 2.png' className='absolute w-4/6' />
      <NavBar />

      <div className="flex relative justify-start items-start gap-10 flex-col">

        <h1 className="text-4xl mt-32 pl-5 font-bold w-full text-start">Packs</h1>
        {
          packs.length > 0 ? packs.map(pack => {
            return <PackCard pack={pack} />
          }) : <div className="w-full flex flex-col p-5 gap-7">
            <Breathing className="w-full rounded-lg" height={100} />
            <Breathing className="w-full rounded-lg" height={100} />
            <Breathing className="w-full rounded-lg" height={100} />
            <Breathing className="w-full rounded-lg" height={100} />
          </div>
        }

      </div>
      <div className="mt-64 w-full">
        <Footer />
      </div>
    </>
  )
}

export default pages
