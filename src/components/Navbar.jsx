import React, { useState, useRef } from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import useOnClickOutside from '../hooks/ClickOutside';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setShowMenu(false));

    const showMenuHandler = () => {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    };

    return (
        <div className='max-w-[1700px] w-11/12 mx-auto py-5'>
            <div className='flex flex-row gap-6 max-w-[90%] max-[1000px]:hidden  w-full mx-auto'>
                <div className='flex flex-row gap-4 w-full items-center'>
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                    <div className='flex flex-row gap-4'>
                        <div className='font-bold text-xl hover:text-[#FF5555]'><Link to={'/'}>Home</Link></div>
                        <div className='font-bold text-xl hover:text-[#FF5555]'><Link to={'/about'}>About Us</Link></div>
                        <div className='font-bold text-xl hover:text-[#FF5555]'><Link to={'/pricing'}>Pricing</Link></div>
                        <div className='font-bold text-xl hover:text-[#FF5555]'><Link to={'/features'}>Features</Link></div>
                    </div>
                </div>
                <Link to={'/download'} className='bg-black text-center text-xl text-white px-6 py-3 rounded-md'>
                    <div>Download</div>
                </Link>
            </div>
            <div className='max-[1000px]:block hidden'>
                <div className='relative max-w-[90%] w-full mx-auto flex flex-row justify-between'
                    ref={ref}>
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                    <div onClick={showMenuHandler}

                        className={`cursor-pointer ${!showMenu ? 'block' : 'hidden'}`}>
                        <IoMenu fontSize={28} />
                    </div>
                    <div className={`absolute top-1 -right-5 z-[100] ${showMenu ? 'block' : 'hidden'} flex flex-col gap-4 bg-gray-50 border-2 border-gray-100 p-10 rounded-md`}>
                        <div className='font-bold text-xl hover:text-[#FF5555]'><Link to={'/'}>Home</Link></div>
                        <div className='font-bold text-xl hover:text-[#FF5555]'><Link to={'/about'}>About Us</Link></div>
                        <div className='font-bold text-xl hover:text-[#FF5555]'><Link to={'/pricing'}>Pricing</Link></div>
                        <div className='font-bold text-xl hover:text-[#FF5555]'><Link to={'/features'}>Features</Link></div>
                        <Link to={'/download'} className='bg-black text-center text-xl text-white px-6 py-3 rounded-md'>
                            <div>Download</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;