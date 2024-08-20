import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useProfile from '../../hooks/useProfile';
import React from 'react';


const ChangePassword = () => {
    const { isVisible, toggleVisibility } = useProfile();

    return (
        <>
            <div className="flex flex-col gap-2">
                <label htmlFor="text" className="font-medium">
                    Current Password
                </label>
                <div className="relative">
                    <input
                        type={isVisible ? "text" : "password"}
                        placeholder="Current Password"
                        className="border-2 p-3 rounded-md w-full hover:border-black/[.5] focus:border-black/[.5] focus:outline-none"
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
            <div className="flex flex-col gap-2">
                <label htmlFor="text" className="font-medium">
                    New Password
                </label>
                <div className="relative">
                    <input
                        type={isVisible ? "text" : "password"}
                        placeholder="New Password"
                        className="border-2 p-3 rounded-md w-full hover:border-black/[.5] focus:border-black/[.5] focus:outline-none"
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
            <div className="flex flex-col gap-2">
                <label htmlFor="text" className="font-medium">
                    Reenter Password
                </label>
                <div className="relative">
                    <input
                        type={isVisible ? "text" : "password"}
                        placeholder="Reenter Password"
                        className="border-2 p-3 rounded-md w-full hover:border-black/[.5] focus:border-black/[.5] focus:outline-none"
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
            <div className='flex justify-center'>
                <Link to={"/home"}>
                    <button
                        type="submit"
                        className="w-[100%] text-[white] font-medium p-3 rounded-md border-2 bg-[#2c88d9] mt-5 hover:bg-[#30587b]"
                    >
                        Change Password
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ChangePassword