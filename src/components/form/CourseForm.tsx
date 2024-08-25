import Back from '../button/Back'
import { BsChevronLeft } from 'react-icons/bs'
import topics from '../../components/datadummy/topicsstudent';
import Select from 'react-select'
import useSwapForm from '../../hooks/useSwapForm'
import GlobalLayout from '../../layouts/GlobalLayout'
import React from 'react'
import useTopicSelection from '../../hooks/useTopicSelection'
import { Link } from 'react-router-dom';

const CourseForm = () => {
    const { selectedOption2, handleChange2,
        selectedOption3, handleChange3, selectedOption4, handleChange4,
        selectedOption5, handleChange5, swapformsekolah, swapformsekolah2,
        swapformsekolah3, swapformsekolah4, handleChange6, selectedOption6, swapformfieldperiode } = useSwapForm();
    const { selectedTopics, selectedTopicsSecond, toggleTopic } = useTopicSelection();



    return (
        <div>
            <GlobalLayout>
                <div className='mt-20 pb-20 bg-gray-200 min-h-[1100px]'>
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
                    <div className='mx-auto w-[80%] max-w-[800px] h-auto rounded-2xl shadow-2xl bg-white p-8'>
                        <form>

                            <p className='text-left text-black bg text-2xl font-bold mb-10'>
                                Form Course
                            </p>
                            <div className='mb-5'>
                                <label className='font-light block mb-2' htmlFor="courseName">Name Course</label>
                                <input
                                    type="text"
                                    id="courseName"
                                    className="border-2 h-10 p-3 rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                    required
                                />
                            </div>
                            <div className='mb-5'>
                                <label className='font-light block mb-2' htmlFor="categorySelect">Category</label>
                                <Select id="categorySelect" options={swapformsekolah} value={selectedOption2} onChange={handleChange2} />
                            </div>
                            <div className='mb-5'>
                                <label className='font-light block mb-2' htmlFor="periodSelect">Period</label>
                                <Select id="periodSelect" options={swapformfieldperiode} value={selectedOption6} onChange={handleChange6} />
                            </div>
                            <div className='mb-5'>
                                <label className='font-light block mb-2' htmlFor="priceInput">Price</label>
                                <div className="flex items-center">
                                    <span className="mr-2"><b>Rp</b></span>
                                    <input
                                        type="number"
                                        id="priceInput"
                                        className="border-2 p-3 h-10 rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='mb-5'>
                                <label className='font-light block mb-2'>Schedule</label>
                                <div className="flex flex-wrap gap-4">
                                    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
                                        <label key={day} className="inline-flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="ml-2">{day}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className='mb-5'>
                                <label className='font-light block mb-2'>Time Teaching</label>
                                <div className="flex gap-4">
                                    {['Morning (07 AM - 12 PM)', 'Afternoon (01 PM - 06 PM)', 'Evening (06 PM - 12 AM)'].map(time => (
                                        <label key={time} className="inline-flex items-center">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="ml-2">{time}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className='mb-5'>
                                <label className='font-light block mb-2' htmlFor="description">Description Course</label>
                                <textarea
                                    id="description"
                                    className="border-2 p-3 rounded-md w-full h-32 resize-none hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                    required
                                />
                            </div>
                            {/* <div className='mb-5'>
                                <label className='font-light block mb-2' htmlFor="tags">Tags</label>
                                <div className="grid grid-cols-5 gap-4">
                                    {topics.map((topic, index) => (
                                        <button
                                            id="tags"
                                            key={index}
                                            type='button'
                                            className={`p-2 rounded-md border-2 w-full${selectedTopics.includes(topic) ? 'bg-gray-300' : ' hover:bg-neutral-300'}`}
                                            onClick={() => toggleTopic(topic, 1)}
                                        >
                                            {topic}
                                        </button>
                                    ))}
                                </div>
                            </div> */}
                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    className="w-[50%] text-white font-medium p-2 rounded-md border-2 bg-[#2c88d9] hover:bg-[#30587b]"
                                >
                                    <Link to={'/courselist'}>
                                        Create Course
                                    </Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </GlobalLayout>
        </div>



    )
}

export default CourseForm