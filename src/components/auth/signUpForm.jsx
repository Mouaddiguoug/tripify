import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { handleBuyApi } from "../../app/data/features/events/eventsSlice"
import { handleBuyPackApi } from "../../app/data/features/events/eventsSlice"
import { useState, useEffect } from 'react';
import { register } from '@/app/data/features/auth/authSlice';

const signUpForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const params = useSearchParams();
    const { loading, user, error, success } = useSelector(
        (state) => state.auth.register
    );
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    });

    const onchange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const reg = new RegExp(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
        );
        if (!formData.password.match(reg)) return toast("password format is invalid");
        if (formData.password != formData.confirmPassword) return toast("passwords do not match.");
        dispatch(register(formData));
        if (params.get("comingFrom") != null) {
            const data = {
                "name": `${formData.firstName} ${formData.lastName}`,
                "email": formData.email,
                "phone": formData.phoneNumber,
                "tripTitle": params.get("title"),
                "tripPrice": params.get("price"),
                "tripDate": params.get("date"),
                "personsNum": params.get("personsNum"),
            };
            if (params.get("isPack") != null) {
                return dispatch(handleBuyPackApi(data));
            }
            dispatch(handleBuyApi(data));
        }

    };

    useEffect(() => {
        if (success) {
            if (params.get("comingFrom") != null) {
                router.push("/success");
            } else {
                router.push("/");
            }
        }
    }, [success]);

    return (
        <div className='md:w-[30%] h-screen w-full flex justify-center gap-8 flex-col items-center'>
            <img src='/assets/logo.png' className='w-32' />
            <h1 className='text-3xl mb-0 font-extrabold'>Create your account</h1>
            <div className='flex justify-between items-center w-5/6 gap-5'>
                <input onChange={(e) => onchange(e)} name='firstName' type='text' placeholder='First Name' className='rounded-2xl px-4 w-4/6 h-14 bg-[#542155]' />
                <input onChange={(e) => onchange(e)} name='lastName' type='text' placeholder='Last Name' className='rounded-2xl px-4 w-4/6 h-14 bg-[#542155]' />
            </div>
            <input onChange={(e) => onchange(e)} name='email' type='text' placeholder='Email' className='rounded-2xl px-4 w-5/6 h-14 bg-[#542155]' />
            <input onChange={(e) => onchange(e)} name='phoneNumber' type='phone' placeholder='Phone' className='rounded-2xl px-4 w-5/6 h-14 bg-[#542155]' />
            <input onChange={(e) => onchange(e)} name='password' type='password' placeholder='Password' className='rounded-2xl px-4 w-5/6 h-14 bg-[#542155]' />
            <input onChange={(e) => onchange(e)} name='confirmPassword' type='password' placeholder='Confirm Password' className='rounded-2xl px-4 w-5/6 h-14 bg-[#542155]' />
            <button onClick={(e) => onSubmit(e)} className='bg-[#BBBBBB] w-5/6 h-14 rounded-2xl'>Sign in</button>
            <div className='flex justify-center items-center gap-2'>
                <p>You have an account?</p>
                <a href='/auth/login' className=' text-blue-400'>login</a>
            </div>
        </div>
    )
}

export default signUpForm
