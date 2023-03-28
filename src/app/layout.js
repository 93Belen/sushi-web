import './globals.css'
import { Exo_2 } from 'next/font/google';
import Header from './header';

const font = Exo_2({
  variable: '--font',
  display: 'swap',
  weight: ["100", '200', '300'],
  preload: false,
})


export const metadata = {
  title: 'Sushi',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${font.variable} font-sans bg-myblack text-mywhite w-screen min-h-screen h-fit overflow-x-hidden`}>
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
