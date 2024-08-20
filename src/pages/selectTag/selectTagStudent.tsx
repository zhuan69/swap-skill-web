import React from 'react';
import topics from '../../components/datadummy/topicsstudent';
import topicsSecond from '../../components/datadummy/topicsstudent2';
import useTopicSelection from '../../hooks/useTopicSelection';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerUser } from '../signup/SignUpSlice';
import Swal from 'sweetalert2';

const SelectTag = () => {
    const { selectedTopics, selectedTopicsSecond, toggleTopic } = useTopicSelection();
    const { state } = useLocation()
    const { name, email, address, password, status, birthYear, phoneNumber, gender, selectedOption } = state
    const register = useAppSelector((state) => state.register)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const registerEvent = async (e: any) => {
        e.preventDefault()
        const res = await dispatch(registerUser({
            address: address,
            name: name,
            email: email,
            password: password,
            phone_number: phoneNumber,
            status: selectedOption.value,
            interests: [...selectedTopics, ...selectedTopicsSecond],
            location: "",
            gender: gender,
            birthYear: birthYear
        }))
        if (res.payload) {
            navigate('/login')
        }
        Swal.fire({
            title: "Error Register User",
            text: register.error,
            icon: "error"
        })
    }


    return (
        <>
            <div style={{ backgroundImage: "url('/sharing2.jpg')", filter: 'brightness(0.5)' }} className="absolute inset-0 w-auto "></div>
            <div className=" mx-auto relative">
                {/* form */}
                <div className="h-[550px] mt-20 w-[50%] mx-auto rounded-2xl bg-white flex flex-col items-center justify-center gap-10 text-[#5A5A5D]">
                    <h2 className="text-3xl font-medium text-black">
                        Pick 5 topics you're interested in
                    </h2>
                    <form className="flex flex-col text-center w-[90%]">
                        <div className="grid grid-cols-5 gap-4">
                            {topics.map((topic, index) => (
                                <button
                                    key={index}
                                    type='button'
                                    className={`p-2 rounded-md border-2 ${selectedTopics.includes(topic) ? 'bg-gray-300' : ' hover:bg-neutral-300'}`}
                                    onClick={() => toggleTopic(topic, 1)}
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                    </form>
                    <form className="flex flex-col text-center w-[90%]">
                        <div className="grid grid-cols-5 gap-4">
                            {topicsSecond.map((topic, index) => (
                                <button
                                    key={index}
                                    type='button'
                                    className={`p-2 rounded-md border-2 ${selectedTopicsSecond.includes(topic) ? 'bg-gray-300' : 'hover:bg-neutral-300'}`}
                                    onClick={() => toggleTopic(topic, 2)}
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                    </form>
                    <div className="flex flex-col">
                        <button
                            type="button"
                            className="bg-[#007DFA] w-[300px] text-white text-center font-medium p-3 rounded-md hover:bg-[#3390ed]"
                            onClick={registerEvent}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectTag;
