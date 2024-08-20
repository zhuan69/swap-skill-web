import { BsChevronLeft } from "react-icons/bs";
import React from 'react'

type props = {
    firstElement: React.ReactNode;
}

const ButtonBack = ({ firstElement }: props) => {
    return (
        <>
            {firstElement}
        </>
    )
}

export default ButtonBack