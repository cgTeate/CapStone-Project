import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import ProductHome from '../components/KicksHome'
import AirJordan from '../components/AirJordan'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'
import Layout from '../components/Layout'

export default function KicksPage({product})
{

    return (
            <Layout>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {data.products.map((product) => (
                    <ProductItem product={product} key={product.slug}></ProductItem>
                ))}
            </div>
            </Layout>
   
       
        
        
    )
}
