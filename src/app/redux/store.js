"use client"
import { configureStore } from "@reduxjs/toolkit"
import menu from "./menu";


export const store = configureStore({
    reducer: {
        menu: menu
    }
});



