import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import {Toaster} from 'react-hot-toast'
import { SupportButton } from '../components/support-button'
import AxiosInterceptorWrapper from './axios-interceptor-wrapper'

export const metadata: Metadata = {
  title: 'VetDataHub',
  description: 'A platform for sharing and discovering veterinary datasets',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <AxiosInterceptorWrapper>
          <Toaster position="top-right" reverseOrder={true} />
          {children}
          <SupportButton />
        </AxiosInterceptorWrapper>
      </body>
    </html>
  )
}
