import React, { useState } from 'react'
import swapform from '../components/datadummy/swapformfields';
import swapformsekolah from '../components/datadummy/swapformfieldssekolah';
import swapformsekolah2 from '../components/datadummy/swapformfieldssekolah2';
import swapformsekolah3 from '../components/datadummy/swapformfieldssekolah3';
import swapformsekolah4 from '../components/datadummy/swapformfieldssekolah4';
import swapfromfieldperiode from '../components/datadummy/swapformfieldperiode';
import swapformfieldperiode from '../components/datadummy/swapformfieldperiode';


const useSwapForm = () => {
    const [selectedOption, setSelectedOption] = useState(swapform[0]);
    const [selectedOption2, setSelectedOption2] = useState(swapformsekolah[0]);
    const [selectedOption3, setSelectedOption3] = useState(swapformsekolah2[0]);
    const [selectedOption4, setSelectedOption4] = useState(swapformsekolah3[0]);
    const [selectedOption5, setSelectedOption5] = useState(swapformsekolah4[0]);
    const [selectedOption6, setSelectedOption6] = useState(swapformfieldperiode[0]);

    const handleChange = (selected: any) => {
        setSelectedOption(selected);
    };

    const handleChange2 = (selected: any) => {
        setSelectedOption2(selected);
    };

    const handleChange3 = (selected: any) => {
        setSelectedOption3(selected);
    };

    const handleChange4 = (selected: any) => {
        setSelectedOption4(selected);
    };

    const handleChange5 = (selected: any) => {
        setSelectedOption5(selected);
    };

    const handleChange6 = (selected: any) => {
        setSelectedOption6(selected);
    };

    return {
        swapform, selectedOption, handleChange, selectedOption2, handleChange2,
        selectedOption3, handleChange3, selectedOption4, handleChange4,
        selectedOption5, handleChange5, swapformsekolah, swapformsekolah2,
        swapformsekolah3, swapformsekolah4, handleChange6, selectedOption6, swapformfieldperiode
    };
};

export default useSwapForm