import React, { useEffect, useState } from 'react'
import Back from '../button/Back'
import { BsChevronLeft } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { approveSwapRequest, finishSwapRequest, updateSwapStatus } from '../../services/Member';
import { useNavigate } from 'react-router-dom';
import { swapDetailAPI } from './SwapDetailProgressSlice';
import ReactLoading from 'react-loading';
import { Typography } from '@mui/material';
import Swal from 'sweetalert2';

const Swapprogress = (props: any) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isTeach, setIsTeach] = useState(false);
    const [isTeached, setIsTeached] = useState(false);
    const { id } = props
    let dataDetail = useAppSelector((state) => state.swapDetailProgress)
    let userMemberData = useAppSelector((state) => state.homeSlice.user)
    const data = dataDetail.data
    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(swapDetailAPI(parseInt(id)))
    }, [dispatch])
    if (dataDetail.isLoading) {
        return (
            <div className="loading">
                <ReactLoading type="spinningBubbles" color="#007bff" height={100} width={100} />
            </div>
        );
    }
    if (isTeach || isTeached) {
        let data = {
        }
        if (isTeach) {
            data["isTeach"] = isTeach
        }
        if (isTeached) {
            data["isTeached"] = isTeached
        }
        updateSwapStatus(dataDetail.data[0].id, data).then(() => {
            Swal.fire({
                title: "Success",
                text: "Success Update Status Swap",
                timer: 2000,
                icon: 'success'
            }).then((val) => {
                if (val.isDismissed || val.isConfirmed) {
                    window.location.reload()
                }
            })
        }).catch((e) => {
            Swal.fire({
                title: "Error",
                text: "Error Update Status Swap",
                timer: 2000,
                icon: 'error'
            }).then((val) => {
                if (val.isDismissed || val.isConfirmed) {
                    window.location.reload()
                }
            })
        })
    }
    let firstDisabledIfNotSame = false
    let secondDisabledIfNotSame = false
    if (data[0].member_id !== userMemberData.id || data[0].status === "Pending") {
        firstDisabledIfNotSame = true
    }
    if (data[1].member_id !== userMemberData.id || data[0].status === "Pending") {
        secondDisabledIfNotSame = true
    }
    const finishSwap = async (id) => {
        finishSwapRequest(id).then((result) => {
            if (result.data) {
                Swal.fire({
                    title: "Success",
                    text: "Success Finish Swap",
                    timer: 2000,
                    icon: 'success'
                }).then((val) => {
                    if (val.isDismissed || val.isConfirmed) {
                        navigate("/home")
                    }
                })
            }
        }).catch((e) => {
            Swal.fire({
                title: "Error",
                text: "Error finish swap",
                timer: 2000
            })
            return
        })

    }
    const approveSwap = async (id) => {
        approveSwapRequest(id).then((result) => {
            if (result.data) {
                Swal.fire({
                    title: "Success",
                    text: "Success Approve Swap",
                    timer: 2000,
                    icon: 'success'
                }).then((val) => {
                    if (val.isDismissed || val.isConfirmed) {
                        navigate("/home")
                    }
                })
            }
        }).catch((e) => {
            Swal.fire({
                title: "Error",
                text: "Error Approve Swap",
                timer: 2000
            })
            return
        })
    }

    return (
        <>
            <div className='mt-20 bg-gray-200 min-h-[1500px]'>
                <div>
                    <Back
                        firstElement={
                            <div>
                                <a href='/home'>
                                    <div className='flex items-center text-2xl pt-10 pl-10'>
                                        <BsChevronLeft />
                                        <p> Back</p>
                                    </div>
                                </a>
                            </div>
                        } />
                </div>
                <>
                    <div className='mx-[15%] w-[70%] h-[1300px] border-2 border-slate-400 shadow-2xl bg-white'>
                        <div className='mx-[10%] mt-10'>
                            <p className='text-center pt-10 text-black bg text-2xl font-bold'>
                                Swap Skill in Progress
                            </p>
                            <div className='pt-20'>
                                <div className='flex flex-col w-[50%] justify-center items-center border-r-4'>
                                    <img src="/avatar.png" alt="profile" className='w-[200px]' />
                                    <div className='flex flex-col justify-center items-center'>
                                        <p className='text-xl font-bold'>{data[0].name}</p>
                                    </div>
                                    <div className='flex flex-col justify-center w-[50%] text-justify items-center pt-[100px]'>
                                        <h1 className='flex items-start text-xl font-bold pr-[70%]'>Description teach</h1>
                                        <Typography>Disini dijelaskan bagaimana memiliki kemandirian (independent thinking). Rahasia kenapa memiliki keyakinan tinggi bisa membuat seorang investor bersabar saat harga turun.
                                            Dijelaskan alasan LKH mengapa tidak melakukan diversifikasi saham dan bagaimana sikap LKH mengatur keuangannya saat melihat peluang saham mercy dijual harga bajaj.
                                            Dijelaskan kenapa strategi diversifikasi akan sulit menjadi super rich. Dijelaskan apa itu analisa teknikal dan analisa fundamental dan mengapa LKH bilang analisa teknikal
                                            tidak bisa
                                            kaya. Apa itu bedanya trading dan investasi. Simulasi trader aktif dengan pialang mana yang lebih kaya</Typography>
                                    </div>
                                    <div className='flex justify-center items-center pt-5'>
                                        <div className='mr-[100px]'>
                                            {data[0].teachStatus.isTeach ?
                                                <>
                                                    <input type="checkbox" name="isTeach" checked value="true" disabled={firstDisabledIfNotSame} />
                                                </>
                                                :
                                                <>
                                                    <input type="checkbox" name="isTeach" disabled={firstDisabledIfNotSame} onChange={(e) => setIsTeach(e.target.checked)} />
                                                </>
                                            }
                                            <label className='pl-2'>
                                                Already Teach
                                            </label>
                                        </div>
                                        <div>
                                            {data[0].teachStatus.isTeached ?
                                                <>
                                                    <input type="checkbox" name="isTeached" checked disabled={firstDisabledIfNotSame} />
                                                </>
                                                :
                                                <>
                                                    <input type="checkbox" name="isTeached" disabled={firstDisabledIfNotSame} onChange={(e) => setIsTeached(e.target.checked)} />
                                                </>
                                            }
                                            <label className='pl-5'>
                                                Already got Teach
                                            </label>
                                        </div>
                                    </div>
                                    <div className='pt-14 pr-[60%]'>
                                        <p className='text-xl font-bold'>Evidence Teach</p>
                                        <input type="file" className='pt-2' onChange={handleFileChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mx-[10%] mt-10 absolute left-[45%] top-[32%]'>
                            <div className='pt-20'>
                                <div className='flex flex-col w-[100%] justify-center items-center'>
                                    <img src="/avatar.png" alt="profile" className='w-[200px]' />
                                    <div className='flex flex-col justify-center items-center'>
                                        <p className='text-xl font-bold'>{data[1].name}</p>
                                    </div>
                                    <div className='flex flex-col justify-center w-[50%] text-justify items-center pt-[100px]'>
                                        <h1 className='flex items-start text-xl font-bold pr-[70%]'>Description teach</h1>
                                        <p className='pt-3 pr-20'>Disini dijelaskan bagaimana memiliki kemandirian (independent thinking). Rahasia kenapa memiliki keyakinan tinggi bisa membuat seorang investor bersabar saat harga turun.
                                            Dijelaskan alasan LKH mengapa tidak melakukan diversifikasi saham dan bagaimana sikap LKH mengatur keuangannya saat melihat
                                            peluang saham mercy dijual harga bajaj. Dijelaskan kenapa strategi diversifikasi akan sulit menjadi super rich.
                                            ijelaskan apa itu analisa teknikal dan analisa fundamental dan mengapa LKH bilang analisa teknikal tidak bisa kaya.
                                            Apa itu bedanya trading dan investasi. Simulasi trader aktif dengan pialang mana yang lebih kaya</p>
                                    </div>
                                    <div className='flex justify-center items-center pt-5'>
                                        <div className='mr-[100px]'>
                                            {data[1].teachStatus.isTeach ?
                                                <>
                                                    <input type="checkbox" name="isTeach" checked value="true" disabled={secondDisabledIfNotSame} />
                                                </>
                                                :
                                                <>
                                                    <input type="checkbox" name="isTeach" value="true" disabled={secondDisabledIfNotSame} onChange={(e) => setIsTeach(e.target.checked)} />
                                                </>
                                            }
                                            <label className='pl-2'>
                                                Already Teach
                                            </label>
                                        </div>
                                        <div>
                                            {data[1].teachStatus.isTeached ?
                                                <>
                                                    <input type="checkbox" name="courseOption" checked value="true" disabled={secondDisabledIfNotSame} />
                                                </>
                                                :
                                                <>
                                                    <input type="checkbox"
                                                        name="courseOption"
                                                        value="true" disabled={secondDisabledIfNotSame} onChange={(e) => setIsTeached(e.target.checked)} />
                                                </>
                                            }
                                            <label className='pl-5'>
                                                Already got Teach
                                            </label>
                                        </div>
                                    </div>
                                    <div className='pt-14 pr-[60%]'>
                                        <p className='text-xl font-bold'>Evidence Teach</p>
                                        <input type="file" className='pt-2' onChange={handleFileChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 justify-center items-center'>
                            {
                                data[1].status === "Finished" ?
                                    <>
                                    </>
                                    :
                                    data[1].status === "Pending" ?
                                        <>
                                            <button className='mt-20 mb-20 px-24 py-2 bg-[#2c88d9] text-white rounded-sm' onClick={() => approveSwap(data[0].id)}>

                                                <p>Approve</p>
                                            </button>
                                        </>
                                        :
                                        <>
                                            <button className='mt-20 mb-20 px-24 py-2 bg-[#2c88d9] text-white rounded-sm' onClick={() => finishSwap(data[0].id)}>

                                                <p>Finish Swap</p>
                                            </button>
                                        </>
                            }
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}

export default Swapprogress