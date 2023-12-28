import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {GoogleOAuthProvider} from '@react-oauth/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import ReactQueryTag from '@/components/reactQuery/page'
import React from "react";
import GoogleLoginSiginIn from "@/components/GoogleLogin/page";
import SideBar from '@/components/SideBar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twitter',
  description: 'This is Twitter App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryTag>
          <GoogleOAuthProvider clientId='57150161851-kik26sqleb6lg9oq6cmm0mv3mobt0f62.apps.googleusercontent.com'>
          <div className='grid grid-cols-12 w-screen h-screen'>
            <div className='flex lg:justify-end lg:col-span-3 relative sm:pr-3 col-span-2 md:col-span-5 justify-center'>
              <SideBar/>
            </div>
                <div className='md:col-span-7 lg:col-span-5 border border-gray-600 border-y-0 ml-2 overflow-scroll lg:mx-10 col-span-10'>
                  {children}
                </div>
                <div className='lg:col-span-4'>
                  <GoogleLoginSiginIn />
                </div>
            </div>
          <Toaster/>
          </GoogleOAuthProvider>
        </ReactQueryTag>
        </body>
    </html>
  )
}
