import GlobalLayout from '../../layouts/GlobalLayout'
import CardTeksHome from '../../components/card/CardTeksHome'
import CardRecomenHome from '../../components/card/CardRecomenHome'
import CardImageHome from '../../components/card/CardImageHome'
import CardImageHome2 from '../../components/card/CardImageHome2'
import React from 'react'


const Home = () => {
    return (
        <div className='bg-slate-200'>
            <GlobalLayout   >
                <div className='max-w-[1500px] mx-10'>
                    <CardRecomenHome />
                    <CardImageHome />
                    <CardImageHome2 />
                    <CardTeksHome />
                </div>
            </GlobalLayout>
        </div>
    )
}

export default Home