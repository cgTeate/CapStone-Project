import axios from 'axios';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CheckoutWizard from '../../components/CheckoutWizard';
import Layout from '../../layouts/Layout';
const url = process.env.NEXT_PUBLIC_SPRINGBOOT_API_URL
// import { getError } from '../utils/error';
// import { Store } from '../utils/Store';
import { useDispatch, useSelector } from 'react-redux';
import { getAllKicks, getKicks, getProducts } from '../../pages/api/client';
import { clearCartItems } from "../../redux/cartSlice";

export default function PlaceOrderScreen() {
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user.user);
    const { products, shippingAddress, paymentMethod  } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // const { state, dispatch } = useContext(Store);
    // const { cart } = state;
    // const { cartItems, shippingAddress, paymentMethod } = cart;

    const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

    const itemsPrice = round2(
        products.reduce((a, c) => a + c.quantity * c.retailPrice, 0)
    ); // 123.4567 => 123.46

    const shippingPrice = itemsPrice > 1000 ? 0 : 15;
    const taxPrice = round2(itemsPrice * 0.15);
    const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

    const router = useRouter();
    useEffect(() => {
        if (!paymentMethod) {
            router.push('/payment/payment');
        }
    }, [paymentMethod, router]);

    const [loading, setLoading] = useState(false);
    const productsOI = [products.productName, products.quantity, products.thumbnail, products.retailPrice]

    const placeOrderHandler = async () => {
        try {
            setLoading(true);

            const {data} = await axios({
                method: 'POST',
                url:`${url}/api/orders/placeOrder`,
                headers: {'Content-Type': 'application/json'},
                data:
                JSON.stringify({
                    username: user,
                    orderItems: products,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                shippingPrice,
                taxPrice,
                totalPrice,
                }
            )});
            console.log(data)
            setLoading(false);
            // dispatch({ type: 'CART_CLEAR_ITEMS' });
            dispatch(clearCartItems())

            // Cookies.set(
            //     'cart',
            //     JSON.stringify({
            //         products: [],
            //     })
            // );
        router.push(`/order/${data}`);
        } catch (err) {
            setLoading(false);
            toast.error(err);
        }
    };

    return (
        <Layout title="Place Order">
            <CheckoutWizard activeStep={3} />
            <h1 className="mb-4 text-xl">Place Order</h1>
            {products.length === 0 ? (
                <div>
                    Cart is empty. <Link href="/">Come Kick It</Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-4 md:gap-5">
                    <div className="overflow-x-auto md:col-span-3">
                        <div className="card  p-5">
                            <h2 className="mb-2 text-lg">Shipping Address</h2>
                            <div>
                                {shippingAddress.fullname}, {shippingAddress.address},{' '}
                                {shippingAddress.city}, {shippingAddress.postcode},{' '}
                                {shippingAddress.country}
                            </div>
                            <div>
                                <Link href="/shipping/shipping">Edit</Link>
                            </div>
                        </div>
                        <div className="card  p-5">
                            <h2 className="mb-2 text-lg">Payment Method</h2>
                            <div>{paymentMethod}</div>
                            <div>
                                <Link href="/payment/payment">Edit</Link>
                            </div>
                        </div>
                        <div className="card overflow-x-auto p-5">
                            <h2 className="mb-2 text-lg">Order Items</h2>
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th className="px-5 text-left">Item</th>
                                        <th className="    p-5 text-right">Quantity</th>
                                        <th className="  p-5 text-right">Price</th>
                                        <th className="p-5 text-right">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item) => (
                                        <tr key={item.id} className="border-b">
                                            <td>
                                                <Link href={`/product/${item.slug}`}>
                                                    <a className="flex items-center">
                                                    <img
                                                    src={item.thumbnail}
                                                    alt={item.productName}
                                                    width={50}
                                                    height={50}
                                                    layout="responsive"></img>
                                                    &nbsp;
                                                    {item.productName}
                                                    </a>
                                                </Link>
                                            </td>
                                            <td className=" p-5 text-right">{item.quantity}</td>
                                            <td className="p-5 text-right">${item.retailPrice}</td>
                                            <td className="p-5 text-right">
                                                ${item.quantity * item.retailPrice}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                <Link href="/cart/Cart">Edit</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  p-5">
                            <h2 className="mb-2 text-lg">Order Summary</h2>
                            <ul>
                                <li>
                                    <div className="mb-2 flex justify-between">
                                        <div>Items</div>
                                        <div>${itemsPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-2 flex justify-between">
                                        <div>Tax</div>
                                        <div>${taxPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-2 flex justify-between">
                                        <div>Shipping</div>
                                        <div>${shippingPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="mb-2 flex justify-between">
                                        <div>Total</div>
                                        <div>${totalPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <button
                                        disabled={loading}
                                        onClick={placeOrderHandler}
                                        className="primary-button w-full"
                                    >
                                        {loading ? 'Loading...' : 'Place Order'}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}

PlaceOrderScreen.auth = true;