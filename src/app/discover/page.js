"use client"
import { useState, useEffect } from "react";
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
      <div className="flex relative justify-start p-12 items-center gap-10 flex-col">
        <h1 className="text-4xl mt-14 font-bold w-full text-start">Discover</h1>
        <DiscoverCard events={allEvents} />
      </div>
      <div className="mt-64 w-full">
        <Footer />
      </div>
    </>

  )
}

export default discover

