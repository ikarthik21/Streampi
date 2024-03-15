import React from 'react';
import Logo from "@/app/(browse)/_components/navbar/Logo";
import {Search} from "./Search";
import Options from './Options';

const Index = () => {
    return (
        <nav className="flex h-20 text-white bg-[#1F2A39] fixed top-0  left-0 p-2  lg:px-4 items-center w-full justify-between z-50">
            <Logo />
            <div className='flex items-center'>
             <Search/>
            {/* <Options/> */}
            </div>
    
        </nav>
    );
};

export default Index;