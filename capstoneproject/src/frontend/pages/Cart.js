import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
// import React, { useContext } from "react";
import Header from "../components/Header";
// import { Store } from "../utils/Store";
import Layout from '../components/Layout'
import { useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { getKicks, getAllKicks, getProducts} from '../pages/api/client'
import { useSelector, useDispatch } from 'react-redux'
import { cartRemoveItem, addToCart, addToCartFromShoppingCart} from "../redux/cartSlice";
import dynamic from 'next/dynamic'

 function CartScreen() {
  const router = useRouter();
//   const { state, dispatch } = useContext(Store);
const cart = useSelector((state) => state.cart);
const products = useSelector((state) => state.cart.products);
const dispatch = useDispatch();
//   const {
//     cart: { cartItems },
//   } = state;

const [productsdb, setProductsdb] = useState([]);

const fetchKicks = () => {
     getProducts()
     .then(res => setProductsdb(res.data))
}

useEffect(()=>{
console.log("component is mounted");
fetchKicks();
}, []);

const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    // dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    if (productsdb.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch(
        addToCartFromShoppingCart({ ...item, quantity})
      );
      toast.success('Product updated in the cart');
  };
  const removeItemHandler = (item) => {
    
    // dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    dispatch(cartRemoveItem(item));
  }
  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {
        products.length === 0 ?
          (<div>
            Cart is empty. <Link href="/">Come Kick it</Link>
          </div>) :
          (
            <div className="grid md:grid-cols-4 md:gap-5">
              <div className="overflow-x-auto md:col-span-3">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="px-5 text-left">Item</th>
                      <th className="px-5 text-left">Quantity</th>
                      <th className="px-5 text-left">Price</th>
                      <th className="px-5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => (
                      <tr key={item.slug} className="border-b">
                        <td>
                          <Link href={`/product/${item.slug}`}>
                            <a className="flex items-center">
                              <img
                                src={item.thumbnail}
                                alt={item.productName}
                                width={50}
                                height={50}
                              ></img>
                              &nbsp;
                              {item.productName}
                            </a>
                          </Link>
                        </td>
                        <td className="p-5 text-left">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                        <td className="p-5 text-left">{item.retailPrice}</td>
                        <td className="p-5 text-center">
                          <button onClick={() => removeItemHandler(item)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card p-5">
                <ul>
                  <li>
                    <div className="pb-3 text-xl">
                      SUBTOTAL ({products.reduce((a, c) => a + c.quantity, 0)})
                      {' '}
                      : $
                      {products.reduce((a, c) => a + c.quantity * c.retailPrice, 0)}
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push('/shipping')}
                      className="primary-button w-full">
                      Check Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )
      }
       </Layout>
  )
}

export default dynamic(() => Promise.resolve(CartScreen), {ssr: false});
