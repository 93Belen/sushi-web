"use client"
import Link from "next/link"
import { useEffect, useState } from "react"



export default function Home() {
  const [move, setMove] = useState(true);

 
  const moveChopsticks = () => {
    document.getElementById('chopstick-one').style.transform = 'rotate(-5deg)'
    document.getElementById('chopstick-one').style.transformOrigin = '30%'
    document.getElementById('chopstick-two').style.transformOrigin = '30%'
    document.getElementById('chopstick-two').style.transform = 'rotate(5deg)'
    document.getElementById('red-stripe-one').style.transform = 'translate(-5.9px, 2.4px)'
    document.getElementById('red-stripe-two').style.transform = 'translate(8px, 1px)'
    document.getElementById('chopstick-one').style.transitionDuration = '3s'
    document.getElementById('chopstick-two').style.transitionDuration = '3s'
    document.getElementById('red-stripe-two').style.transitionDuration = '3s'
    document.getElementById('red-stripe-one').style.transitionDuration = '3s'
    setTimeout(() => {setMove(() => false)}, 4000)
    

  }
  const returnChopsticks = () => {
    document.getElementById('chopstick-one').style.transform = 'rotate(0deg)'
    document.getElementById('red-stripe-one').style.transform = 'translate(0px)'
    document.getElementById('chopstick-two').style.transform = 'rotate(0deg)'
    document.getElementById('red-stripe-two').style.transform = 'translate(0px)'
    document.getElementById('red-stripe-two').style.transform = 'translate(0px)'
    document.getElementById('chopstick-one').style.transitionDuration = '3s'
    document.getElementById('chopstick-two').style.transitionDuration = '3s'
    document.getElementById('red-stripe-two').style.transitionDuration = '3s'
    document.getElementById('red-stripe-one').style.transitionDuration = '3s'
    setTimeout(() => {setMove(() => true)}, 4000)

  }

useEffect(() => {
  if(move){
    moveChopsticks();
  }
  else {
    returnChopsticks()
  }
  
})



  return (
    <main className='flex flex-row justify-around min-h-[90vh] box-border'>
      <section className='border-2 border-white flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-10 p-10 justify-items-center align-middle w-4/6'>
        <div className='border-2 border-myred w-full rounded-xl p-6 text-center h-fit'>
          <h2>Location</h2>
          <Link href='/' className='text-mygreen'>See menu & order</Link>
          <p>Phone: 928493844<br/>
          6913 W 123 Terrace
          Building 40</p>
        </div>
        <div className='border-2 border-myred w-full rounded-xl p-6 text-center h-fit'>
        <h2>Location</h2>
        <Link href='/' className='text-mygreen'>See menu & order</Link>
          <p>Phone: 928493844<br/>
          6913 W 123 Terrace
          Building 40</p>
        </div>
        <div className='border-2 border-myred w-full rounded-xl p-6 text-center h-fit'>
        <h2>Location</h2>
        <Link href='/' className='text-mygreen'>See menu & order</Link>
          <p>Phone: 928493844<br/>
          6913 W 123 Terrace
          Building 40</p>
        </div>
        <div className='border-2 border-myred w-full rounded-xl p-6 text-center h-fit'>
        <h2>Location</h2>
        <Link href='/' className='text-mygreen'>See menu & order</Link>
          <p>Phone: 928493844<br/>
          6913 W 123 Terrace
          Building 40</p>
        </div>
      </section>
      <section className='hidden md:block border-white border-2 w-2/6 justify-items-center align-middle p-2 content-center'>
      <svg className='m-auto h-full' width="50%" height="auto" viewBox="0 0 175 266" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id='chopstick-one' d="M102.074 261.206L41.5441 25.644C40.9286 23.2485 42.3908 20.8122 44.7943 20.2286C47.196 19.6455 49.6111 21.1373 50.1648 23.5459L104.656 260.578C104.819 261.287 104.381 261.995 103.674 262.167C102.968 262.339 102.255 261.911 102.074 261.206Z" fill="#2D2626" stroke="#F6F2F6"/>
      <path id='red-stripe-one' d="M49.735 59.5485L49.0639 56.9355C49.0639 56.9355 51.354 55.6136 53.2838 55.1451C55.2135 54.6766 57.8666 54.7743 57.8666 54.7743L58.1616 56.1147L58.471 57.4454C55.378 57.3271 52.6714 57.9921 49.735 59.5485Z" fill="#E31837"/>
      <path id='chopstick-two' d="M162.92 224.179L5.61692 38.6812C4.01724 36.7948 4.26902 33.9646 6.17658 32.3902C8.08265 30.817 10.9067 31.1047 12.4565 33.0298L164.968 222.486C165.425 223.053 165.34 223.881 164.779 224.344C164.219 224.807 163.39 224.733 162.92 224.179Z" fill="#2D2626" stroke="#F6F2F6"/>
      <path id='red-stripe-two' d="M27.7886 65.6073L26.044 63.5496C26.044 63.5496 27.5272 61.3604 29.0587 60.0964C30.5902 58.8324 33.0198 57.7619 33.0198 57.7619L33.8704 58.839L34.7298 59.9012C31.8954 61.1451 29.7508 62.9251 27.7886 65.6073Z" fill="#E31837"/>
     </svg>
      </section>
    </main>
  )
}


{/* <svg className='m-auto h-full' width="50%" height="auto" viewBox="0 0 175 266" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='chopstick-one' d="M102.074 261.206L41.5441 25.644C40.9286 23.2485 42.3908 20.8122 44.7943 20.2286C47.196 19.6455 49.6111 21.1373 50.1648 23.5459L104.656 260.578C104.819 261.287 104.381 261.995 103.674 262.167C102.968 262.339 102.255 261.911 102.074 261.206Z" fill="#2D2626" stroke="#F6F2F6"/>
<path id='red-stripe-one' d="M49.735 59.5485L49.0639 56.9355C49.0639 56.9355 51.354 55.6136 53.2838 55.1451C55.2135 54.6766 57.8666 54.7743 57.8666 54.7743L58.1616 56.1147L58.471 57.4454C55.378 57.3271 52.6714 57.9921 49.735 59.5485Z" fill="#E31837"/>
<path id='chopstick-two' d="M162.92 224.179L5.61692 38.6812C4.01724 36.7948 4.26902 33.9646 6.17658 32.3902C8.08265 30.817 10.9067 31.1047 12.4565 33.0298L164.968 222.486C165.425 223.053 165.34 223.881 164.779 224.344C164.219 224.807 163.39 224.733 162.92 224.179Z" fill="#2D2626" stroke="#F6F2F6"/>
<path id='red-stripe-two' d="M27.7886 65.6073L26.044 63.5496C26.044 63.5496 27.5272 61.3604 29.0587 60.0964C30.5902 58.8324 33.0198 57.7619 33.0198 57.7619L33.8704 58.839L34.7298 59.9012C31.8954 61.1451 29.7508 62.9251 27.7886 65.6073Z" fill="#E31837"/>
</svg> */}

