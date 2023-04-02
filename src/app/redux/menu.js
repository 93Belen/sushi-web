import { createSlice } from "@reduxjs/toolkit";


const options = {
    name: 'menu',
    initialState: {
        leawood: {
            favorites: [],
            appetizers: [],
            soups_salads: [],
            sushi_dinner: [],
            entrees: [],
            noodles: []
        },
        downes_grove: {
            favorites: [],
            appetizers: [],
            soups_salads: [],
            sushi_dinner: [],
            entrees: [],
            noodles: []
        },
        oak_park: {
            favorites: [],
            appetizers: [],
            soups_salads: [],
            sushi_dinner: [],
            entrees: [],
            noodles: []
        },
        westmont: {
            favorites: [],
            appetizers: [],
            soups_salads: [],
            sushi_dinner: [],
            entrees: [],
            noodles: []
        }
    },
    reducers: {
        changeMenu: (state, action) => {
            state = action.payload
            return state
        }
    }
}



const menu = createSlice(options);
export const { changeMenu } = menu.actions;
export default menu.reducer;