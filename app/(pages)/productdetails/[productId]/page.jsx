import React from 'react';
import Navbar from '../../../(components)/navbar/Navbar';

export default async function ProductDetailsId({ params }) {
  console.log(params.productId);

  async function getProductDetails() {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${params.productId}`);
    const finalRes = await res.json();
    return finalRes.data;
  }

  const objDetails = await getProductDetails();

  return (
    <div>
      <Navbar/>
      <div className="grid h-[635px] bg-[#eee]">
        <div className="flex justify-center items-center w-full">
          <div className="bg-white p-4 text-center">
            <img src={objDetails.imageCover} className="w-[350px] mx-auto" alt={objDetails.title} />
            <h6 className="text-center mt-4 font-bold font-serif text-lg">
              {objDetails.title}
            </h6> 
          </div>
        </div>
      </div>
    </div>
  );
}



