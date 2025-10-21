import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import {Toaster} from 'react-hot-toast'


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
      
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&amp;family=Poppins:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
      </head>
      <body>
          <Toaster position="top-right" reverseOrder={true} />
          {children}
      </body>
    </html>
  )
}
