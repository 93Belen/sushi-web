"use client"

import { selectMenu } from "components/app/redux/selectors"
import { useSelector } from "react-redux"

export default function Page(){
    const menu = useSelector(selectMenu)
    const fav = menu.leawood.favorites;
    const displayCards = () => {
        const arr = [];
        fav.forEach(element => {
            arr.push(
                <div className='p-4 border-2 border-mywhite rounded-xl m-4'>
                    <p className='text-mygreen'>{element.name}</p>
                    <p className='text-left'>{element.description}</p>
                </div>
            )
        });
        return arr;
    }



    return(
        <div className='w-full grid grid-cols-3 grid-row-2 gap-6'>
            {displayCards()}
        </div>
    )

}