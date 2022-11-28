
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
import { getApparel, getKicks, getKickss } from '../pages/api/client'
import ApparelPage from './ApparelPage'
import KicksPage from './KicksPage'

export default function Home({product}) {

    const mystyle = {
        color: "black",
        //backgroundColor: "Gray",
        padding: "30px",
        fontFamily: "Garamond",
        fontSize: "30px",
        // fontWeight: "bold",
      };
    const [kicks, setKicks] = useState([]);
    const [apparels, setApparels] = useState([]);
    
    //Kicks Pagination
    const[kicksPerPage, setKicksPerPage] = useState(12);
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
    //Apparel Pagination
    const[apparelsPerPage, setApparelsPerPage] = useState(12);
    const [apparelsCurrentPage, setApparelsCurrentPage] = useState(1);

    const numOfApparelsPages = Math.ceil(kicks.length/apparelsPerPage);
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
             getKicks()
             .then(res => setKicks(res.data))
        }
        const fetchApparel = () => {
             getApparel()
             .then(res => setApparels(res.data))
        }
        

  useEffect(()=>{
   console.log("component is mounted");
   fetchKicks();
   fetchApparel();
  }, []);

  return (
      <Layout title="Home Page">
            <Slider/>
            <div>
                <p style={mystyle}>Kicks</p>
                {/* <KicksHome/> */}
                {/* <KicksPage/> */}
                <select onChange={(e)=> setKicksPerPage(e.target.value)}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
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
            
            <div>
                <p style={mystyle}>Apparel</p>
                {/* <ApparelHome/> */}
                {/* <ApparelPage/> */}
                <select onChange={(e)=> setApparelsPerPage(e.target.value)}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
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
            
            {/* <p style={mystyle}>Kicks</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {kicks.map((kick) => (
                    <ProductCard product={kick} key={kick.slug}></ProductCard>
                ))}
            </div>
            <p style={mystyle}>Apparel</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {apparels.map((apparel) => (
                    <ProductCard product={apparel} key={apparel.slug}></ProductCard>
                ))}
            </div> */}
            
      </Layout>
   
  )
}
