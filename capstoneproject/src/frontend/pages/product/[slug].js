import { Image,  } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import data from '../../utils/data'
// import { Store } from '../../utils/Store'
import {addProduct,addToCart, cartRemoveItem, cartReset } from "../../redux/cartSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'


export default function ProductScreen() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find(x => x.slug === slug);
  if (!product) {
    return <div> Product Not Found </div>
  }
  // const [quantity, setQuantity] = useState(1);

  // const handleQuantity = (type) => {
  //   if (type === "dec") {
  //     quantity > 1 && setQuantity(quantity - 1);
  //   } else {
  //     setQuantity(quantity + 1);
  //   }
  // };


  const addToCartHandler = () => {
    const existItem = cart.products.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock');
      return;
    }
    dispatch(
      addToCart({ ...product})
    );
    // router.push('/Cart');
  };
  return (

    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/KicksPage"><a>Back To Kicks</a>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.thumbnail}
            alt={product.shoeName}
            width={640}
            height={640}
            layout="responsive"></Image>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <h1 className="text-lg">{product.shoeName}</h1>
          </li>
          <li>{product.releaseDate}</li>
          <li>{product.description}</li>
        </ul>
      </div>
      <div className="card p-5">
        <div className="mb-2 flex justify-between">
          <div>Price</div>
          <div>{product.retailPrice}</div>
        </div>
        <div className="mb-2 flex justify-between">
          <div>Status</div>
          <div>{product.countInStock > 0 ? 'In stock' : 'Out of Stock'}</div>
        </div>
        {/* <button
          className="primary-button w-full"
          onClick={() => handleQuantity("inc")}
        >
          Add Quantity
        </button>
        <p>{quantity}</p>
        <button
          className="primary-button w-full"
          onClick={() => handleQuantity("dec")}
        >
          Remove Quantity
        </button> */}
        <button
          className="primary-button w-full"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </Layout>
  )
}
