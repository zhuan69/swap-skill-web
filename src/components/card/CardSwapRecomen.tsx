import { FaStar } from "react-icons/fa";
import cardDataSwap from '../datadummy/CardDataSwap'
import React from 'react';

const CardSwapRecomen = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center">
                {cardDataSwap.map((card, index) => (
                    <div key={index} className="flex flex-col items-center my-10 mx-4">
                        <div className='bg-white shadow-xl rounded-xl border-2 flex flex-col items-center h-[400px]'>
                            <img
                                className="w-[150px] h-[150px] mb-3 mt-7 rounded-full shadow-lg"
                                src={card.imageUrl}
                                alt={`Card ${card.id} `}
                            />
                            <h1 className='text-xl font-bold'>
                                {card.name}
                            </h1>
                            <h5 className="mb-1 text-[15px] font-medium text-gray-900">
                                {card.title}
                            </h5>
                            <span className="text-sm w-[60%] text-center text-gray-500 dark:text-gray-400">
                                {card.subtitle}
                            </span>
                            <span className='mt-3 flex items-center '>
                                <FaStar color='#f7c325' />
                                <p className='ml-2'>
                                    {card.rating}
                                </p>
                            </span>
                            <button className='bg-[#2c88d9] hover:bg-[#2c82d1] text-white my-2 mx-2 py-2 px-20 rounded-md'>{card.button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardSwapRecomen