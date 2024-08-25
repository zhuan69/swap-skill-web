import React, { useEffect, useState } from 'react';
import GlobalLayout from '../../layouts/GlobalLayout';
import Swapprogress from '../../components/card/Swapprogress';
import { useParams } from 'react-router-dom';

const Progresswap = () => {
    const { id } = useParams()

    return (
        <GlobalLayout>
            <Swapprogress id={id} />
        </GlobalLayout>
    );
};

export default Progresswap;
