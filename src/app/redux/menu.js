import { createSlice } from "@reduxjs/toolkit";


const options = {
    name: 'menu',
    initialState: {},
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