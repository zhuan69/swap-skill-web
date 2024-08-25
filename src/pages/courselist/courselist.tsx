import Back from '../../components/button/Back'
import { BsChevronLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'; 
import Select from 'react-select'
import useSwapForm from '../../hooks/useSwapForm'
import bcaIcon from '../../components/image/bca.png';
import GlobalLayout from '../../layouts/GlobalLayout'
import React from 'react'

const WhiteBox = ({ image, title, instructor, details, students, price,buttonText, onButtonClick }) => (
    <div className='bg-white p-4 rounded shadow-md flex'>
        {/* Section 1: Image */}
        <div className='w-1/6 pr-4'>
            <img src={image} alt={title} className='w-full h-auto rounded-full object-cover' />
        </div>

        {/* Section 2: Course Details */}
        <div className='w-3/6'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <p className='text-gray-600'>{instructor}</p>
            <p className='text-gray-800 mt-2 overflow-hidden text-ellipsis line-clamp-3'>{details}</p>
            <div className='text-gray-600 mt-2'>
                <span className='text-sm bg-gray-200 p-1 rounded'>Total Students Enrolled: {students}</span>
            </div>
        </div>

        {/* Section 3: Price */}
        <div className='w-2/6 flex flex-col justify-between items-end'>
            <div className='text-gray-600 '>
                <p className='text-right'>{price}</p>
            </div>
             {/* Minimalistic Button */}
            <button 
                onClick={onButtonClick}
                className='mt-4  bg-[#007DFA] font-semibold text-white border border-gray-500 text-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500'
            >
                {buttonText}
            </button>
        </div>
    </div>
);

const CourseList = () => {
    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        navigate("/detailcourse"); 
    };

    return (
        <div>
            <GlobalLayout>
                <div className='mt-20 pb-20 bg-gray-200'>
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
                    <div className='flex'>
                        {/* Sidebar Section */}
                        <div className='w-1/4  p-4'>
                            <h2 className='text-lg font-bold mb-4'>Filter Categories</h2>
                            <div className='flex flex-col space-y-2'>
                                <label>
                                    <input type='checkbox' className='mr-2' /> IPA
                                </label>
                                <label>
                                    <input type='checkbox' className='mr-2' /> IPS
                                </label>
                                <label>
                                    <input type='checkbox' className='mr-2' /> MATH
                                </label>
                                <label>
                                    <input type='checkbox' className='mr-2' /> INDONESIA
                                </label>
                                <label>
                                    <input type='checkbox' className='mr-2' /> TECH
                                </label>
                                <label>
                                    <input type='checkbox' className='mr-2' /> SCIENCE
                                </label>
                                <label>
                                    <input type='checkbox' className='mr-2' /> PHOTOGRAPHY
                                </label>
                            </div>
                        </div>
                        {/* Main Content Section */}
                        <div className='w-3/4 p-4'>
                            <h1 className='text-3xl font-bold mb-6'>List Course</h1>
                            <div className='space-y-4'>
                                <WhiteBox 
                                    image='https://via.placeholder.com/150' 
                                    title='Course Title 1'
                                    instructor='Instructor Name'
                                    details='This is a brief description of the course that will be truncated after three lines of text.'
                                    students='50'
                                    price='Rp 150.000 / 90 minute'
                                     buttonText='Buy Course'
                                onButtonClick={handleButtonClick}  // Example action
                          
                                />
                                <WhiteBox 
                                    image='https://via.placeholder.com/150' 
                                    title='Course Title 2'
                                    instructor='Instructor Name'
                                    details='This is another brief description of the course that will be truncated after three lines of text.'
                                    students='30'
                                    price='Rp 200.000 / 60 minute'
                                    buttonText='Buy Course'
                                    onButtonClick={handleButtonClick}  // Example action
                              
                                />
                                {/* Add more WhiteBox components as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </GlobalLayout>
        </div>
    )
}

export default CourseList