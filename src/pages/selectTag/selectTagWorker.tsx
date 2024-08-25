import React from 'react';
import topics from '../../components/datadummy/topicsstudent';
import topicsSecond from '../../components/datadummy/topicsstudent2';
import useTopicSelection from '../../hooks/useTopicSelection';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RegisterParams, userRegister } from '../../services/Register';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerUser } from '../signup/SignUpSlice';
import Swal from 'sweetalert2';


const SelectTag = () => {
    const { selectedTopics, selectedTopicsSecond, toggleTopic } = useTopicSelection();
    const { state } = useLocation()
    let dataRegister: RegisterParams = {}
    if (state) {
        const { name, email, address, password, status, birthYear, phoneNumber, gender, selectedOption } = state
        dataRegister = {
            address: address,
            name: name,
            email: email,
            password: password,
            phone_number: phoneNumber,
            status: selectedOption.value,
            location: "",
            gender: gender,
            birthYear: birthYear
        }
    }
    const navigate = useNavigate()

    const register = useAppSelector((stateApp) => stateApp.register)
    const dispatch = useAppDispatch()
    dataRegister.interests = [...selectedTopics, ...selectedTopicsSecond]
    const registerEvent = async (e: any) => {
        e.preventDefault()
        const res = await dispatch(registerUser(dataRegister))
        if (!res.payload) {
            Swal.fire({
                title: "Error Register User",
                text: register.error,
                icon: "error"
            }).then((val) => {
                if (val.isDismissed || val.isConfirmed) {
                    window.location.reload()
                }
            })
        }
        if (res.payload) {
            Swal.fire({
                title: "Success Register User",
                text: "Success Register User",
                icon: "success"
            }).then((val) => {
                if (val.isDismissed || val.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }
    return (
        <>
            <div style={{ backgroundImage: "url('/sharing2.jpg')", filter: 'brightness(0.5)' }} className="absolute inset-0 w-auto "></div>
            <div className=" mx-auto relative">
                {/* form */}
                <div className="h-[550px] mt-20 w-[50%] mx-auto rounded-2xl bg-white flex flex-col items-center justify-center gap-10 text-[#5A5A5D]">
                    <h2 className="text-3xl font-medium text-black">
                        Pick topics you're interested in
                    </h2>
                    <form className="flex flex-col text-center w-[90%]">
                        <div className="grid grid-cols-5 gap-4">
                            {topics.map((topic, index) => (
                                <button
                                    key={index}
                                    type='button'
                                    className={`p-2 rounded-md border-2 ${selectedTopics.includes(topic) ? 'bg-gray-300' : 'hover:bg-neutral-300'}`}
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
                            className="bg-[#007DFA] -mt-5 flex items-center justify-center mx-14 w-[70%] text-white 
            text-center font-medium p-3 rounded-md hover:bg-[#3390ed]"
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
