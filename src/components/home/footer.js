import React from 'react'

function footer() {
    return (
        <div className='w-full z-20'>
            <div className='w-full flex py-3 flex-col md:flex-row justify-center items-center gap-10'>
                <a href='/discover'>Discover</a>
                <a href='/packs'>Packs</a>
                <a href='#'>About us</a>
            </div>
            <div className='w-full flex justify-between bg-neutral-700 h-20 px-20 items-center gap-6'>
                <img src='assets/logo.png' className='w-24' />
                <p className='md:text-xls text-xls'>Created by dmthedev</p>
            </div>
        </div>
    )
}

export default footer
