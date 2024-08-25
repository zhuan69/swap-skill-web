import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useProfile from '../../hooks/useProfile';
import React, { useState } from 'react';
import { updateMemberData } from '../../services/Member';
import Swal from 'sweetalert2';


const ChangePassword = () => {
    const { isVisible, toggleVisibility } = useProfile();
    const [oldPassword, setOldPassword] = useState(undefined);
    const [newPassword, setNewPassword] = useState(undefined);
    const updateProfileMember = async (e) => {
        let updatedData = {
            oldPassword: oldPassword,
            password: newPassword
        }
        if (newPassword && !oldPassword) {
            Swal.fire({
                title: "Error Field",
                text: "Old Password is needed",
                timer: 1000
            })
            return
        }
        console.log(updatedData)
        updateMemberData(updatedData).then((val) => {
            Swal.fire({
                title: "Update Success",
                text: "Update Password Success",
                timer: 1000
            }).then(() => {
                window.location.reload()
            })
        }).catch((err) => {
            Swal.fire({
                title: "Update Error",
                text: err.message,
                timer: 1000
            }).then(() => {
                window.location.reload()
            })
        })
    }
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
                        onChange={(e) => setOldPassword(e.target.value)}
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
                        onChange={(e) => setNewPassword(e.target.value)}
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
                <button
                    type="submit"
                    className="w-[100%] text-[white] font-medium p-3 rounded-md border-2 bg-[#2c88d9] mt-5 hover:bg-[#30587b]"
                    onClick={updateProfileMember}
                >
                    Change Password
                </button>
            </div>
        </>
    )
}

export default ChangePassword