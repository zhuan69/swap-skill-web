import React, { useState } from 'react'
import Back from '../button/Back'
import { BsChevronLeft } from 'react-icons/bs'

const Swapprogress = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

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
                                        <p className='text-xl font-bold'>Yudhajaya Yoga vacara</p>
                                        <p className='text-slate-400'>Economy, Biology, Math, Gaming, Design Grapic</p>
                                    </div>
                                    <div className='flex flex-col justify-center w-[130%] text-justify items-center pt-[100px]'>
                                        <h1 className='flex items-start text-xl font-bold pr-[70%]'>Description teach</h1>
                                        <p className='pt-3 pr-20'>Disini dijelaskan bagaimana memiliki kemandirian (independent thinking). Rahasia kenapa memiliki keyakinan tinggi bisa membuat seorang investor bersabar saat harga turun.
                                            Dijelaskan alasan LKH mengapa tidak melakukan diversifikasi saham dan bagaimana sikap LKH mengatur keuangannya saat melihat peluang saham mercy dijual harga bajaj. Dijelaskan kenapa strategi diversifikasi akan sulit menjadi super rich. Dijelaskan apa itu analisa teknikal dan analisa fundamental dan mengapa LKH bilang analisa teknikal tidak bisa kaya. Apa itu bedanya trading dan investasi. Simulasi trader aktif dengan pialang mana yang lebih kaya</p>
                                    </div>
                                    <div className='flex justify-center items-center pt-5'>
                                        <div className='mr-[100px]'>
                                            <input type="checkbox" name="courseOption" />
                                            <label className='pl-2'>
                                                Already Teach
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="courseOption" />
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
                                <div className='flex flex-col w-[82%] justify-center items-center'>
                                    <img src="/avatar.png" alt="profile" className='w-[200px]' />
                                    <div className='flex flex-col justify-center items-center'>
                                        <p className='text-xl font-bold'>Zhuan akbar</p>
                                        <p className='text-slate-400'>Economy, Biology, Math, Gaming, Design Grapic</p>
                                    </div>
                                    <div className='flex flex-col justify-center w-[130%] text-justify items-center pt-[100px]'>
                                        <h1 className='flex items-start text-xl font-bold pr-[70%]'>Description teach</h1>
                                        <p className='pt-3 pr-20'>Disini dijelaskan bagaimana memiliki kemandirian (independent thinking). Rahasia kenapa memiliki keyakinan tinggi bisa membuat seorang investor bersabar saat harga turun.
                                            Dijelaskan alasan LKH mengapa tidak melakukan diversifikasi saham dan bagaimana sikap LKH mengatur keuangannya saat melihat peluang saham mercy dijual harga bajaj. Dijelaskan kenapa strategi diversifikasi akan sulit menjadi super rich. Dijelaskan apa itu analisa teknikal dan analisa fundamental dan mengapa LKH bilang analisa teknikal tidak bisa kaya. Apa itu bedanya trading dan investasi. Simulasi trader aktif dengan pialang mana yang lebih kaya</p>
                                    </div>
                                    <div className='flex justify-center items-center pt-5'>
                                        <div className='mr-[100px]'>
                                            <input type="checkbox" name="courseOption" />
                                            <label className='pl-2'>
                                                Already Teach
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="courseOption" />
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
                            <p className='relative top-14'>1/2 approve finish this swap</p>
                            <button className='mt-20 mb-20 px-24 py-2 bg-[#2c88d9] text-white rounded-sm'>
                                <p>Finish Swap</p>
                            </button>
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}

export default Swapprogress