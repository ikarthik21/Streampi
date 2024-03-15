import Image from 'next/image'
import {protest}  from  '@/components/fonts/fonts'



export default function AuthLayout({children}: Readonly<{  children: React.ReactNode;
}>) {
    return (
     <div className="h-full flex flex-col items-center justify-center">
         <div className="flex items-center justify-center  flex-col mb-4">
             <Image  src="/logo.png"
                     width={70}
                     height={180}
                     alt="Picture of the author"/>
             <h1 className={`text-3xl font-semibold tracking-wide text-white ${protest.className} `} >STREAMPI </h1>

         </div>
         {children}
     </div>
    );
}
