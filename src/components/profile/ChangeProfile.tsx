import { Link } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react';

const ChangeProfile = () => {
    return (
        <>
            {/* name */}
            <div className="flex flex-col gap-2">
                <label htmlFor="text" className="font-medium">
                    Name
                </label>
                <input
                    type="text"
                    placeholder="Name"
                    className="border-2 p-[15px] rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                    required
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
                    required
                />
            </div>
            {/* Birth Year */}
            <div className="flex flex-col gap-2">
                <label htmlFor="text" className="font-medium">
                    Birth Year
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="border-2 p-3 rounded-md w-full" />
                </LocalizationProvider>
            </div>
            {/* Address */}
            <div className="flex flex-col gap-2">
                <label htmlFor="text" className="font-medium">
                    Address
                </label>
                <textarea
                    className="resize rounded-md border-2 p-3 w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                    placeholder="Address...">
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
                    required
                />
            </div>
            <div className='flex justify-center'>
                <Link to={"/home"}>
                    <button
                        type="submit"
                        className="w-[100%] text-[white] font-medium p-3 rounded-md border-2 bg-[#2c88d9] mt-5 hover:bg-[#30587b]"
                    >
                        Change Profile
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ChangeProfile