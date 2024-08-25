import GlobalLayout from '../../layouts/GlobalLayout'
import CardTeksHome from '../../components/card/CardTeksHome'
import CardRecomenHome from '../../components/card/CardRecomenHome'
import CardImageHome from '../../components/card/CardImageHome'
import CardImageHome2 from '../../components/card/CardImageHome2'
import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks'



const Home = () => {
    const token = localStorage.getItem("token")
    return (
        <div className='bg-slate-200'>
            <GlobalLayout>
                <div className='max-w-[1500px] mx-10'>
                    {token !== null &&
                        <CardRecomenHome />
                    }
                    <CardImageHome />
                    <CardImageHome2 />
                </div>
            </GlobalLayout>
        </div>
    )
}

export default Home