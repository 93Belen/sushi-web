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
                <div>
                    <p>{element.name}</p>
                </div>
            )
        });
        return arr;
    }



    return(
        <div>
            {displayCards()}
        </div>
    )

}