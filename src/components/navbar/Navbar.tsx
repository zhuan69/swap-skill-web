import { Button, Toast } from 'flowbite-react';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { BiSolidBellRing } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';
import { useAppSelector } from '../../hooks';

const Navbar = () => {
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();
    const [notificationCount, setNotificationCount] = useState(3);
    const [searchQuery, setSearchQuery] = useState('');
    const loginState = useAppSelector((state) => state.login)


    const handleSearch = () => {

        const validQueries = ["bahasa inggris", "matematika", "ips"];
        const searchQueryLowercase = searchQuery.toLowerCase();

        if (validQueries.includes(searchQueryLowercase)) {

            navigate(`/search/${searchQueryLowercase}`);

        }

        else {
            navigate(`/wrong`)
        }

    };

    const handleToastClick = () => {
        setShowToast(false);
    };

    const closeToast = () => {
        setNotificationCount(0);
        setShowToast(false);
    };

    const handleDropdownItemClick = (sectionId: any) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop + -200,
                behavior: "smooth"
            });
        }
    };

    const logOut = () => {
        if (loginState.isLoggin) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    }


    return (
        <>
            <nav className='bg-[#2eb5c0] fixed top-0 left-0 w-full h-[100px] z-10'>
                <div className="mx-auto min-h-[50px] -mt-5">
                    <div className='relative flex flex-row items-center ml-20'>
                        <a href="/home">
                            <img src="jembatan_ilmu.png" width="200" height="150" alt="logo" />
                        </a>
                        <DropdownButton className='ml-20 bg-[#007DFA]' id="dropdown-basic-button" title="Tentang">
                            <Dropdown.Item onClick={() => handleDropdownItemClick('action-1')}>Sekolah</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDropdownItemClick('action-2')}>Teknologi</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDropdownItemClick('action-3')}>Bahasa</Dropdown.Item>
                        </DropdownButton>
                        <div className="relative p-5 flex flex-row-reverse  w-full">
                            <div className='flex justify-center items-center ml-10 gap-2'>
                                {loginState.isLoggin ? (
                                    <>
                                        <p>Hi, Riqki</p>
                                        <a href='/profile'>
                                            <Avatar src="/broken-image.jpg" />
                                        </a>
                                        <button
                                            className='px-10 py-2 bg-[#007DFA] rounded-xl text-white'
                                            onClick={logOut}
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        className='px-10 py-2 bg-[#007DFA] rounded-xl text-white'
                                    >
                                        <a href="/login">
                                            Login
                                        </a>
                                    </button>
                                )}
                            </div>
                            <div>
                                <Button onClick={() => setShowToast(prevState => !prevState)}>
                                    <BiSolidBellRing />
                                    {notificationCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs">{notificationCount}</span>
                                    )}
                                </Button>
                                {showToast && (
                                    <div className="absolute w-[20%] -ml-[100px] font-normal mt-6 flex flex-col">
                                        <Toast onClick={handleToastClick} className=' '>
                                            <div className='flex flex-col gap-1'>
                                                <p className='py-2 px-2 rounded-lg border-2 text-black text-sm'>Welcome Riqki</p>
                                                <p className='py-2 px-2 rounded-lg border-2 text-black text-sm'>Anda ditunggu untuk swap skill. ayo sekarang keburu hilang</p>
                                                <p className='py-2 px-2 rounded-lg border-2 text-black text-sm'>Jangan lupa untuk belajar</p>
                                                <button onClick={closeToast}>Close</button>
                                            </div>
                                        </Toast>
                                    </div>

                                )}
                            </div>
                            <span
                                onClick={handleSearch}
                                className="w-[5%] flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5 text-black">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                            <input
                                type="search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch();
                                    }
                                }}
                                className="relative max-w-[300px] bg-white m-0 block flex-auto rounded border border-solid border-neutral-300 px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon2"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
