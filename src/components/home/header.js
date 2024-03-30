import { useRouter } from "next/navigation"

function header() {
    const router = useRouter();
    return (
        <>
            <img src='assets/color-sharp2 1.png' className='absolute' />
            <div className='w-full z-40 flex flex-col md:flex-row md:justify-between justify-center items-center h-screen'>
                <div className='flex flex-col justify-between md:items-start items-center gap-10 w-full md:w-3/6'>
                    <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold md:mx-20'>Tripify is your ultimate travel companion</h1>
                    <p className='md:text-2xl text-xl text-center md:text-left px-10 md:px-0 font-thin md:mx-20'>Discover, plan and and experience your new adventure</p>
                    <button onClick={() => router.push("/discover")} className='md:w-2/6 w-5/6 bg-blue-300 rounded-lg py-2 md:mx-20'>Get started</button>
                </div>
                <div className='w-3/6 md:flex hidden justify-center items-center'>
                    <img src='assets/header.png' className='w-[89%]' />
                </div>
            </div>
        </>
    )
}

export default header
