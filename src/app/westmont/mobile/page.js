
import Link from "next/link"

export default function Page() {


    return (
      <section className='box-border flex flex-col text-center h-full gap-16 p-6'>
        <h1 className='text-3xl'>Westmont</h1>
        <Link className='neonText text-xl text-mygreen' href='/'>See menu & order</Link>
        <Link className='text-mygreen text-xl' href='/'>Gallery</Link>
        <p className='text-lg'>Hours:<br/>
        Mon-Fri: 09:00 - 08:00<br/>
        Mon-Fri: 09:00 - 08:00<br/>
        Mon-Fri: 09:00 - 08:00<br/>
        </p>
        <p className='text-lg'>
        Phone: 928493844<br/>
        6913 W 123 Terrace 
        Building 40
        </p>
      </section>
    )
  }
  
  
  