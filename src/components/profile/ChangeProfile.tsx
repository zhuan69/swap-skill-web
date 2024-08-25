import { Link } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from 'react';
import { updateMemberData } from '../../services/Member';
import Swal from 'sweetalert2';

const ChangeProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(undefined);
    const [address, setAddress] = useState(undefined);
    const [gender, setGender] = useState(undefined);
    const updateProfileMember = async (e) => {
        let updatedData = {}
        if (name) {
            updatedData["name"] = name
        }
        if (gender) {
            updatedData["gender"] = gender
        }
        if (address) {
            updatedData["address"] = address
        }
        if (email) {
            updatedData["email"] = email
        }
        updateMemberData(updatedData).then((val) => {
            Swal.fire({
                title: "Update Success",
                text: "Update Profile Success",
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
                    Name
                </label>
                <input
                    type="text"
                    placeholder="Name"
                    className="border-2 p-[15px] rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2">
                <label htmlFor="text" className="font-medium">
                    Email
                </label>
                <input
                    type="text"
                    placeholder="Email"
                    className="border-2 p-3 rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                />
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
            {/* gender */}
            <div className="flex flex-col gap-2">
                <label htmlFor="text" className="font-medium">
                    Gender
                </label>
                <input
                    type="text"
                    placeholder="Gender"
                    className="border-2 p-[15px] rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                    onChange={(e) => setGender(e.target.value)}
                />
            </div>
            <div className='flex justify-center'>
                <button
                    type="submit"
                    className="w-[100%] text-[white] font-medium p-3 rounded-md border-2 bg-[#2c88d9] mt-5 hover:bg-[#30587b]"
                    onClick={updateProfileMember}
                >
                    Change Profile
                </button>
            </div>
        </>
    )
}

export default ChangeProfile