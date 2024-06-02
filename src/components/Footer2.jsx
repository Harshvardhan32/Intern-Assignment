import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer2 = () => {
    return (
        <div className='max-w-[1700px] w-11/12 mx-auto py-5'>
            <div className='flex flex-col gap-6 max-w-[90%] w-full mx-auto'>
                <div className='flex flex-row max-[1000px]:flex-col gap-4 justify-between'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <MdEmail fontSize={24} fill='#FF5555' />
                            <a href="mailto:Help@Frybix.Com" className='font-medium'>Help@Frybix.Com</a>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <IoCall fontSize={25} fill='#FF5555' />
                            <a href="tel:344566789" className='font-medium'>+1234 456 678 89</a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p className='text-3xl font-semibold'>Links</p>
                        <Link className='font-medium'>Home</Link>
                        <Link className='font-medium'>About Us</Link>
                        <Link className='font-medium'>Bookings</Link>
                        <Link className='font-medium'> Blog</Link>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p className='text-3xl font-semibold'>Legal</p>
                        <Link className='font-medium'>Terms Of Use</Link>
                        <Link className='font-medium'>Privacy Policy</Link>
                        <Link className='font-medium'>Cookie Policy</Link>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p className='text-3xl font-semibold'>Product</p>
                        <Link className='font-medium'>Take Tour</Link>
                        <Link className='font-medium'>Live Chat</Link>
                        <Link className='font-medium'>Reviews</Link>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-3xl font-semibold'>Newsletter</p>
                        <p className='font-medium'>Stay Up To Date</p>
                        <div className='flex flex-row items-center py-2 px-2'>
                            <label>
                                <input type="email" placeholder='Your email'
                                    className='w-fit max-w-[150px] font-medium px-2 focus:outline-none' required />
                            </label>
                            <button className='bg-black text-center text-xl text-white px-6 py-3 rounded-md'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <div className='my-10 w-full h-[2px] bg-gradient-to-r from-slate-100 via-slate-500 to-slate-100'></div>
                    <p className='font-medium'>Copyright 2022 Uifry.com All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer2;