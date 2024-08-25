import useProfile from '../../hooks/useProfile';
import ChangeProfile from '../../components/profile/ChangeProfile';
import ChangePassword from "../../components/profile/ChangePassword";
import Back from "../../components/button/Back";
import { BsChevronLeft } from 'react-icons/bs';
import GlobalLayout from '../../layouts/GlobalLayout';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';

const Profile = () => {
    const { file, selectedTab, handleMyProfileClick, handleChangePasswordClick, handleFileChange } = useProfile();

    return (
        <>
            <GlobalLayout>
                {/* button back */}
                <div>
                    <Back
                        firstElement={
                            <>
                                <div>
                                    <a href='/home'>
                                        <div className='flex items-center text-2xl pt-10 pl-10'>
                                            <BsChevronLeft />
                                            <p> Back</p>
                                        </div>
                                    </a>
                                </div>
                            </>
                        } />
                </div>
                <div className='max-w-auto mx-[200px] relative flex flex-row justify-between items-center pr-6'>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row justify-between items-center mb-4 mt-12'>
                            <div className='border-l-2 border-gray-500 w-full pl-4 '>
                                <div className='flex flex-row gap-4 mb-4'>
                                    <button
                                        className={`px-4 py-2 rounded-md border-2 border-gray-300 ${selectedTab === 'My Profile' ? 'bg-gray-200 font-bold' : ''}`}
                                        onClick={handleMyProfileClick}
                                    >
                                        My Profile
                                    </button>
                                    <button
                                        className={`px-4 py-2 rounded-md border-2 border-gray-300 ${selectedTab === 'Change Password' ? 'bg-gray-200 font-bold' : ''}`}
                                        onClick={handleChangePasswordClick}
                                    >
                                        Change Password
                                    </button>
                                </div>
                                {selectedTab === 'My Profile' && (
                                    <>
                                        <ChangeProfile />
                                    </>
                                )}
                                {selectedTab === 'Change Password' && (
                                    <>
                                        <ChangePassword />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </GlobalLayout>
        </>
    );
}

export default Profile;
