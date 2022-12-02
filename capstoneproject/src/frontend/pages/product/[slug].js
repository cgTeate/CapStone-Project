import { Image,  } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import data from '../../utils/data'
// import { Store } from '../../utils/Store'
import {addProduct,addToCart, cartRemoveItem } from "../../redux/cartSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect} from 'react'
import { getKicks, getAllKicks, getProducts} from '../api/client'


export default function ProductScreen() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const { state, dispatch } = useContext(Store);
  const [products, setProducts] = useState([]);

        const fetchKicks = () => {
             getProducts()
             .then(res => setProducts(res.data))
        }

  useEffect(()=>{
   console.log("component is mounted");
   fetchKicks();
  }, []);

  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;
  // const product = data.products.find(x => x.slug === slug);
  const product = products.find(x => x.slug === slug);
  console.log("products",products)
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
    
    /* 
    ! Redux implmentation
   */

    dispatch(
      addToCart({ ...product})
    );
    // router.push('/Cart');

    /* 
    ! Original implmentation
   */

    // dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    //router.push('/Cart');
  };
  
  return (
    
    <Layout title={product.productName}>
      <div className="py-2">
        <Link href="/"><a>Back To Items</a>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.thumbnail}
            alt={product.productName}
            width={1200}
            height={640}
            layout="responsive"></Image>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <h1 className="text-lg">{product.productName}</h1>
          </li>
          <li>{product.releaseDate}</li>
          <li>{product.description}</li>
        </ul>
      </div>
      <div className="card p-5">
        <div className="mb-2 flex justify-between">
          <div>Price</div>
          <div>{"$" + product.retailPrice}</div>
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
          className="primary-button2 w-full"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </Layout>
  )
}
