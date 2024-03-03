import React, { useEffect } from 'react'
import StartingNearByComponent from './startingNearByComponent';
import config from '@/contsants/config';

function startingNearBy({ events }) {

    return (
        <>
            <img src='assets/color-sharp 2.png' className='absolute left-0 top-[80%]' />
            <div className='z-40 relative w-full mb-20 flex flex-col gap-20 px-5 md:pl-20 h-fit'>
                <h2 className='text-4xl font-extrabold'>What’s new</h2>
                <div className='flex gap-5 md:flex-row flex-col'>
                    {
                        events?.length > 0 ? events?.map(trip => {
                            return <StartingNearByComponent title={trip.albumData.title} image={`${config.baseUrl}${trip.pictres[0].value}`} description={trip.albumData.description} price={trip.albumData.price} startingDate={trip.albumData.startingTime} />
                        }) : <div></div>
                    }
                </div>


            </div>
        </>
    )
}

export default startingNearBy
