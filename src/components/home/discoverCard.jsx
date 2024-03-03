import config from "@/contsants/config"
import Image from "next/image"
import { useCallback } from "react";
import { Breathing } from "react-shimmer";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function discoverCard({ events }) {
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
            {
                events.length > 0 ? events.map(trip => {
                    return <div onClick={() => router.push(pathname + "event" + "?" + createQueryString("title", trip.albumData.title) + "&" + createQueryString("description", trip.albumData.description) + "&" + createQueryString("price", trip.albumData.price) + "&" + createQueryString("startingDate", trip.albumData.startingTime) + "&" + createQueryString("image", `${config.baseUrl}${trip.pictres[0].value}`))} className='flex w-full rounded-2xl gap-5 justify-between h-44 px-5 items-center bg-[#221E4D]/60'>
                        <Image src={`${config.baseUrl}${trip.pictres[0].value}`} className='rounded-2xl w-1/6' width={50} height={50} />
                        <div className='w-5/6 flex gap-2 flex-col justify-between items-start'>
                            <h1 className='text-xl text-white text-start w-full'>{trip.albumData.title}</h1>
                            <p className='text-start font-extralight'>{window.innerHeight > 700 ? trip.albumData.description.split(" ").slice(0, 5).map(word => `${word} `) : trip.albumData.description.split(" ").slice(0, 40).map(word => `${word} `)}...</p>
                            <p className='text-start font-extralight'>{trip.albumData.startingTime}</p>
                        </div>
                    </div>
                }) :
                    <div className="w-full flex flex-col gap-7">
                        <Breathing className="w-full rounded-lg" height={100} />
                        <Breathing className="w-full rounded-lg" height={100} />
                        <Breathing className="w-full rounded-lg" height={100} />
                        <Breathing className="w-full rounded-lg" height={100} />
                    </div>
            }
        </>

    )
}

export default discoverCard
