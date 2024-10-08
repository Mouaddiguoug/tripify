"use client"
import { useState, useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllEvents } from "../data/features/events/eventsSlice";
import DiscoverCard from "@/components/home/discoverCard";
import NavBar from "@/components/home/navBar";
import Footer from "@/components/home/footer";

function discover() {
  const dispach = useDispatch();
  const [allEventsState, setAllEventsState] = useState([]);

  const { allEvents } = useSelector(
    (state) => state.events
  );

  useEffect(() => {
    dispach(fetchAllEvents());
  }, []);

  useEffect(() => {
    if (allEvents.length > 0) {
      setAllEventsState(allEvents);
    }
  }, [allEvents]);

  return (
    <>
      <NavBar />
      <img src='assets/color-sharp 2.png' className='absolute w-3/6' />
      <div className="flex bg-black relative justify-start px-5 py-12 items-center gap-10 flex-col">
        <h1 className="text-4xl mt-14 font-bold w-full text-start">Discover</h1>
        <Suspense>
        <DiscoverCard events={allEvents} />
        </Suspense>
      </div>
      <div className="pt-64 bg-black w-full">
        <Footer />
      </div>
    </>

  )
}

export default discover

