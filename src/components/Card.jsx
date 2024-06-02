import React from 'react';

const Card = ({ data, active }) => {
    return (
        <div className={`${active ? 'bg-[#FF5555] text-white' : 'bg-white'} capitalize flex flex-col gap-y-2 p-6 rounded-md`}>
            <p className='text-2xl font-semibold'>{data.heading}</p>
            <p className='text-xl'>{data.description}</p>
        </div>
    );
};

export default Card;