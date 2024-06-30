import './globals.css'
import Header from '@modules/layout/header/page';
import Footer from '@modules/layout/footer/page';
import { Open_Sans } from 'next/font/google';
import React from 'react'

const opensans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans', fallback: ['sans'] });
export default function RootLayout({ children }:{children:React.ReactNode}) {

  return (
    <html lang="en" >
      <head>
     <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
     <link rel="icon" href="/icons/om-2.png" type="image/png"></link>
   </head>

      <body className={`${opensans.variable} max-w-full font-sans box-border m-0`}>
      
          <Header />
          {children}
          <Footer />
        
      </body>
    </html>
  )
}