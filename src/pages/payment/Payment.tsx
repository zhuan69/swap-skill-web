import Back from '../../components/button/Back'
import { BsChevronLeft } from 'react-icons/bs'
import Select from 'react-select'
import useSwapForm from '../../hooks/useSwapForm'
import bcaIcon from '../../components/image/bca.png';
import React from 'react'
import GlobalLayout from '../../layouts/GlobalLayout';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate()
    const submitPayment = () => {
        Swal.fire({
            title: "Success Payment",
            text: "Success Payment Course",
            icon: "success",
            timer: 3000,
        }).then((val) => {
            if (val.isDismissed || val.isConfirmed) {
                navigate('/home')
            }
        }).catch((e) =>
            console.log(e))
    }
    return (
        <div>
            <GlobalLayout>
                <div className='mt-20 pb-20 bg-gray-200 '>
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
                            <p className='text-center text-[#788896] text-2xl font-bold mb-10'>
                                Confirmation Payment
                            </p>

                            <div className='flex flex-col  mb-8'>
                                <div className='flex flex-col items-center'>
                                    <img src={bcaIcon} alt='Bank Logo' className='mb-4 w-80 h-auto' />
                                    <p className='text-2xl font-bold mb-1'>4660092136</p>
                                    <p className='text-l font-semibold color-[#2b3a47] mb-4'>PT. Jembatan Ilmu Dunia Akhirat</p>
                                    <p className='text-4xl font-bold mb-8 text-[#d3455b]'>IDR 160.213</p>
                                </div>
                                <p className='text-lg text-left font-semibold mb-4'>How to Transfer:</p>
                                <ol className='list-decimal pl-5 text-base mb-6'>
                                    <li>Enter the bank account number and name displayed on this page.</li>
                                    <li>Transfer the amount according to the digits provided.</li>
                                    <li>Ensure the last 3 digits match those on this page.</li>
                                    <li>Once done, click 'Confirm Payment' to process your payment.</li>
                                </ol>

                                <div className='flex flex-col items-center'>
                                    <button className='bg-[#2c88d9] text-white py-2 px-14 ' onClick={(e) => submitPayment}>
                                        Confirm Payment
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </GlobalLayout>
        </div>

    )
}

export default Payment