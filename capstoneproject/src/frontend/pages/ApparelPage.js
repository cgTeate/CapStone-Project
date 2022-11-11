import React from 'react'
import { Pagination } from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import ProductItem2 from '../components/productItem2'
import ApparelHome from '../components/apparelHome'
import data2 from '../utils/data2'
import Layout from '../components/Layout'
import { useState, useEffect} from 'react'
import { getKicks, getApparel } from '../pages/api/client'
import ProductItem from '../components/ProductItem'


export default function ApparelPage({product})
{
    const [apparels, setApparels] = useState([]);
    //show the icon while it's fetching our data
    const[fetching, setFetching] = useState(true);

        const fetchKicks = () => {
            // {
             getApparel()
             .then(res => setApparels(res.data))
        }
        

  useEffect(()=>{
   console.log("component is mounted");
   fetchKicks();
  }, []);
    return (
        <Layout>
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {data2.products2.map((product2) => (
                    <ProductItem2 product2={product2} key={product2.Name}></ProductItem2>
                ))}
            </div> */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {apparels.map((apparel) => (
                    <ProductItem product={apparel} key={apparel.slug}></ProductItem>
                ))}
            </div>

            {/* <p>BAPE</p>
            <ApparelHome/>
            <p>Fear Of God</p>
            <ApparelHome/>
            <p>Gucci</p>
            <ApparelHome/>
            <p>Off-White</p>
            <ApparelHome/>
            <p>Supreme</p>
            <ApparelHome/>
            <p>Vlone</p>
            <ApparelHome/>
            <Pagination defaultCurrent={1} total={5} /> */}
        </Layout>
    )
}
