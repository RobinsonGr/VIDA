import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: { items: [] },
    reducers: {
        addProduct(state, action) {
            const { id, price, name, img, quantity } = action.payload;
            (current(state))
            const existingProductIndex = state.items.findIndex(product => product.id === id);

            if (existingProductIndex !== -1) {
                state.items[existingProductIndex] = {
                    ...state.items[existingProductIndex],
                    quantity: state.items[existingProductIndex].quantity + quantity
                };
            } else {
                state.items.push({
                    id,
                    price,
                    name,
                    quantity,
                    img
                });
            }
        },
        removeProduct(state, action) {
            const { id } = action.payload;
            console.log(id)
            state.items = current(state.items).filter(item => item.id !== id);
          },
    }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
