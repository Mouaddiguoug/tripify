"use client"
import SignUpForm from '@/components/auth/signUpForm';
import { Suspense } from 'react';
const signUp = () => {
    return (
        <div className='flex bg-black justify-center items-center'>
            <div className='w-[70%] hidden relative md:block h-screen'>
                <div className=' bg-gradient-to-r from-black/75 to-black/100 h-full w-full z-10 absolute'></div>
                <img className='z-0 h-screen' src='/assets/login_page.jpg' />
            </div>
            <Suspense>
            <SignUpForm />

            </Suspense>
        </div>
    )
}

export default signUp
