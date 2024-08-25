import React from 'react'
import Back from '../../components/button/Back'
import { BsChevronLeft } from 'react-icons/bs'

function WrongPage() {
    return (
        <>
            <div className='my-20 mx-20'>
                {/* button back */}
                <div>
                    <Back
                        firstElement={
                            <>
                                <div>
                                    <a href='/home'>
                                        <div className='flex items-center text-2xl pt-10 pl-10'>
                                            <BsChevronLeft />
                                            <p> Back</p>
                                        </div>
                                    </a>
                                </div>
                            </>
                        } />
                </div>
                <div className='flex justify-center items-center mt-20 font-bold text-3xl'>
                    <p className='w-[60%] text-center'>it looks like there aren't many great matches for your search, please fint with other request</p>
                </div>
                <div className='flex justify-center items-center mt-20'>
                    <a href="/home">
                        <button className='bg-[#2c88d9] text-white py-2 px-20 rounded-md'>
                            search again
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default WrongPage