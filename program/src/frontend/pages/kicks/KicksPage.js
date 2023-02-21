import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Layout from '../../layouts/Layout'
import data from '../../utils/data'
import { getApparel, getKicks } from '../api/client'

export default function KicksPage({product})
{
    const mystyle = {
        color: "black",
        padding: "30px",
        fontFamily: "Garamond",
        fontSize: "30px",
      };
    const [kicks, setKicks] = useState([]);
    
    //Kicks Pagination
    const[kicksPerPage, setKicksPerPage] = useState(8);
    const [kicksCurrentPage, setKicksCurrentPage] = useState(1);

    const numOfKicksPages = Math.ceil(kicks.length/kicksPerPage);
    const kicksPages = [...Array(numOfKicksPages + 1).keys()].slice(1);

    const indexOfLastKick = kicksCurrentPage * kicksPerPage;
    const indexOfFirstKick = indexOfLastKick - kicksPerPage;

    const visibleKicks = kicks.slice(indexOfFirstKick, indexOfLastKick);

    const kicksPrevPageHandler = () => {
        if(kicksCurrentPage!==1) setKicksCurrentPage(kicksCurrentPage - 1);
    }
    const kicksNextPageHandler = () => {
        if(kicksCurrentPage!==numOfKicksPages) setKicksCurrentPage(kicksCurrentPage + 1);
    }

        const fetchKicks = () => {
             getKicks()
             .then(res => setKicks(res.data))
        }

  useEffect(()=>{
   console.log("component is mounted");
   fetchKicks();
  }, []);

    return (
            <Layout title="Kicks Page">
            <div>
                <p style={mystyle}>Kicks</p>
                <div className="flex">
                <p>Per Page</p>
                <select onChange={(e)=> setKicksPerPage(e.target.value)}>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                </select>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {visibleKicks.map((kick) => (
                    <ProductCard product={kick} key={kick.slug}></ProductCard>
                ))}
                </div>
                <div className="flex justify-between items-center">
                    <span className="cursor-pointer" onClick={kicksPrevPageHandler}>Prev</span>
                    <p>
                    {kicksPages.map((page)=> (
                        <span key={page.slug} 
                        onClick={() => setKicksCurrentPage(page)}
                        className={`${kicksCurrentPage === page ? "active" : "cursor-pointer"}`}
                        >
                            {`${page} | `}
                        </span>
                    ))}
                    </p>
                    <span className="cursor-pointer" onClick={kicksNextPageHandler}>Next</span>
                </div>
            </div>
            </Layout>
   
       
        
        
    )
}
