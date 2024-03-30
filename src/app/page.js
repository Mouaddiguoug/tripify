"use client"

import Header from "@/components/home/header";
import StartingNearBy from "@/components/home/startingNearBy";
import InterestingPlans from "@/components/home/interestingPlans";
import NavBar from "@/components/home/navBar";
import { fetchAllEvents, fetchPrivate } from "./data/features/events/eventsSlice";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "@/components/home/footer";
import PrivateTrips from "@/components/home/privateTrips";

export default function Home() {
  const dispatch = useDispatch();
  const [allEventsState, setAllEventsState] = useState([]);
  const [privateTripsState, setPrivateTripsState] = useState([]);

  const { popularEvents, allEvents, privateEvents } = useSelector(
    (state) => state.events
  );

  useEffect(() => {
    console.log("hello");
    dispatch(fetchPrivate());
    dispatch(fetchAllEvents());
  }, []);


  useEffect(() => {
    if (allEvents.length > 0) {
      setAllEventsState(allEvents);
    }
  }, [allEvents]);

  useEffect(() => {
    if (privateEvents.length > 0) {
      setPrivateTripsState(privateEvents);
      console.log(privateEvents);
    }
  }, [privateEvents]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <Header />
      {allEventsState.length > 0 ? <InterestingPlans events={allEvents} /> : <div></div>}
      {privateTripsState.length > 0 && <PrivateTrips events={privateEvents} />}
      <h1 className="text-white  px-5 md:pl-20 z-20 font-extrabold text-4xl text-start w-full">What do we offer</h1>
      <div className="flex z-20 gap-y-5 md:flex-row flex-col justify-between items-center w-full px-5 md:px-20 mt-16">
        <div className="flex h-[450px] px-10 py-5 bg-gray-700/50 backdrop-blur-xl gap-5 flex-col items-center justify-center w-full md:w-[31%] rounded-2xl">
          <h1 className="text-white z-50 font-bold text-xl text-start w-full">Expertise and Guidance</h1>
          <p className="text-lg text-start font-light">We have experienced professionals who can provide valuable insights and recommendations based on their knowledge and personal experiences. </p>
          <div className="flex mt-20 w-full justify-end items-center">
            <p className="text-light text-blue-800 text-5xl">01</p>
          </div>
        </div>
        <div className="flex px-10 h-[450px] py-5 bg-gray-700/50 backdrop-blur-xl gap-5 flex-col items-center justify-center w-full md:w-[31%] rounded-2xl">
          <h1 className="text-white z-50 font-bold text-xl text-start w-full">Time and Convenience</h1>
          <p className="text-lg text-start font-light">Planning a trip can be time-consuming and overwhelming, especially when considering factors like transportation, accommodations, activities, and budgeting. We can streamline this process by handling all the details for you. </p>
          <div className="flex mt-8 w-full justify-end items-center">
            <p className="text-light text-blue-800 text-5xl">02</p>
          </div>
        </div>
        <div className="flex h-[450px] px-10 py-5 bg-gray-700/50 backdrop-blur-xl gap-5 flex-col items-center justify-center w-full md:w-[31%] rounded-2xl">
          <h1 className="text-white z-50 font-bold text-xl text-start w-full">Assistance and Support</h1>
          <p className="text-lg text-start font-light">When you book through us, you have the benefit of ongoing assistance and support throughout your journey. If any issues arise before or during your trip, We can serve as a point of contact to help resolve these issues and minimize disruptions.</p>
          <div className="flex w-full mt-5 justify-end items-center">
            <p className="text-light text-blue-800 text-5xl">03</p>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full">
        <Footer />
      </div>

    </main>

  );
}
