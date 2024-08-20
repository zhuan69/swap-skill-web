import React, { useState } from 'react';

interface ProfileState {
    file: string | undefined;
    selectedTab: string;
    isVisible: boolean;
}

const useProfile = (): ProfileState & {
    handleMyProfileClick: () => void;
    handleChangePasswordClick: () => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    toggleVisibility: () => void;
} => {
    const [file, setFile] = useState<string | undefined>(undefined);
    const [selectedTab, setSelectedTab] = useState('My Profile');
    const [isVisible, setIsVisible] = useState(false);

    const handleMyProfileClick = () => {
        setSelectedTab('My Profile');
    };

    const handleChangePasswordClick = () => {
        setSelectedTab('Change Password');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            const fileURL: string = URL.createObjectURL(selectedFile);
            setFile(fileURL);
        } else {
            setFile(undefined);
        }
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return { file, selectedTab, isVisible, handleMyProfileClick, handleChangePasswordClick, handleFileChange, toggleVisibility };
};

export default useProfile;
