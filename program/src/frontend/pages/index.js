
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../layouts/Layout'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
import { getApparel, getKicks, getKickss } from './api/client'
import ApparelPage from '../pages/header/ApparelPage'
import KicksPage from '../pages/header/KicksPage'
import {useRouter} from 'next/router'
import {useRef} from 'react'
import Link from "next/link";

export default function Home({product}) {
    const router = useRouter();
    const searchInputRef = useRef(null)
    // function search(event) 
    // {
    //     event.preventDefault();
    //     const term  = searchInputRef.current.value;
    //     if(!term.trim()) return
    //     router.push(`/search?term={term}`)
    // }
    
    function search(event) {
        event.preventDefault();
        const term = searchInputRef.current.value;
        if (!term.trim()) return;
        router.push(`/search?term=${term}`); // interpolate `term` variable
      }
      
    const mystyle = {
        color: "black",
        //backgroundColor: "Gray",
        padding: "30px",
        fontFamily: "Garamond",
        fontSize: "30px",
        // fontWeight: "bold",
      };
      const mystyle2 = {
        color: "black",
        //backgroundColor: "Gray",
        padding: "1px",
        fontFamily: "Garamond",
        fontSize: "16px",
        // fontWeight: "bold",
      };
    const [kicks, setKicks] = useState([]);
    const [apparels, setApparels] = useState([]);
    
    //Kicks Pagination
    const[kicksPerPage, setKicksPerPage] = useState(4);
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
    const[apparelsPerPage, setApparelsPerPage] = useState(4);
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {visibleKicks.map((kick) => (
                    <ProductCard product={kick} key={kick.slug}></ProductCard>
                ))}
                {visibleKicks.map((kick, index) => (
                    <ProductCard product={kick} key={index}></ProductCard>
                ))}
                </div>
                <div className="flex justify-between items-center">
                    <span className="cursor-pointer mystyle2" onClick={kicksPrevPageHandler}>Prev</span>
                    <p>
                    {kicksPages.map((page)=> (
                        <span key={page.slug} 
                        onClick={() => setKicksCurrentPage(page)}
                        className={`${kicksCurrentPage === page ? "active mystyle2" : "cursor-pointer mystyle2"}`}
                        >
                            {`${page} | `}
                        </span>
                    ))}
                    </p>
                    <span className="cursor-pointer mystyle2" onClick={kicksNextPageHandler}>Next</span>
                </div>
                <Link href="/KicksPage">
                    <a>
                    <h1 style={mystyle2}>View More</h1>
                    </a>
                </Link>
            </div>
            
            <div>
                <p style={mystyle}>Apparel</p>
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
                        className={`${apparelsCurrentPage === page ? "active mystyle2" : "cursor-pointer mystyle2"}`}
                        >
                            {`${page} | `}
                        </span>
                    ))}
                    </p>
                    <span className="cursor-pointer mystyle2" onClick={apparelsNextPageHandler}>Next</span>
                </div>
                <Link href="/ApparelPage">
                    <a>
                     <h1 style={mystyle2}>View More</h1>
                    </a>
                </Link>
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
