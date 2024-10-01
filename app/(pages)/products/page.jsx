'use client'
import Link from 'next/link';
import React from 'react'
import Navbar from '../../(components)/navbar/Navbar';

export default async function Products() {
  async function getAllProducts(){
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products', {
      next: { revalidate: 120 }
    });

    const finalRes = await res.json();
    return finalRes.data;
  }

  const allProducts = await getAllProducts();

  return (
    <div>
      <Navbar />
      <div className="grid grid-col-2 md:grid-cols-5">
        {allProducts.map((product) => (
          <Link key={product.id} href={`/productdetails/${product.id}`}>
            <div className='h-[200px] bg-[#eee] p-4 bg-white' style={{width:"200px"}}>
              <img src={product.imageCover} alt={product.title} className='h-[80%]' />
              <h1 className=''>{product.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
