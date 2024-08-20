import { BsChevronLeft } from 'react-icons/bs';
import Back from '../../components/button/Back';
import CardData from '../../components/card/CardSwapRecomen'
import GlobalLayout from '../../layouts/GlobalLayout';
import React from 'react';




const SwapRecomendation = () => {
    return (
        <>
            <GlobalLayout>
                <div className='mt-20'>
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
                    <div>
                        <CardData />
                    </div>
                </div>
            </GlobalLayout>
        </>
    )
}

export default SwapRecomendation