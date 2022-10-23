import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import ProductHome from '../components/kicksHome'
import AirJordan from '../components/airJordan'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'

export default function kicksPage({product})
{

    return (
            <><Head>
            <title>Hype Heads Full Stack App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {data.products.map((product) => (
                    <ProductItem product={product} key={product.slug}></ProductItem>
                ))}
            </div></>
   
        // <div>
        //    
        //     <p >Air Jordan</p>
        //     <AirJordan/>
        //     <p>New Balance</p>
        //     <ProductHome/>
        //     <p>Nike</p>
        //     <ProductHome/>
        //     <p>Converse</p>
        //     <ProductHome/>
        //     <p>UGG</p>
        //     <ProductHome/>
        //     <p>Vans</p>
        //     <ProductHome/>
        //     <Pagination defaultCurrent={1} total={5} />
            
        // </div>
        
        
    )
}
