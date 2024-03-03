"use client"
import SignUpForm from '@/components/auth/signUpForm';
const signUp = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[70%] hidden relative md:block h-screen'>
                <div className=' bg-gradient-to-r from-black/75 to-black/100 h-full w-full z-10 absolute'></div>
                <img className='z-0 h-screen' src='/assets/login_page.jpg' />
            </div>
            <SignUpForm />
        </div>
    )
}

export default signUp
