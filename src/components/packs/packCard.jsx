import { useCallback, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import OrderConfirmation from '../events/orderConfirmation';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import config from '@/contsants/config';
import Image from 'next/image';

function packCard({ pack }) {
    const [toggleOrder, setToggleOrder] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )
    
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <OrderConfirmation
                    tripTitle={pack.packData.title}
                    tripPrice={pack.packData.price}
                    isPack={true}
                    toggleOrder={toggleOrder} setToggleOrder={setToggleOrder} />
                <div className='flex w-full flex-col justify-center items-start'>
                    <div className='w-full flex justify-between items-center'>
                        <h1 className='text-2xl mb-5 font-bold'>{pack.packData.title}</h1>
                        <button onClick={() => setToggleOrder(true)} className='w-44 bg-blue-500 rounded-2xl px-2 py-2'>Buy pack for {pack.packData.price}</button>
                    </div>

                    <div className='flex md:flex-row flex-col justify-start gap-5 items-start'>
                        {
                            pack.posts.length > 0 && pack.posts.map(trip => {
                                console.log(trip.pictures[0]);
                                return  <div onClick={() => router.push(pathname + "event" + "?" + createQueryString("title", trip.data.title) + "&" + createQueryString("description", trip.data.description) + "&" + createQueryString("price", trip.data.price) + "&" + createQueryString("endingTime", trip.data.endingTime) + "&" + createQueryString("startingTime", trip.data.startingTime) + "&" + createQueryString("image1", `${config.baseUrl}${trip.pictures[0].value}`)  + "&" + createQueryString("image2", `${config.baseUrl}${trip.pictures[1].value}`)  + "&" + createQueryString("image3", `${config.baseUrl}${trip.pictures[2].value}`))} className='flex md:w-full rounded-2xl gap-5 justify-between h-36 px-5 items-center bg-[#221E4D]/60'>
                                <Image src={`${config.baseUrl}${trip.pictures[0].value}`} className='w-3/6 rounded-2xl' width={80} height={80} />
                                <div className='w-5/6 flex gap-3 flex-col justify-between items-start'>
                                    <h1 className='text-xl text-white text-start w-full'>{trip.data.title.split(" ").slice(0, 3).map(word => `${word} `)}...</h1>
                                    <p className='text-start font-extralight'>{trip.data.description.split(" ").slice(0, 4).map(word => `${word} `)}...</p>
                                </div>
                            </div>
                            })
                        }
                    </div>
                </div>
            </LocalizationProvider>
        </>
    )
}

export default packCard
