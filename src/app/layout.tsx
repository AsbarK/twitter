import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {GoogleOAuthProvider} from '@react-oauth/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

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
        <GoogleOAuthProvider clientId='57150161851-kik26sqleb6lg9oq6cmm0mv3mobt0f62.apps.googleusercontent.com'>
        {children}
        <Toaster/>
        </GoogleOAuthProvider>
        </body>
    </html>
  )
}
