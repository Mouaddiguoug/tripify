import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { IoIosClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { handleBuyApi } from "../../app/data/features/events/eventsSlice"
import { handleBuyPackApi } from "../../app/data/features/events/eventsSlice"
import moment from 'moment/moment';
import { toast } from 'react-toastify';

function orderConfirmation({ setToggleOrder, toggleOrder, tripTitle, tripPrice, isPack }) {
    const dispatch = useDispatch();
    const [date, setDate] = useState(null);
    const [personsNum, setPersonsNum] = useState(1);
    const router = useRouter();
    const searchParams = useSearchParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userDataLocal = JSON.parse(localStorage.getItem("user"));
        if (userDataLocal) {
            setUser(userDataLocal.data);
        }
    }, [])

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    const handleSubmit = () => {
        if( moment(date).isBefore(moment.now())) return toast("this date is not valid")
        if (user) {
            const data = {
                "name": user.name,
                "email": user.email,
                "phone": user.phone,
                "tripTitle": tripTitle,
                "tripPrice": tripPrice,
                "personsNum": personsNum,
                "tripDate": date,
            };
            if (isPack) {
                dispatch(handleBuyPackApi(data));
            } else {
                dispatch(handleBuyApi(data));
            }
            router.push("success");
        } else {
            if (isPack) {
                router.push("auth/signup" + "?" + createQueryString("comingFrom", "buy") + "&" + createQueryString("isPack", "true") + "&" + createQueryString("title", tripTitle) + "&" + createQueryString("price", tripPrice) + "&" + createQueryString("date", date) + "&" + createQueryString("personsNum", personsNum));
            } else {
                router.push("auth/signup" + "?" + createQueryString("comingFrom", "buy") + "&" + createQueryString("title", tripTitle) + "&" + createQueryString("price", tripPrice) + "&" + createQueryString("date", date) + "&" + createQueryString("personsNum", personsNum));
            }
        }
    }
    return toggleOrder && (
        <div className='w-screen fixed h-screen bg-black/15 z-50 flex justify-center items-center'>
            <div className='w-5/6 py-3 md:w-4/6 h-[80%] px-2 md:h-[80%] flex justify-between rounded-2xl flex-col mt-20 items-center bg-white'>
                <div className='w-full flex justify-between items-center' >
                    <h1 className='text-xl pl-2 text-black font-bold'>Order Confirmation</h1>
                    <IoIosClose onClick={() => setToggleOrder(!toggleOrder)} className='text-black' size={50} />
                </div>
                <div className="h-5/6 flex flex-col md:flex-row justify-between items-center w-full">
                    <div className='md:w-3/6 w-full h-full flex justify-center flex-col items-start'>
                        <p className='text-black text-sm md:text-xl text-center px-20'>Choose your date.</p>

                        <DateCalendar
                            className='w-5/6 h-5/6 text-black'
                            onChange={(value) => {
                                setDate(value.$d)
                            }}

                            slotProps={{
                                // 1. Change the layout of the month selector.
                                calendarHeader: {
                                    sx: { color: "#000" }
                                },

                                // 2. Change the arrow icons styles.
                                leftArrowIcon: {
                                    sx: { color: "#000", fontSize: "2rem" }
                                },
                                rightArrowIcon: {
                                    sx: { color: "#000", fontSize: "2rem" }
                                },
                            }}
                        />

                    </div>
                    <div className='md:w-3/6 w-full flex gap-4 items-center justify-between flex-col'>
                        <p className='text-black text-sm md:text-xl text-center px-20'>Persons.</p>

                        <div className="flex self-center justify-between items-center w-2/6">
                            <div onClick={() => personsNum > 0 && setPersonsNum(personsNum - 1)} className="w-10 bg-white flex cursor-pointer text-black justify-center items-center rounded-2xl">
                                <p>-</p>
                            </div>
                            <div className="bg-gray-700 w-2/6 justify-center items-center flex rounded-xl">
                                <p className="text-white">{personsNum}</p>
                            </div>
                            <div onClick={() => personsNum < 10 && setPersonsNum(personsNum + 1)} className="w-10 bg-white cursor-pointer text-black flex justify-center items-center rounded-2xl">
                                <p>+</p>
                            </div>
                        </div>
                        <p className='text-black text-lg md:text-xl text-center md:px-20'>we'll pick you up from cafe de france jamae l'fna</p>
                        <img src="assets/map.jpeg" className='md:w-[95%] md:block hidden w-[90%] rounded-2xl h-full' alt="" />
                    </div>

                </div>

                <div className='w-full mt-3 px-2 flex justify-center md:justify-end items-center'>
                    <button onClick={() => handleSubmit()} className='md:w-1/6 w-[90%] py-2 rounded-2xl bg-blue-400'>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default orderConfirmation
