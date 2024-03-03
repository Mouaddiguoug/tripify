import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/app/data/features/auth/authSlice';

function loginForm() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { loading, user, error, success } = useSelector(
        (state) => state.auth.login
    );

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const onchange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(login(formData));
    };

    useEffect(() => {
        console.log(success);
        if (success) {
          router.push("/");
        }
      }, [success]);

    return (
        <div className='md:w-[30%] w-full flex justify-center gap-8 flex-col items-center'>
            <img src='/assets/logo.png' className='s' />
            <h1 className='text-3xl mb-0 font-extrabold'>Welcome back</h1>
            <input name='email' type='text' onChange={(e) => onchange(e)} placeholder='Email' className='rounded-2xl px-4 w-5/6 h-14 bg-[#542155]' />
            <input name='password' type='password' onChange={(e) => onchange(e)} placeholder='Password' className='rounded-2xl px-4 w-5/6 h-14 bg-[#542155]' />
            <button onClick={(e) => onSubmit(e)} className='bg-[#BBBBBB] w-5/6 h-14 rounded-2xl'>Sign in</button>
            <div className='flex justify-center items-center gap-2'>
                <p>You don't have an account?</p>
                <a href='/auth/signup' className=' text-blue-400'>sign up</a>
            </div>
        </div>
    )
}

export default loginForm
