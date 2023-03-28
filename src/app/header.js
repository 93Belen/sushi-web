import Image from "next/image";
import { Gruppo } from 'next/font/google';



const h1font = Gruppo({
    variable: '--h1font',
    display: 'swap',
    preload: false,
    weight: '400'
  })

export default function Header(){
    return (
        <header className='flex flex-row h-[10vh] justify-between'>
            <div className='border-2 border-white w-3/6 h-full inline-flex align-baseline'>
                <Image className='h-full w-auto' width={100} src={require('../../imgs/logo.png')} />
                <h1 className={`text-mygreen ${h1font.variable} align-baseline md:text-3xl text-lg mt-auto`}>Sushi House</h1>
            </div>
            <nav className='border-2 border-white w-3/6 h-full'>

            </nav>
        </header>
    )
}