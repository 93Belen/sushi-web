
import Link from "next/link";




export default function Layout({children}) {

  return (
    <main className='justify-around min-h-[85vh] box-border text-center'>
    <h1 className='text-3xl neonText'>Oak Park</h1>
    <div className='hidden md:flex flex-row justify-evenly  h-[10vh] w-full text-center'>
            <Link className='m-auto hover:text-mygreen' href='/guides'>Oak Park Favorites</Link>
            <Link className='m-auto hover:text-mygreen' href='/guides/ingridients'>Appetizers</Link>
            <Link className='m-auto hover:text-mygreen' href='/guides/sake'>Soups & Salads</Link>
            <Link className='m-auto hover:text-mygreen' href='/guides'>Sushi Dinner</Link>
            <Link className='m-auto hover:text-mygreen' href='/guides/ingridients'>Entrees</Link>
            <Link className='m-auto hover:text-mygreen' href='/guides/sake'>Noodles</Link>
            <Link className='m-auto hover:text-mygreen' href='/guides'>Kids</Link>
            <Link className='m-auto hover:text-mygreen' href='/guides/ingridients'>Desserts</Link>
            <Link className='m-auto hover:text-mygreen' href='/guides/sake'>Party Trays</Link>
    </div>
    {children}
    </main>
  )
}


