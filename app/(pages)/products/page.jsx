'use client'
import Link from 'next/link';
import React from 'react'
import Navbar from '../../(components)/navbar/Navbar';

export default async function Products() {
async  function getAllProducts(){
  const res = await  fetch('https://ecommerce.routemisr.com/api/v1/products',{
    next:{revalidate:120}
  } )
    //   {
    //   init 
    // }
    // json bta5od time
  const finalRes = await res.json()
  return finalRes.data;
  }
const allProducts= await getAllProducts()
  return <div>
    <Navbar />
  {/* <div className='grid grid-cols-6 h-screen bg-[#eee]'> */}
    {/* <div className='bg-white p-4'>
      <img src='' alt=''/>
      <h6>Title</h6>
    </div>
    <div className='p-4'> 
     
    </div> */}
  <div className="grid grid-col-2 md:grid-cols-5">
    {allProducts.map((product,idx)=>  
    <Link href={`/productdetails/${product.id}`}>
    <div key={idx} className='h-[200px] bg-[#eee] p-4 bg-white' style={{width:"200px"}}>
      <img src={product.imageCover} alt={product.title} className='h-[80%]'/>
      <h1 className=''>{product.title}</h1>
      
    </div>
    </Link>
  )}
    </div>
  {/* </div> */}
  </div>
}
//flex grid grid-cols-6