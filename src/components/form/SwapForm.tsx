import Back from '../button/Back'
import { BsChevronLeft } from 'react-icons/bs'
import Select from 'react-select'
import useSwapForm from '../../hooks/useSwapForm'
import GlobalLayout from '../../layouts/GlobalLayout'
import React from 'react'

const SwapForm = () => {
    const { swapform, selectedOption, handleChange, selectedOption2, handleChange2,
        selectedOption3, handleChange3, selectedOption4, handleChange4,
        selectedOption5, handleChange5, swapformsekolah, swapformsekolah2,
        swapformsekolah3, swapformsekolah4, handleChange6, selectedOption6, swapformfieldperiode } = useSwapForm();


    return (
        <div>
            <GlobalLayout>
                <div className='mt-20 bg-gray-200 min-h-[1100px]'>
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
                    <p className='text-center text-black bg text-2xl font-bold'>
                        Fill Criteria For Swap SKill
                    </p>
                    <div className='mx-[27%] w-[50%] h-[800px] rounded-2xl shadow-2xl bg-white'>
                        <div className='mx-[10%] mt-10'>
                            <div>
                                <label className='font-light mt-10' htmlFor="selectOption">Field</label>
                                <Select options={swapform} value={selectedOption} onChange={handleChange} />
                            </div>

                            <div className="mt-5">
                                {selectedOption.value === 'sekolah' && (
                                    <>
                                        <form>
                                            <div className='mt-5'>
                                                <label className='font-light' htmlFor="selectOption">Skill (main)</label>
                                                <Select options={swapformsekolah} value={selectedOption2} onChange={handleChange2} />
                                                <Select className='mt-2' options={swapformsekolah2} value={selectedOption3} onChange={handleChange3} />
                                            </div>
                                            <div className='mt-5'>
                                                <label className='font-light' htmlFor="selectOption">Alternative (if main not exist)</label>
                                                <Select options={swapformsekolah3} value={selectedOption4} onChange={handleChange4} />
                                            </div>
                                            <div className='mt-5'>
                                                <label className='font-light' htmlFor="selectOption">Alternative 2 (if main not exist)</label>
                                                <Select options={swapformsekolah4} value={selectedOption5} onChange={handleChange5} />
                                            </div>
                                        </form>
                                        <div className='pt-10'>
                                            <p>Swap with your skill (min pick 3)</p>
                                        </div>
                                        <div className='mt-5'>
                                            <label className='font-light' htmlFor="selectOption">Period teaching</label>
                                            <Select options={swapformfieldperiode} value={selectedOption6} onChange={handleChange6} />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-[50%] flex justify-center items-center mx-[25%] text-[white] font-medium p-3 rounded-md border-2 bg-[#2c88d9] mt-5 hover:bg-[#30587b]"
                                        >
                                            Find your mate
                                        </button>
                                    </>
                                )}

                                {selectedOption.value === 'pekerjaan' && (
                                    <>
                                        <form>
                                            <label htmlFor="teacherForm">Jobs</label>
                                            <input
                                                type="text"
                                                className="border-2 p-3 rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                                required
                                            />
                                        </form>
                                        <button
                                            type="submit"
                                            className="w-[50%] flex justify-center items-center mx-[25%] text-[white] font-medium p-3 rounded-md border-2 bg-[#2c88d9] mt-5 hover:bg-[#30587b]"
                                        >
                                            Find your mate
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </GlobalLayout>
        </div>

    )
}

export default SwapForm