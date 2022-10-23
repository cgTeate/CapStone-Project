import Link from 'next/link';
import React from 'react';

export default function ProductItem2({product2})
{
    return(
        <div className="card">
            <Link href={`/product2/${product2.Name}`}>
             <a>
                <img 
                    src={product2.thumbnail}
                    className="rounded shadow"
                />
            </a>   
            </Link>
        <div className="flex flex-col items-center justify-center p-5">
            <Link href={`/product2/${product2.Name}`}>
                <a>
                <h2 className="text-lg">{product2.Name}</h2>
                </a> 
            </Link>
            <p className="mb-2">{product2.brand}</p>
            <p>{product2.retailPrice}</p>
            <button className="primary-button" type="button">
                Add to cart
            </button>
        </div>
        </div>
    )
}