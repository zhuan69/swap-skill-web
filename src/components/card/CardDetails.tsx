import React from 'react'
import cardSearch from '../datadummy/CardDetails';
import Back from '../button/Back';
import { BsChevronLeft } from 'react-icons/bs';


const CardDetails = () => {
    return (
        <>
            <div>
                <Back
                    firstElement={
                        <>
                            <div>
                                <a href='/home'>
                                    <div className='flex items-center font-bold text-2xl pt-10 pl-[17%]'>
                                        <BsChevronLeft />
                                        <p> Details Course</p>
                                    </div>
                                </a>
                            </div>
                        </>
                    } />
            </div>
            {cardSearch.map((card, index) => (
                <div key={index} className="flex flex-col items-center my-10 mx-[300px]">
                    <div className='bg-white w-[90%] min-w-[1100px] shadow-xl rounded-xl border-2 flex flex-col items-center'>
                        <div className='flex items-center font-bold text-xl pt-10 pr-[70%]'>
                            <p>Profile Instructor</p>
                        </div>
                        <div className="flex flex-row justify-center items-center mr-[20%] w-[90%] h-[250px]">
                            <img
                                className="w-[150px] h-[150px] mb-3 mt-7 rounded-full shadow-lg"
                                src={card.imageUrl}
                                alt={`Card ${card.id} `}
                            />
                            <div className="text-left ml-4">
                                <h1 className='text-xl font-bold flex items-center'>
                                    {card.name}
                                </h1>
                                <h5 className="mb-1 text-[15px] font-normal">
                                    {card.age}
                                </h5>
                                <h5 className="mb-1 text-[15px] font-normal">
                                    {card.title}
                                </h5>
                            </div>
                        </div>
                        <span className='mt-3 mr-[70%] text-xl font-bold'>
                            {card.extitle}
                        </span>
                        <span className='mt-3 flex items-center font-bold mr-[20%]'>
                            <p className='mr-20 text-xl'>
                                {card.twotitle}
                            </p>
                            <p className='ml-20 bg-[#fceab3]'>
                                {card.rating}
                            </p>
                            <p className='ml-20 bg-[#fceab3]'>
                                {card.rating2}
                            </p>
                        </span>
                        <span className="text-sm w-[90%] text-left pt-20 text-gray-900">
                            {card.subtitle}
                        </span>
                        <div className='mt-20'>
                            <p className='font-bold text-xl'>
                                Pick Your Schedule
                            </p>
                            <ul className='flex gap-[120px] mt-10'>
                                {[card.schedule, card.schedule2, card.schedule3, card.schedule4].map((schedule, index) => (
                                    <li key={index}>
                                        <input type="radio" name="courseOption" id={`schedule-${index}`} />
                                        <label htmlFor={`schedule-${index}`} className='pl-2'>
                                            {schedule}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className='mt-20 mb-20 px-5 py-2 bg-[#2c88d9] text-white rounded-sm'>
                            {card.button}
                        </button>
                    </div>
                </div>
            ))}

        </>
    )
}

export default CardDetails
