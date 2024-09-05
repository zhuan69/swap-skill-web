import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Typography } from "@mui/material";
import { swapRequest } from "../../services/Member";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { swapRecommendation } from "../../pages/swaprecomendation/SwapSlice";
import ReactLoading from 'react-loading';

const CardSwapRecomen = () => {
    const navigate = useNavigate()
    const swapRecommendationState = useAppSelector((state) => state.swapRecommendation)
    console.log(swapRecommendationState)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(swapRecommendation())
    }, [dispatch])
    if (swapRecommendationState.isLoading) {
        return (
            <div className="loading">
                <ReactLoading type="spinningBubbles" color="#007bff" height={100} width={100} />
            </div>
        );
    }
    let data = []
    if (swapRecommendationState.responseData) {
        data = swapRecommendationState.responseData.data || []
    }
    const requestSwap = async (targetId: number) => {
        try {
            const result = await swapRequest(targetId)
            if (result.data) {
                Swal.fire({
                    title: "Request Swap",
                    text: "Swap is Requested waiting approval",
                    timer: 2000
                })
                navigate("/home")
                return
            }
        } catch (e) {
            Swal.fire({
                title: "Request Swap",
                text: "Error request swap",
                timer: 2000,
                icon: "error"
            }).then((val) => {
                if (val.isDismissed || val.isConfirmed) {
                    window.location.reload()
                }
            })
        }
    }
    return (
        <>
            <div className="flex flex-wrap justify-center">
                {data.map((card, index) => (
                    <div key={index} className="flex flex-col items-center my-10 mx-4">
                        <div className='bg-white shadow-xl rounded-xl border-2 flex flex-col items-center h-[400px]'>
                            <img
                                className="w-[150px] h-[150px] mb-3 mt-7 rounded-full shadow-lg"
                                src={'/avatar.png'}
                                alt={`Card ${card.id} `}
                            />
                            <h1 className='text-xl font-bold'>
                                {card.name}
                            </h1>
                            <h5 className="mb-1 text-[15px] font-medium text-gray-900">
                                {card.email}
                            </h5>
                            <span className="text-sm w-[60%] text-center text-gray-500 dark:text-gray-400">
                                <Typography component="legend">{card.skills === null ? card.interests.join(" ") : card.skills.join(" ")}</Typography>
                            </span>
                            <span className='mt-3 flex items-center '>
                                <Typography component="legend">Matched Percentage %{card.score}</Typography>
                            </span>
                            <button className='bg-[#2c88d9] hover:bg-[#2c82d1] text-white my-2 mx-2 py-2 px-20 rounded-md' onClick={() => requestSwap(card.id)}>Connect Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardSwapRecomen