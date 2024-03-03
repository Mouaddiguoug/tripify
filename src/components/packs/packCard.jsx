import { useCallback, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import OrderConfirmation from '../events/orderConfirmation';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function packCard({ pack }) {
    const searchParams = useSearchParams();
    const [toggleOrder, setToggleOrder] = useState(false);
    
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )
    console.log(pack.packData.title);
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
                        <button onClick={() => setToggleOrder(true)} className='w-28 bg-blue-500 rounded-2xl py-2'>Buy pack</button>
                    </div>

                    <div className='flex justify-start gap-5 items-start'>
                        {
                            pack.posts.length > 0 && pack.posts.map(trip => {
                                return <div className='flex w-96 rounded-2xl gap-5 justify-between h-36 px-5 items-center bg-[#221E4D]/60'>
                                    <div className='w-5/6 flex gap-3 flex-col justify-between items-start'>
                                        <h1 className='text-xl text-white text-start w-full'>{trip.title}</h1>
                                        <p className='text-start font-extralight'>{trip.description.split(" ").slice(0, 5).map(word => `${word} `)}...</p>
                                        <p className='text-start font-extralight'>{trip.startingDate}</p>
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
