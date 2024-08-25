import Back from '../button/Back'
import { BsChevronLeft } from 'react-icons/bs'
import Select from 'react-select'
import useSwapForm from '../../hooks/useSwapForm'
import GlobalLayout from '../../layouts/GlobalLayout'
import React, { useState } from 'react'
import { Input, OutlinedInput } from '@mui/material'
import { updateMemberData } from '../../services/Member'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const SwapForm = () => {
    const { selectedOption2, handleChange2,
        selectedOption3, handleChange3, selectedOption4, handleChange4,
        selectedOption5, handleChange5, swapformsekolah, swapformsekolah2,
        swapformsekolah3, swapformsekolah4, handleChange6, selectedOption6 } = useSwapForm();
    const [experienceField, setExperienceField] = useState('');
    const navigate = useNavigate()

    const updateProfileSkills = async (e: any) => {
        console.log("here")
        e.preventDefault()
        const updateData = {
            profiling: {
                experience: experienceField,
                skills: [selectedOption2.value, selectedOption3.value, selectedOption4.value, selectedOption5.value]
            }
        }
        const result = await updateMemberData(updateData)
        if (result) {
            Swal.fire({
                title: "Success",
                text: "Success Submit Form Swap",
                timer: 1000
            }).then((val) => {
                if (val.isDismissed || val.isConfirmed) {
                    navigate('/swaprecomen')
                }
            })
            return
        }
        Swal.fire({
            title: "Error",
            text: "Kesalahan saat mengsubmit untuk swap",
            timer: 1000
        }).then((val) => {
            window.location.reload()
        })

    }

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
                            <div className="mt-5">
                                <form onSubmit={updateProfileSkills}>
                                    <div>
                                        <label className='font-light mt-10' htmlFor="selectOption">Experience</label>
                                        <br />
                                        <OutlinedInput type='text' placeholder="Experience" onChange={(e) => { setExperienceField(e.target.value) }} fullWidth={true}></OutlinedInput>
                                    </div>
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
                                    <button
                                        type="submit"
                                        className="w-[50%] flex justify-center items-center mx-[25%] text-[white] font-medium p-3 rounded-md border-2 bg-[#2c88d9] mt-5 hover:bg-[#30587b]"
                                    >
                                        Find your mate
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </GlobalLayout>
        </div>

    )
}

export default SwapForm