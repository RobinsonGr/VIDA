import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: [],
    reducers: {
        addProduct(state, action) {
            state.forEach(productObj => {
                if(productObj.id == action.payload.id) {
                    return productObj.id += 1
                }
                

            });
    }
});