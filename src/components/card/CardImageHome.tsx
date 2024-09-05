import React from 'react';

const CardImageHome = () => {
    return (
        <>
            <div className='flex justify-center items-center mt-10 bg-white rounded-2xl shadow-2xl'>
                <div className='w-[70%]'>
                    <img src="/home.png" alt="home" className='' />
                </div>
                <div className='w-[450px] font-bold'>
                    <h1 className='text-3xl'>You can swap skill for free</h1>
                    <p className='mt-5 text-gray-500'>introduction this feature allow you teach each other so they can learn the same skills they want
                        find your new oppurtunity, and learn much you want
                    </p>
                    <a href="/swapform">
                        <button className='mt-10 w-[100%] h-10 rounded-md text-white bg-[#6558f5] hover:bg-[#7158e0]'>
                            Request Swap Skill
                        </button>
                    </a>
                </div>
            </div>
            <p className='text-center text-3xl font-bold mt-10'>OR</p>
        </>
    );
}

export default CardImageHome;
