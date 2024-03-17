import React from 'react';
import Logo from "@/app/(browse)/_components/navbar/Logo";
import {Search} from "./Search";
import Options from './Options';

const Index = () => {
    return (
        <nav className="flex h-[70px] text-white bg-[#18181b] fixed top-0  left-0 p-2  lg:px-4 items-center w-full justify-between z-50">
            <Logo />
            <div className='flex items-center'>
             <Search/>           
            </div>
            <Options/>
        </nav>
    );
};

export default Index;