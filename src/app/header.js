"use client"

import Image from "next/image";
import { Gruppo } from 'next/font/google';
import { useState } from "react";



const h1font = Gruppo({
    variable: '--h1font',
    display: 'swap',
    preload: false,
    weight: '400'
  })





export default function Header(){
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        const logo = document.getElementById('button-menu');
        if(open){
            logo.style.transform = 'rotate(0deg)'
            logo.style.transitionDuration = '1s'
            setOpen(() => false)
        }
        else {
            logo.style.transform = 'rotate(270deg)'
            logo.style.transitionDuration = '1s'
            setOpen(() => true)
        }
        
       
    }
    return (
        <header className='flex flex-row h-[10vh] justify-between box-border'>
            <div className='w-3/6 h-full inline-flex align-baseline'>
                <Image className='h-full w-auto' width={100} src={require('../../imgs/logo.png')} />
                <h1 className={`text-mygreen ${h1font.variable} align-baseline md:text-3xl text-lg mt-auto`}>Sushi House</h1>
            </div>
            <nav className='w-3/6 h-full justify-items-end pr-6 pt-3 box-border'>
                <div onClick={toggleMenu} className='w-fit ml-auto box-border'>
                <svg id='button-menu' width="50" height="50" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.5" y1="2.5" x2="25.5" y2="2.5" stroke="#E31837" stroke-width="5" stroke-linecap="round"/>
                    <line x1="2.5" y1="11.5" x2="25.5" y2="11.5" stroke="#E31837" stroke-width="5" stroke-linecap="round"/>
                </svg>
                </div>
            </nav>
            <nav className='border-2 border-white w-3/6 h-full hidden'>
                
            </nav>
        </header>
    )
}