"use client"

import { useSelector } from "react-redux"
import { selectMenu } from "../redux/selectors"

export default function Page() {
  const menu = useSelector(selectMenu);
  console.log(menu)


    return (
      <section className='box-border'>
        <h1>Leawood</h1>
      </section>
    )
  }
  
  
  