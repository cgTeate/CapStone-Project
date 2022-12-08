import { Pagination } from 'antd'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Layout from '../components/Layout'
import ProductCard from '../../components/ProductCard'
import { getApparel, getKicks } from '../api/client'
import data2 from '../../utils/data2'


export default function ApparelPage({product})
{
    const mystyle = {
        color: "black",
        padding: "30px",
        fontFamily: "Garamond",
        fontSize: "30px",
      };
    const [apparels, setApparels] = useState([]);
    //Apparel Pagination
    const[apparelsPerPage, setApparelsPerPage] = useState(8);
    const [apparelsCurrentPage, setApparelsCurrentPage] = useState(1);

    const numOfApparelsPages = Math.ceil(apparels.length/apparelsPerPage);
    const apparelsPages = [...Array(numOfApparelsPages + 1).keys()].slice(1);

    const indexOfLastApparel = apparelsCurrentPage * apparelsPerPage;
    const indexOfFirstApparel = indexOfLastApparel - apparelsPerPage; 

    const visibleApparels = apparels.slice(indexOfFirstApparel, indexOfLastApparel);

    const apparelsPrevPageHandler = () => {
        if(kicksCurrentPage!==1) setApparelsCurrentPage(apparelsCurrentPage - 1);
    }
    const apparelsNextPageHandler = () => {
        if(apparelsCurrentPage!==numOfApparelsPages) setApparelsCurrentPage(apparelsCurrentPage + 1);
    }

        const fetchKicks = () => {
             getApparel()
             .then(res => setApparels(res.data))
        }
        

  useEffect(()=>{
   console.log("component is mounted");
   fetchKicks();
  }, []);
    return (
        <Layout title="Apparel Page">
            <div>
                <p style={mystyle}>Apparel</p>
                <div className="flex">
                <p>Per Page</p>
                <select onChange={(e)=> setApparelsPerPage(e.target.value)}>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                </select>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {visibleApparels.map((apparel) => (
                    <ProductCard product={apparel} key={apparel.slug}></ProductCard>
                ))}
                </div>
                <div className="flex justify-between items-center">
                    <span className="cursor-pointer" onClick={apparelsPrevPageHandler}>Prev</span>
                    <p>
                    {apparelsPages.map((page)=> (
                        <span key={page.slug} 
                        onClick={() => setApparelsCurrentPage(page)}
                        className={`${apparelsCurrentPage === page ? "active" : "cursor-pointer"}`}
                        >
                            {`${page} | `}
                        </span>
                    ))}
                    </p>
                    <span className="cursor-pointer" onClick={apparelsNextPageHandler}>Next</span>
                </div>
            </div>
        </Layout>
    )
}
