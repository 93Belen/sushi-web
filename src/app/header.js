"use client"

import Image from "next/image";
import { Gruppo } from 'next/font/google';
import { useState } from "react";
import Link from "next/link";



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
        const menuDisplay = document.getElementById('menu-display');
        if(open){
            logo.style.transform = 'rotate(0deg)'
            logo.style.transitionDuration = '1s'
            menuDisplay.style.animationName = 'desappear-menu'
            menuDisplay.style.animationDuration = '1s'
            setTimeout(() => {menuDisplay.style.display = 'none'}, 900)
            setOpen(() => false)
        }
        else {
            logo.style.transform = 'rotate(270deg)'
            logo.style.transitionDuration = '1s'
            menuDisplay.style.animationName = 'appear-menu'
            menuDisplay.style.animationDuration = '0.9s'
             menuDisplay.style.display = 'flex'
            setOpen(() => true)
        }
        
       
    }
    return (
        <header className='flex flex-row h-[10vh] justify-between box-border p-2'>
            <div className='w-4/6 h-full inline-flex align-baseline'>
                <Image className='h-full w-auto' width={100} src={require('../../imgs/logo.png')} />
                <h1 className={`${h1font.variable} text-mygreen align-baseline md:text-3xl text-lg mt-auto font-h1font`}>Sushi House</h1>
            </div>
            <nav className='w-2/6 h-full justify-items-end pr-6 pt-3 box-border md:hidden'>
                <div onClick={toggleMenu} className='w-fit ml-auto box-border'>
                <svg id='button-menu' width="50" height="50" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.5" y1="2.5" x2="25.5" y2="2.5" stroke="#E31837" stroke-width="5" stroke-linecap="round"/>
                    <line x1="2.5" y1="11.5" x2="25.5" y2="11.5" stroke="#E31837" stroke-width="5" stroke-linecap="round"/>
                </svg>
                <section id='menu-display' className='w-screen h-screen absolute top-[10vh] left-0 flex-col justify-evenly justify-items-center box-border pb-10 hidden bg-myblack'>
                    <Link className='m-auto text-2xl' href='/'>Home</Link>
                    <Link className='m-auto text-2xl' href='/'>Guides</Link>
                    <Link className='m-auto text-2xl' href='/'>Our Story</Link>
                </section>
                </div>
            </nav>
            <nav className='w-2/6 h-full justify-items-end pr-6 pt-3 box-border hidden md:flex'>
                <Link className='m-auto text-2xl hover:text-mygreen' href='/'>Home</Link>
                <Link className='m-auto text-2xl hover:text-mygreen' href='/'>Guides</Link>
                <Link className='m-auto text-2xl hover:text-mygreen' href='/'>Our Story</Link>
            </nav>
            <nav className='border-2 border-white w-3/6 h-full hidden'>
                
            </nav>
        </header>
    )
}