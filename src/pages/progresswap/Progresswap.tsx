import React, { useState } from 'react';
import GlobalLayout from '../../layouts/GlobalLayout';
import Back from '../../components/button/Back';
import { BsChevronLeft } from 'react-icons/bs';
import Swapprogress from '../../components/card/Swapprogress';

const Progresswap = () => {
    return (
        <GlobalLayout>
            <Swapprogress />
        </GlobalLayout>
    );
};

export default Progresswap;
