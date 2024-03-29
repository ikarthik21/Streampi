import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import {dark} from "@clerk/themes";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Streampi",
    description: "A next generation streaming platform",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider  appearance={{
            baseTheme: dark
        }}>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
