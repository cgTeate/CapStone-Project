import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import AirJordan from '../components/AirJordan'
import Header from '../components/Header'
import Layout from '../components/Layout'
import ProductItem from '../components/ProductCard'
import { getApparel, getKicks } from '../pages/api/client'
import data from '../utils/data'

export default function KicksPage({product})
{
    const [kicks, setKicks] = useState([]);

        const fetchKicks = () => {
            // {
             getKicks()
             .then(res => setKicks(res.data))
        }

  useEffect(()=>{
   console.log("component is mounted");
   fetchKicks();
  }, []);

    return (
            <Layout>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {/* {data.products.map((product) => (
                    <ProductItem product={product} key={product.slug}></ProductItem>
                ))} */}
                {kicks.map((kick) => (
                    <ProductItem product={kick} key={kick.slug}></ProductItem>
                ))}
            </div>
            </Layout>
   
       
        
        
    )
}
