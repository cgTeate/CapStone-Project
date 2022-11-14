import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        shippingAddress: { location: {} },
        paymentMethod: '',
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
        // Cookies.set('cart', JSON.stringify({ ...state.cart, newItem }));
        // state.total += action.payload.price * action.payload.quantity;
      },
      addToCartFromShoppingCart: (state, action) => {
        const newItem = action.payload;
        const itemInCartExists = state.products.find((item) => item.slug === newItem.slug);
        if (itemInCartExists) {
          if(itemInCartExists.quantity > newItem.quantity)
          {
            itemInCartExists.quantity = newItem.quantity;
          }
          else if (itemInCartExists.quantity < newItem.quantity){
            itemInCartExists.quantity = newItem.quantity;
          }
          
        } else {
          state.products.push({ ...newItem, quantity: 1 });
        }
        // Cookies.set('cart', JSON.stringify({ ...state.cart, newItem }));
        // state.total += action.payload.price * action.payload.quantity;
      },
    cartRemoveItem: (state, action) => {
        const removeItem = state.products.filter(
            (item) => item.slug !== action.payload.slug
        );
        // Cookies.set('cart', JSON.stringify({ ...state.cart, removeItem }));
        // return { ...state, cart: { ...state.cart, removeItem } };
        state.products = removeItem;
    },
    cartReset: (state) =>{
        return {
            ...state,
            cart: {
                products: [],
                shippingAddress: { location: {} },
                paymentMethod: '',
            },
        };
    },
  },
//   default: state,
});

export const { addToCart, addProduct, cartRemoveItem, cartReset, addToCartFromShoppingCart} = cartSlice.actions

export default cartSlice.reducer;