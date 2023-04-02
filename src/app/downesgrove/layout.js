
import Link from "next/link";




export default function Layout({children}) {

  return (
    <div>
    <main className='justify-around min-h-[85vh] box-border text-center text-mywhite p-12'>
    <h1 className='text-3xl neonText'>Downes Grove</h1>
    <div className='hidden md:flex flex-row justify-evenly  h-[10vh] w-full text-center'>
            <Link className='m-auto hover:text-mygreen' href='/downesgrove/favorites'>Downes Grove Favorites</Link>
            <Link className='m-auto hover:text-mygreen' href='/downesgrove/appetizers'>Appetizers</Link>
            <Link className='m-auto hover:text-mygreen' href='/downesgrove/soups_salads'>Soups & Salads</Link>
            <Link className='m-auto hover:text-mygreen' href='/downesgrove/sushi_dinner'>Sushi Dinner</Link>
            <Link className='m-auto hover:text-mygreen' href='/downesgrove/entrees'>Entrees</Link>
            <Link className='m-auto hover:text-mygreen' href='/downesgrove/noodles'>Noodles</Link>
    </div>
    {children}
    </main>
    <footer className='h-auto w-full bg-myfooter align-bottom flex-row justify-evenly p-4 hidden md:flex'>
        <p className='text-center'>Phone: 928493844<br/>
        6913 W 123 Terrace 
        Building 40
        </p>
        <p className='text-center'>Hours:<br/>
        Mon-Fri: 09:00 - 08:00<br/>
        Mon-Fri: 09:00 - 08:00<br/>
        Mon-Fri: 09:00 - 08:00
        </p>
        <Link href='/' className='text-mygreen'>Gallery</Link>
      </footer>
    </div>
  )
}


