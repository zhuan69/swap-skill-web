import { useState } from 'react';
import cardSearch from '../datadummy/CardSearchAll';
import React from 'react';

const CardSearchIndonesia = () => {
    const [selectedOption, setSelectedOption] = useState("Bahasa Inggris");

    return (
        <div className='mt-[100px]'>
            <div className="flex items-start pt-20 pl-10 absolute">
                <h1 className='text-xl font-bold'>
                    CATEGORY
                </h1>
                <ul className="mt-6 -ml-28">
                    <li>
                        <input
                            type="radio"
                            name="courseOption"
                            id="ipa"
                            value="Ipa"
                            checked={selectedOption === "Ipa"}
                            onChange={() => setSelectedOption("Ipa")}
                        />
                        <label htmlFor="ipa">IPA</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="courseOption"
                            id="ips"
                            value="Ips"
                            checked={selectedOption === "Ips"}
                            onChange={() => setSelectedOption("Ips")}
                        />
                        <label htmlFor="ips">IPS</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="courseOption"
                            id="matematika"
                            value="Matematika"
                            checked={selectedOption === "Matematika"}
                            onChange={() => setSelectedOption("Matematika")}
                        />
                        <label htmlFor="matematika">MATH</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="courseOption"
                            id="bahasa inggris"
                            value="Bahasa Inggris"
                            checked={selectedOption === "Bahasa Inggris"}
                            onChange={() => setSelectedOption("Bahasa Inggris")}
                        />
                        <label htmlFor="bahasa inggris">ENGLISH</label>
                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="flex items-center text-2xl pt-10 pr-[50%]">
                    <p>List Course</p>
                </div>
                <div>
                    <a href="/details/bahasainggris">
                        {cardSearch
                            .filter(card => card.category === selectedOption)
                            .map((card, index) => (
                                <div key={index} className="flex flex-col items-center my-10 mx-[300px]">
                                    <div className='bg-white w-[90%] min-w-[1000px] shadow-xl rounded-xl border-2 flex flex-col items-center'>
                                        <div className="flex flex-row justify-center items-center w-[90%] h-[250px]">
                                            <img
                                                className="w-[150px] h-[150px] mb-3 mt-7 rounded-full shadow-lg"
                                                src={card.imageUrl}
                                                alt={`Card ${card.id}`}
                                            />
                                            <div className="text-left ml-4">
                                                <h1 className='text-xl font-bold flex items-center'>
                                                    {card.name}
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 ml-[150px]">{card.price}</p>
                                                </h1>
                                                <h5 className="mb-1 text-[15px] font-medium text-gray-500 dark:text-gray-400">
                                                    {card.title}
                                                </h5>
                                                <span className="text-sm w-[60%] text-center text-gray-900">
                                                    {card.subtitle}
                                                </span>
                                                <span className='mt-3 flex items-center'>
                                                    <p className='ml-2 bg-[#fceab3]'>
                                                        {card.rating}
                                                    </p>
                                                    <p className='ml-20 bg-[#fceab3]'>
                                                        {card.rating2}
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </a>
                </div>

            </div>
        </div>
    )
}

export default CardSearchIndonesia;
