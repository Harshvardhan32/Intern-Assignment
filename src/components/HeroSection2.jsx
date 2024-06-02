import React from 'react';
import Frame2 from '../assets/Frame 2.svg';
import Star from '../assets/Star 8.svg';
import Star5 from '../assets/star-05.svg';
import cube2 from '../assets/cube-02.svg';
import cube4 from '../assets/cube-04.svg';
import gradientImage from '../assets/Group-1.png';

const HeroSection2 = () => {
    return (
        <div className='max-w-[1700px] w-11/12 mx-auto py-10'>
            <div className='relative flex flex-row max-[1100px]:flex-col items-center gap-6'>
                <div className='absolute w-12 top-10 -left-8'>
                    <img src={Star} alt="" />
                </div>
                <div className='absolute -z-10 top-10 left-10'>
                    <img src={gradientImage} alt="" />
                </div>
                <div className='w-[50%] max-[1100px]:w-full mx-auto'>
                    <img src={Frame2} className='min-w-[300px] w-full' alt="" />
                </div>
                <div className='w-[50%] max-[1100px]:w-full mx-auto flex flex-col gap-y-4'>
                    <div>
                        <p className='uppercase text-[#FF5555] text-xl'>Features</p>
                        <h2 className='text-5xl font-bold'>Uifry Premium</h2>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex flex-row gap-x-2'>
                            <div>
                                <img src={Star5} alt="" />
                            </div>
                            <p className='text-base font-bold'>Budgeting Intervalse</p>
                        </div>
                        <p className='text-gray-700 text-xl'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex flex-row gap-x-2'>
                            <div>
                                <img src={cube2} alt="" />
                            </div>
                            <p className='text-base font-bold'>Budgeting Intervalse</p>
                        </div>
                        <p className='text-gray-700 text-xl'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex flex-row gap-x-2'>
                            <div>
                                <img src={cube4} alt="" />
                            </div>
                            <p className='text-base font-bold'>Budgeting Intervalse</p>
                        </div>
                        <p className='text-gray-700 text-xl'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection2;