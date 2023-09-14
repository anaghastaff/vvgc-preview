import './globals.css'
import Header from '@/Components/header';
import Footer from '@/Components/footer';
import { Open_Sans, Playfair_Display } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry'


const opensans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans', fallback: 'sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', fallback: 'serif' });

export default function RootLayout({ children }) {

  return (
    <html lang="en" >

      <body className={`${opensans.variable} max-w-full font-sans box-border bg-gradient-to-r from-gray-300 via-green-100 to-violet-200`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
