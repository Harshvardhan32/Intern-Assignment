import React from 'react';
import Card from './Card';
import Star from '../assets/Star 8.svg';

const HeroSection4 = () => {

    const data = {
        heading: 'the best financial accounting app ever!',
        description: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.'
    };

    return (
        <div className='max-w-[1700px] relative w-11/12 mx-auto py-5'>
            <div className='flex flex-col gap-6 max-w-[90%] w-full mx-auto'>
                <div className='flex flex-row gap-6'>
                    <div className='w-[50%] max-[1100px]:w-full'>
                        <p className='uppercase text-[#FF5555] text-xl'>Faq</p>
                        <p className='text-5xl font-bold'>Frequently Asked Questions</p>
                    </div>
                    <div className='w-[50%] max-[1100px]:hidden mt-16'>
                        <img src={Star} alt="" />
                    </div>
                </div>
                <div className='flex flex-row max-[1000px]:flex-col gap-x-6'>

                    <div className='w-[50%] max-[1100px]:w-full'>
                        <Card data={data} active={true} />
                        <Card data={data} active={false} />
                        <Card data={data} active={true} />
                    </div>
                    <div className='w-[50%] max-[1100px]:w-full'>
                        <Card data={data} active={false} />
                        <Card data={data} active={true} />
                        <Card data={data} active={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection4;