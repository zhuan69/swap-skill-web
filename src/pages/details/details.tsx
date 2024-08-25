import React from 'react'
import GlobalLayout from '../../layouts/GlobalLayout'
import CardDetails from '../../components/card/CardDetails'

const Details = () => {
    return (
        <>
            <GlobalLayout>
                <div className='mt-20'>
                    <CardDetails />
                </div>
            </GlobalLayout>
        </>
    )
}

export default Details