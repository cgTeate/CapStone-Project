import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
    //   total: 0,
    },
  reducers: {
      addToCart: (state, action) => {
        const newItem = action.payload;
        const itemInCartExists = state.products.find((item) => item.slug === newItem.slug);
        if (itemInCartExists) {
          itemInCartExists.quantity++;
        } else {
          state.products.push({ ...newItem, quantity: 1 });
        }
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

export const { addToCart, addProduct, cartRemoveItem, cartReset} = cartSlice.actions

export default cartSlice.reducer;