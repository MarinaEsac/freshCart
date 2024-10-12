import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../(components)/navbar/Navbar';
import Image from 'next/image';

 async function Products({ searchParams }) {
  const searchTerm = searchParams?.search || '';

  const res = await fetch('https://ecommerce.routemisr.com/api/v1/products');
  const data = await res.json();

  const regex = new RegExp(searchTerm, 'i');
  const filteredProducts = data.data.filter((product) => regex.test(product.title));

  return (
    <div>
      <Navbar />

      <div className="w-full flex justify-center mt-4">
        <form action="/products" method="get" className="flex">
        <input
            type="text"
            name="search"
            placeholder="Search FreshCart.eg"
            defaultValue={searchTerm}
            className="w-[300px] md:w-[400px] p-2 border border-gray-300 rounded"
            style={{ borderRadius: '4px', paddingLeft: '10px', height: '35px', border: '1px solid #ccc' }}
          />
       <button
            type="submit"
            className="p-2 bg-[#f0c14b] text-[#001F3F] border border-[#a88734] rounded ml-2"
            style={{ height: '35px' }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-[25px] h-[25px]" />
          </button>
        </form>
      </div>

      <div className="grid grid-col-2 md:grid-cols-5 gap-4 mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <div className="h-[200px] bg-[#eee] p-4 bg-white" style={{ width: '200px' }}>
                <Image
                  src={product.imageCover}
                  alt={product.title}
                  className="h-[80%]"
                  width={100}
                  height={100}
                />
                <h1>{product.title}</h1>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-5 text-center">No products found</div>
        )}
      </div>
    </div>
  );
}
export default Products;