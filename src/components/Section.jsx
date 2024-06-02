import React from 'react';
import gradientImage from '../assets/Group-1.png';

const Section = ({ data, image, reverse }) => {
    return (
        <div className={`flex ${reverse ? 'flex-row-reverse max-[1100px]:flex-col-reverse' : 'flex-row max-[1100px]:flex-col-reverse'} py-5 items-center gap-6 max-w-[90%] w-full mx-auto`}>
            <div className='flex flex-col gap-4 w-[50%] max-[1100px]:w-full'>
                <div className='flex flex-col gap-x-1'>
                    <p className='uppercase text-[#FF5555] text-xl'>{data.tag}</p>
                    <p className='text-5xl font-bold'>{data.heading}</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className='text-2xl'>
                            <img src={data.icon} alt="" />
                        </div>
                        <p className='text-2xl font-bold'>{data.smallHeading}</p>
                    </div>
                    <p className='text-gray-700 text-xl'>{data.description}</p>
                </div>
            </div>
            <div className='w-[50%] relative max-[1100px]:w-full'>
                <div className='absolute -z-10 top-10 left-10'>
                    <img src={gradientImage} alt="" />
                </div>
                <img src={image} className='min-w-[300px] w-full' alt="" />
            </div>
        </div>
    );
};

export default Section;