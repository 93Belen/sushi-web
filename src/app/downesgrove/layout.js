
import Link from "next/link";




export default function Layout({children}) {

  return (
    <main className='justify-around min-h-[85vh] box-border text-center'>
    <h1 className='text-3xl neonText'>Downes Grove</h1>
    <div className='hidden md:flex flex-row justify-evenly  h-[10vh] w-full text-center'>
            <Link className='m-auto hover:text-mygreen' href='/'>Downes Grove Favorites</Link>
            <Link className='m-auto hover:text-mygreen' href='/'>Appetizers</Link>
            <Link className='m-auto hover:text-mygreen' href='/'>Soups & Salads</Link>
            <Link className='m-auto hover:text-mygreen' href='/'>Sushi Dinner</Link>
            <Link className='m-auto hover:text-mygreen' href='/'>Entrees</Link>
            <Link className='m-auto hover:text-mygreen' href='/'>Noodles</Link>
            <Link className='m-auto hover:text-mygreen' href='/'>Kids</Link>
            <Link className='m-auto hover:text-mygreen' href='/'>Desserts</Link>
            <Link className='m-auto hover:text-mygreen' href='/'>Party Trays</Link>
    </div>
    {children}
    </main>
  )
}


