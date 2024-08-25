import { Button, Toast } from 'flowbite-react';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import { BiSolidBellRing } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userDetail } from '../../services/Member';
import { memberDetailAPI } from '../../pages/home/HomeSlice';
import ReactLoading from 'react-loading';



const Navbar = () => {
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();
    const [notificationCount, setNotificationCount] = useState(3);
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useAppDispatch()
    let loginState = useAppSelector((state) => state.homeSlice)
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [headerVisible, setHeaderVisible] = useState(true);
    const [scrollTimeout, setScrollTimeout] = useState(null);
    const token = localStorage.getItem("token")
    console.log(token)

    useEffect(() => {
        dispatch(memberDetailAPI())

        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                setHeaderVisible(false);
            } else {
                setHeaderVisible(true);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);

            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            const newScrollTimeout = setTimeout(() => {
                setHeaderVisible(true);
            }, 200);

            setScrollTimeout(newScrollTimeout);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, [dispatch])

    const handleSearch = () => {

        const validQueries = ["bahasa inggris", "matematika", "ips"];
        const searchQueryLowercase = searchQuery.toLowerCase();

        if (validQueries.includes(searchQueryLowercase)) {

            navigate(`/search/${searchQueryLowercase}`);

        }

        else {
            navigate(`/courselist`)
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
        if (loginState.isLogin) {
            localStorage.removeItem('token')
            navigate("/home")
            window.location.reload()
        }
    }


    const headerStyle = {
        transition: 'transform 0.3s ease-in-out',
        transform: headerVisible ? 'translateY(0)' : 'translateY(-100%)',
    };

    return (
        <>
            <nav style={headerStyle} className={`bg-[#2eb5c0] fixed top-0 left-0 w-full z-10 `}>
                <div className="mx-auto flex justify-between items-center px-10">
                    <div className='items-center'>
                        <a href="/home">
                            <img src="jembatan_ilmu.png" style={{ width: '100px', height: '90px' }} alt="logo" />
                        </a>
                    </div>
                    <div className="relative flex-grow flex items-center mx-40">
                        <input
                            type="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                            className="w-full rounded-l-lg bg-white rounded border border-solid border-neutral-300 px-4 py-2 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)]"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon2"
                        />
                        <button
                            onClick={handleSearch}
                            className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-2 bg-[#007DFA] rounded-r-lg text-white"
                            aria-label="Search"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        {loginState.isLogin || token ? (
                            <>
                                <p className='text-white mr-2'>Hi, {loginState.user?.name}</p>
                                <a href='/profile'>
                                    <Avatar src="/broken-image.jpg" />
                                </a>
                                <button
                                    className='ml-4 px-6 py-2 bg-[#007DFA] rounded-xl text-white'
                                    onClick={logOut}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <button
                                className='px-6 py-2 bg-[#007DFA] rounded-xl text-white'
                            >
                                <a href="/login">
                                    Login
                                </a>
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
