"use client";
import { PlusCircleIcon, SearchIcon, SearchXIcon } from "lucide-react";
import { useGetProductsQuery } from "../state/api";
import { useState } from "react";
import Header from "../(components)/Header";
import Rating from "../(components)/Rating";
import Image from "next/image";

const Products = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [ismodalOpen, setIsmodalOpen] = useState(false);

  const { data: products, isError, isLoading } = useGetProductsQuery();
  console.log(products);

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="py-4 text-center text-red-50">Failed to get products</div>
    );
  }

  return (
    <div className="pb-5 mx-auto w-full">
      {/*Search Product*/}
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
          <input
            className="w-full py-2 px4 rounded bg-white "
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            type="text"
            placeholder="Search products"
          />
        </div>
      </div>

       {/* HEADER */}
       <div className="flex justify-between items-center mb-6">
        <Header name="Products" />
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" /> Create
          Product
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
        {isLoading ? (
            <div>Loading...</div>
        ):(
            products?.map((product) => (
                <div key={product.productId} className="border shadow rounded-md p-4 max-w-full w-full mx-auto">
                    <div>
                    <Image width={150}
                  height={150}
                  className="mb-3 rounded-2xl w-36 h-36" alt={product.name}/>

                    </div>
                    <h3>{product.name}</h3>
                    <p>Stock:{product.stockQuantity}</p>
                    <div>
                    {product.rating && (
                  <div className="flex items-center mt-2">
                    <Rating rating={product.rating} />
                  </div>
                )}
                    </div>

                </div>
            ))
        )}

      </div>
    </div>
  );
};

export default Products;
