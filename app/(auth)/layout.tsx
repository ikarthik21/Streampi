import Image from 'next/image'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../../public/fonts/Protest_Revolution/ProtestRevolution-Regular.ttf' })



export default function AuthLayout({children}: Readonly<{  children: React.ReactNode;
}>) {
    return (
     <div className="h-full flex flex-col items-center justify-center">
         <div className="flex items-center justify-center  flex-col mb-4">
             <Image  src="/logo.png"
                     width={80}
                     height={180}
                     alt="Picture of the author"/>
             <h1 className={`text-3xl font-semibold tracking-wide text-[#FF0707] ${myFont.className} `} >Streampi </h1>

         </div>
         {children}
     </div>
    );
}
