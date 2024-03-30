import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react";

function InterestingPlansComponent({ title, description, image1, image2, image3, startingTime, endingTime, price }) {
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
        <div onClick={() => router.push(pathname + "event" + "?" + createQueryString("title", title) + "&" + createQueryString("description", description) + "&" + createQueryString("price", price) + "&" + createQueryString("endingTime", endingTime) + "&" + createQueryString("startingTime", startingTime) + "&" + createQueryString("image1", image1)  + "&" + createQueryString("image2", image2)  + "&" + createQueryString("image3", image3))} className='flex md:w-full rounded-2xl gap-5 justify-between h-36 px-5 items-center bg-[#221E4D]/60'>
            <Image src={image1} className='w-3/6 rounded-2xl' width={80} height={80} />
            <div className='w-5/6 flex gap-3 flex-col justify-between items-start'>
                <h1 className='text-xl text-white text-start w-full'>{title}</h1>
                <p className='text-start font-extralight'>{description.split(" ").slice(0, 4).map(word => `${word} `)}...</p>
            </div>
        </div>
    )
}

export default InterestingPlansComponent
