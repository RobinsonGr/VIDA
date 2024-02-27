import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {items: ['s', 'asd', 'asd']},
    reducers: {
        addProduct(state, action) {
            console.log(state.items)
            const existingProductIndex = state.items.findIndex(product => {
                return product.id === action.payload.id
            })

            if(existingProductIndex !== -1) {
                return state.map(product => {
                    product.id === action.payload.id ?
                         {...product, quantity: product.quantity + 1}               
                   : product
                });
            } 
            return [...state, action.payload];            
}
}});

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer