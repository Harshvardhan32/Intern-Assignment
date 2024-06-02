import React from 'react';
import Hero_Image_1 from '../assets/Hero_Image_1.png';
import { Link } from 'react-router-dom';
import { IoPlayCircleOutline } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";
import Iphone_13_image_1 from '../assets/iPhone-13-Pro-Front (1).png';
import Iphone_13_image_2 from '../assets/iPhone-13-Pro-Front (2).png';
import Frame1 from '../assets/Frame 1.png';
import gradientImage from '../assets/Group-1.png';
import Star from '../assets/Star 8.svg';

const HeroSection = () => {
    return (
        <div className='max-w-[1700px] w-11/12 mx-auto relative pt-20'>
            <div className='absolute w-12 top-0 -left-8'>
                <img src={Star} alt="" />
            </div>
            <div className='flex flex-row gap-6 max-w-[90%] w-full mx-auto'>
                <div className='w-[50%] max-[1200px]:w-full flex flex-col gap-4'>
                    <div className='flex flex-col relative gap-y-4'>
                        <div className='absolute max-[1200px]:right-48 -z-10 -top-40 -right-10'>
                            <img src={gradientImage} alt="" />
                        </div>
                        <h1 className='text-6xl font-bold'>Make The Best <br />Financial Decisions</h1>
                        <p className='text-gray-700 text-xl'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        <div className='flex flex-row items-center gap-4'>
                            <Link className='flex flex-row gap-x-2 items-center bg-black text-center text-xl text-white px-6 py-3 rounded-md'>
                                <div>Get Started</div>
                                <HiArrowLongRight fontSize={25} />
                            </Link>
                            <Link className='flex flex-row gap-x-2 items-center'>
                                <IoPlayCircleOutline fontSize={26} />
                                <p className={`text-xl text-gray-700`}>Watch Video</p>
                            </Link>
                        </div>
                    </div>
                    <div className='relative max-[1200px]:mx-auto'>
                        <div className='absolute w-12 top-10 left-28'>
                            <img src={Star} alt="" />
                        </div>
                        <img src={Hero_Image_1} alt="" />
                    </div>
                </div>
                <div className='max-w-[50%] max-[1200px]:hidden justify-end w-full flex flex-row relative'>
                    <div className='absolute right-4 -z-10'><img src={Frame1} alt="" className='max-w-[400px] w-full' /></div>
                    <div className='absolute right-1 top-12'><img src={Iphone_13_image_1} alt="" className='max-w-[380px] w-full' /></div>
                    <div className='absolute right-36 top-2'><img src={Iphone_13_image_2} alt="" className='max-w-[320px] w-full' /></div>
                    <div className='absolute opacity-70 -z-20 bottom-16 -right-10'>
                        <img src={gradientImage} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;