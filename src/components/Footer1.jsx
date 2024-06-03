import React from 'react';
import { IoLogoApple } from "react-icons/io5";
import iPhone13 from '../assets/iPhone 13 Pro.png';
import Star7 from '../assets/Star 7.svg';
import gradientImage from '../assets/Group-1.png';
import Ellipse from '../assets/Ellipse 2157.svg';
import Star from '../assets/Star 8.svg';

const Footer1 = () => {
    return (
        <div className='max-w-[1700px] relative w-11/12 mx-auto pt-28 pb-12'>
            <div className='absolute -z-10 -top-16 -left-32'>
                <img src={gradientImage} alt="" />
            </div>
            <div className='absolute w-12 top-60 -left-10'>
                <img src={Star} alt="" />
            </div>
            <div className='flex flex-row max-[1100px]:flex-col max-[1100px]:p-8 items-center bg-black rounded-md gap-6 py-12 pl-16 max-w-[90%] w-full mx-auto'>
                <div className='w-[60%] max-[1100px]:w-full relative flex flex-col gap-y-2 text-white'>
                    <p className='text-5xl font-bold'>Ready To Get Started?</p>
                    <p className='text-xl text-gray-100'>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
                    <div className='w-fit z-20 flex flex-row gap-4 text-xl items-center rounded-md bg-white px-6 py-4 text-black'>
                        <p>Download App</p>
                        <IoLogoApple fontSize={28} />
                    </div>
                    <div className='absolute max-[1100px]:hidden bottom-0 right-28 top-40'>
                        <img src={Star7} alt="" />
                    </div>
                    <div className='absolute max-[1100px]:hidden z-10 top-32 -left-20 -rotate-6'>
                        <img src={Ellipse} alt="" className='' />
                    </div>
                    <div className='absolute max-[1100px]:hidden z-10 top-44 -left-20'>
                        <img src={Ellipse} alt="" className='' />
                    </div>
                    <div className='absolute max-[1100px]:hidden z-10 top-56 -left-20 rotate-6'>
                        <img src={Ellipse} alt="" className='' />
                    </div>
                </div>
                <div className='w-[40%] max-[1100px]:hidden'>
                    <div>
                        <img src={Star7} alt="" />
                    </div>
                    {/* <div className='relative'>
                        <div className='absolute z-10 -bottom-40 -right-10'>
                            <img src={Ellipse} alt="" className='rotate-[210deg]' />
                        </div>
                        <div className='absolute z-10 -bottom-28 -right-16'>
                            <img src={Ellipse} alt="" className='rotate-[210deg]' />
                        </div>
                        <div className='absolute z-10 -bottom-24 right-3'>
                            <img src={Ellipse} alt="" className='rotate-[230deg]' />
                        </div>
                    </div> */}
                    <div className='z-50'>
                        <img src={iPhone13} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer1;
