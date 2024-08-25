import Select from "react-select"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, Navigate } from "react-router-dom"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import options from "../../components/datadummy/options"
import useSignUp from "../../hooks/useSignUp"
import React from "react"
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerUser } from "./SignUpSlice"


const Register = () => {
    const {
        isVisible,
        selectedOption,
        shouldRedirect,
        toggleVisibility,
        handleChange,
        handleRegistration,
        address,
        birthYear,
        email,
        gender,
        location,
        name,
        password,
        phoneNumber,
        setAddress,
        setBirthYear,
        setEmail,
        setGender,
        setLocation,
        setName,
        setPassword,
        setPhoneNumber,
        setStatus,
        status,
    } = useSignUp()
    return (
        <>
            <div style={{ backgroundColor: "white", filter: 'brightness(0.5)' }} className="absolute inset-0 w-auto min-h-[1300px]"></div>
            <div className="max-w-auto mx-auto relative flex flex-col">
                {/* form */}
                <div className="h-auto w-[70%] mx-auto flex flex-col items-center justify-center gap-10 text-[#5A5A5D]">
                    <div className="flex items-center justify-center mt-[100px] h-[1100px] shadow-2xl rounded-xl w-[70%] bg-white">
                        <form className="flex flex-col gap-3 w-[80%]">
                            <h2 className="text-3xl font-medium text-black text-center">
                                Register
                            </h2>
                            {/* email */}
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label htmlFor="text" className="font-medium">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="border-2 p-[15px] rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                {/* DatePicker */}
                                <div className="flex flex-col">
                                    <label htmlFor="text" className="font-medium">
                                        Birth Year
                                    </label>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            className="border-2 p-[15px] rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none" />
                                    </LocalizationProvider>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="text" className="font-medium">
                                    Email
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="border-2 p-3 rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="text" className="font-medium">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="border-2 p-3 rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3">
                                        <div onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <AiOutlineEyeInvisible size={20} />
                                            ) : (
                                                <AiOutlineEye size={20} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Phone Number */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="text" className="font-medium">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <input
                                        type="teks"
                                        placeholder="Phone Number"
                                        className="border-2 p-3 rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            {/* Address */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="text" className="font-medium">
                                    Address
                                </label>
                                <textarea
                                    className="resize rounded-md border-2 p-3 w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                    placeholder="Address..."
                                    onChange={(e) => setAddress(e.target.value)}>
                                </textarea>
                            </div>
                            {/* job / school */}
                            <div>
                                <div>
                                    <label htmlFor="selectOption">Are You </label>
                                    <Select options={options} value={selectedOption} onChange={handleChange} />
                                </div>

                                <div className="mt-5">
                                    {selectedOption.value === "student" && (
                                        <form>
                                            <label htmlFor="studentForm">School</label>
                                            <input
                                                type="text"
                                                className="border-2 p-3 rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                                required
                                            />
                                        </form>
                                    )}

                                    {selectedOption.value === "worker" && (
                                        <form>
                                            <label htmlFor="teacherForm">Jobs</label>
                                            <input
                                                type="text"
                                                className="border-2 p-3 rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                                                required
                                            />
                                        </form>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <input onChange={(e) => setGender(e.target.value)} type="radio" name="topping" value="Male" id="male" />
                                <label htmlFor="male" className="">
                                    Male
                                </label>
                                <input
                                    onChange={(e) => setGender(e.target.value)}
                                    type="radio"
                                    className="ml-10"
                                    name="topping"
                                    value="Female"
                                    id="female"
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                            {/* end password */}
                            <div className="flex flex-col items-center justify-center">
                                <button
                                    type="submit"
                                    className="bg-[#007DFA] w-[300px] text-white
                                        text-center font-medium p-3 rounded-md hover:bg-[#3390ed]"
                                    onClick={handleRegistration}>
                                    Register
                                </button>
                                <div className="mt-10 fle">
                                    <p>
                                        Already have my account ?{" "}
                                        <Link to="/login" className=" text-blue-600">
                                            Log in
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
