import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
    //   products: [],
    //   quantity: 0,
    //   total: 0,
    },
  reducers: {
    addProduct: (state, action) => {
        const newItem = action.payload;

        const existItem = state.products.find(
            (item) => item.slug === newItem.slug
            );

            const cartItems = existItem ? state.products.map((item) =>
                item.shoeName === existItem.shoeName ? {...state.products, newItem } : item
            ) :
                state.products.push(newItem);
        // return { ...state, products: { ...state.products, cartItems } };

        state.products.push(cartItems);

        // state.quantity += 1;
        // state.products.push(action.payload);
        // state.total += action.payload.price * action.payload.quantity;
      },
    cartRemoveItem: (state, action) => {
        const cartItems = state.cart.cartItems.filter(
            (item) => item.slug !== action.payload.slug
        );
        Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
        return { ...state, cart: { ...state.cart, cartItems } };
    },
    cartReset: (state) =>{
        return {
            ...state,
            cart: {
                cartItems: [],
                shippingAddress: { location: {} },
                paymentMethod: '',
            },
        };
    },
  },
//   default: state,
});

export const { addProduct, cartRemoveItem, cartReset} = cartSlice.actions

export default cartSlice.reducer;