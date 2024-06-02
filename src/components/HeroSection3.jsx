import React from 'react';
import GroupImage1 from '../assets/Group 1000002332.png';
import GroupImage2 from '../assets/Group 35917.png';
import gradientImage from '../assets/Group-1.png';
import Star from '../assets/Star 8.svg';

const HeroSection3 = () => {
    return (
        <div className='max-w-[1700px] w-11/12 relative mx-auto py-10'>
            <div className='flex flex-row max-[1100px]:flex-col gap-6 max-w-[90%] w-full mx-auto'>
                <div className='w-[50%] max-[1100px]:w-full relative'>
                    <div className='absolute -z-10 top-10 left-10'>
                        <img src={gradientImage} alt="" />
                    </div>
                    <img src={GroupImage1} className='min-w-[300px] w-full' alt="" />
                </div>
                <div className='w-[50%] max-[1100px]:w-full flex flex-col gap-y-4'>
                    <p className='capitalize text-2xl font-bold'>The Best Financial Accounting App Ever!</p>
                    <p className='capitalize text-gray-700 text-xl'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                    <div>
                        <img src={GroupImage2} alt="" />
                    </div>
                    <p className='capitalize text-xl font-bold'>Nick Jonas</p>
                </div>
            </div>
            <div className='absolute w-12 bottom-12 -left-8'>
                <img src={Star} alt="" />
            </div>
        </div>
    );
};

export default HeroSection3;