import React from 'react';
import Image from "next/image";
import {protest}  from  '@/components/fonts/fonts'


const Logo = () => {
    return (
        <div>
            <div className="flex items-center justify-center  flex-col">
                <div className="flex items-center justify-between" >
                <Image src="/logo.png"
                       width={30}
                       height={30}
                       alt="Logo"/>
                <h1 className={`text-xl md:text-2xl ml-2 font-semibold tracking-wide text-white ${protest.className} `}>STREAMPI </h1>
                </div>

            </div>
        </div>
    );
};

export default Logo;