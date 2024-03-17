import React from "react";
import Navbar from "@/app/(browse)/_components/navbar";
import SideBar from "./_components/sidebar";


const BrowseLayout = ({   children,  }: Readonly<{  children: React.ReactNode;  }>) =>{
    return (
        <div>
            <Navbar/>
            <SideBar/>
            <div className="flex  h-full mt-14  p-4">
               {children}
            </div>
        </div>
    );
}

export  default  BrowseLayout;

