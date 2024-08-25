import Back from '../../components/button/Back'
import { BsChevronLeft } from 'react-icons/bs'
import Select from 'react-select'
import useSwapForm from '../../hooks/useSwapForm'
import bcaIcon from '../../components/image/bca.png';
import GlobalLayout from '../../layouts/GlobalLayout'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const DetailCourse = () => {
    
    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        navigate("/payment"); 
    };


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
    
                <div className='flex items-center'>
                    <div className='w-1/4 pr-4 flex justify-center'>
                        <img src='https://via.placeholder.com/150' alt='Instructor' className='rounded-full w-full h-auto object-cover' />
                    </div>
                    <div className='w-3/4'>
                        <h2 className='text-3xl font-bold text-left'>Riqki Kamal Amrela</h2>
                        <p className='text-gray-600 text-left'>Age: 30</p>
                        <p className='text-gray-600 text-left'>Teacher in Rakamin Academy</p>
                        <p className='text-gray-600 text-left'>Experience: 4 years teaching English language</p>
                    </div>
                </div>

                    <div className='mt-6 flex'>
                        <div className='w-4/4'>
                        
                            <div className='flex justify-between'>
                                <h3 className='text-lg font-semibold'>About the Course</h3>
                                <p className='bg-yellow-100 p-1 font-semibold rounded-s text-center'>170 students</p>
                            </div>
                            
                            <div className='mt-6'>
                                <p className='text-lg font-bold'>Belajar Bahasa Inggris Pemula</p>
                            </div>  

                            <p className='mt-2'>
                                Dalam lingkup akademik, profesional, dan bahkan pergaulan, kemampuan bahasa Inggris selalu menjadi nilai lebih. Oleh karena itu, mempelajari bahasa Inggris menjadi hal penting untuk kamu lakukan. Dengan dipandu oleh instruktur Hikmah Nur Insani, Master of Education dari Universitas Pendidikan Indonesia, dan Yana Maliyana, seorang praktisi bahasa Inggris dan corporate communication di Lintasarta, kamu akan dibantu untuk mengembangkan kemampuan berbahasa Inggris dengan lebih percaya diri.                            Kursus ini ditujukan untuk kamu yang ingin memiliki atau meningkatkan kemampuan berbahasa Inggris untuk kebutuhan pribadi, akademik, atau profesional. Dalam kursus ini, kamu akan mempelajari keterampilan dasar bahasa Inggris. Diantaranya konsep dasar tata bahasa, pengucapan yang benar, serta strategi komunikasi efektif dalam bahasa Inggris. Kamu akan dapat memperluas kosakata, memahami struktur kalimat, dan menguasai berbagai macam bentuk komunikasi baik lisan maupun tulisan. Tidak ketinggalan, kamu juga akan mempelajari berbagai grammar mulai dari present, past, hingga future tense, agar bahasa Inggrismu tidak hanya lancar, tapi juga benar. Setelah menyelesaikan kursus ini, kamu akan dapat memahami teks dan audio, berkomunikasi secara efektif, dan mengungkapkan diri dengan jelas dan percaya diri menggunakan bahasa Inggris. Keterampilan berbahasa Inggris ini akan sangat kamu butuhkan untuk menghadapi tantangan dunia global saat ini, serta membuka peluang baru dalam pendidikan, karir, maupun hubungan antar budaya dan pergaulan sehari-hari.
                            </p>
                            <p className='mt-2 font-semibold'>Selamat belajar!</p>
                        </div>
                    </div>


                    <div className='mt-6'>
                        <h4 className='text-lg font-semibold'>Pick Your Schedule</h4>
                        <div className='mt-2 flex space-x-4'>
                            <label className='flex items-center'>
                                <input type='checkbox' className='mr-2' />
                                Mon (20:00 - 21:30)
                            </label>
                            <label className='flex items-center'>
                                <input type='checkbox' className='mr-2' />
                                Sun (11:00 - 12:30)
                            </label>
                            <label className='flex items-center'>
                                <input type='checkbox' className='mr-2' />
                                Wed (19:30 - 21:00)
                            </label>
                        </div>
                    </div>

                    <div className='mt-6 flex justify-center'>
                        <button onClick={handleButtonClick} className='bg-[#007dfa] text-white py-2 px-6 rounded-lg font-semibold'>Enroll Course ( Rp 150.000 / session )</button>
                    </div>
                </div>


            </div>
        </GlobalLayout>
    </div>
    
    )
}

export default DetailCourse