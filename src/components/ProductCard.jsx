import React, { useState } from 'react';

function ProductCard({ product }) {
    const [isInStock, setIsInStock] = useState(product.stockCount);

    return (
        <div className="bg-[url(/assets/images/productBG.jpg)] bg-cover bg-center w-[400px] min-h-[500px] max-h-[800px] rounded-lg shadow-lg flex flex-col items-center text-center overflow-hidden relative">
            {/* Product Image & Overlays */}
            <div className="relative w-full h-[350px]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />

                {/* Left side labels */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-green-500 uppercase text-white text-[10px] px-2 py-1 rounded-2xl">New</span>
                    <span className="bg-red-500 uppercase text-white text-[10px] px-2 py-1 rounded-2xl">Hot</span>
                </div>

                {/* Right side icons (Remix Icons) */}
                <div className="absolute top-4 right-4 flex flex-col gap-3">
                    <button className="px-1 rounded-md hover:bg-gray-200 transition">
                        <i className="ri-shuffle-fill text-gray-600 text-lg"></i> {/* Compare Icon */}
                    </button>
                    <button className="px-1 rounded-md hover:bg-gray-200 transition">
                        <i className="ri-search-line text-gray-600 text-lg"></i> {/* Search Icon */}
                    </button>
                    <button className="px-1 rounded-md hover:bg-gray-200 transition">
                        {product.isFavourte ? <i className="ri-heart-fill text-red-500 text-lg"></i> : <i className="ri-heart-fill text-gray-600 text-lg"></i>} {/* Favorite Icon */}
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col items-center bg-opacity-90 w-full">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

                {/* Product Rating */}
                <div className="flex items-center justify-center mt-1">
                    <span className="text-yellow-400 flex items-center text-lg font-semibold">
                        {product.rating} <i className="ri-star-fill ml-1"></i>
                    </span>
                    <span className="text-gray-500 ml-2">({product.reviews} reviews)</span>
                </div>

                <p className="text-gray-500 mt-2">Category: {product.category}</p>
                {isInStock ? (
                    <p className="text-green-600">In Stock</p>
                ) : (
                    <p className="text-red-600">Out of Stock</p>
                )}

                {/* Price before Add to Cart button */}
                <p className="font-bold text-[#1E2749] text-xl mt-4">
                    <span className="font-[SutonnyMJ]">৳</span> {product.price}
                </p>

                <button className="uppercase rounded-2xl font-bold w-[90%] py-2 bg-[#1E2749] text-white my-2">
                    Add to cart
                </button>

                {/* Product Type Details */}
                <ul className="mt-1 text-gray-500">
                    {product.features?.type && <li>Type: {product.features.type}</li>}
                    {product.features?.connectionType && <li>Connection: {product.features.connectionType}</li>}
                    {product.features?.microphone && <li>Microphone: {product.features.microphone}</li>}
                    {product.features?.plugType && <li>Plug: {product.features.plugType}</li>}
                    {product.features?.cableLength && <li>Cable Length: {product.features.cableLength}</li>}
                </ul>
            </div>
        </div>
    );
}

export default ProductCard;
