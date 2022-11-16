import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        // products: [],
        products: Cookies.get('cart')
              ? JSON.parse(Cookies.get('cart'))
              : [],
        shippingAddress: Cookies.get('shippingAddress')
        ? JSON.parse(Cookies.get('shippingAddress'))
        : {},
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
        Cookies.set('cart', JSON.stringify({ ...state.products, newItem }));
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
        Cookies.set('cart', JSON.stringify({ ...state.products, newItem }));
        // state.total += action.payload.price * action.payload.quantity;
      },
    cartRemoveItem: (state, action) => {
        const removeItem = state.products.filter(
            (item) => item.slug !== action.payload.slug
        );
        Cookies.set('cart', JSON.stringify({ ...state.products, removeItem }));
        // return { ...state, cart: { ...state.cart, removeItem } };
        state.products = removeItem;
    },
    cartReset: (state) =>{
        return {
            ...state,
                products: [],
                shippingAddress: {},
                paymentMethod: '',
        };
    },
    saveShippingAddress: (state, action) =>{
      return {
            ...state,
            //keep the previous fields of the cart as they are
            //...state.cart,

            //keep the previous fields of the shipping as they are
            //but merge the address in the payload with the shipping address
            //update shipping address fields with payload 
        shippingAddress: action.payload,
           };
    },
    savePaymentMethod: (state, action) => {
      return {
        ...state,
        paymentMethod: action.payload,
      };
    },
  },
//   default: state,
});

export const { addToCart, addProduct, cartRemoveItem, cartReset, addToCartFromShoppingCart, saveShippingAddress} = cartSlice.actions

export default cartSlice.reducer;