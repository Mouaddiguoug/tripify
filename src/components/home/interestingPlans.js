import React from 'react'
import InterestingPlansComponent from './interestingPlansComponent'
import config from '@/contsants/config'

function interestingPlans({events}) {
    return (
        
            <div className='z-40 relative w-full mb-20 flex flex-col gap-20 px-5 md:pl-20 h-fit'>
                <h2 className='text-4xl font-extrabold'>Popular</h2>
                <div className='flex gap-5 md:flex-row flex-col'>
                    {
                        events?.length > 0 ? events?.map(trip => {
                            return <InterestingPlansComponent price={trip.albumData.price} title={trip.albumData.title} image={`${config.baseUrl}${trip.pictres[0].value}`} description={trip.albumData.description} startingDate={trip.albumData.startingTime} />
                        }) : <div></div>
                    }
                </div>


            </div>
        
    )
}

export default interestingPlans;
