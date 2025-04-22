import React from 'react'

function TopCategory({ category }) {
    return (
        <div key={category.id} className="bg-[url(/assets/images/productBG.jpg)] bg-cover bg-center w-[400px] h-[500px] rounded-lg shadow-lg flex flex-col items-center text-center overflow-hidden">
            <img
                src={category.image}
                alt={category.name}
                className="w-full h-[350px] object-cover"
            />
            <div className="p-4 flex flex-col items-center mt-4  bg-opacity-90 w-full">
                <h3 className="text-lg font-bold text-gray-800">{category.name}</h3>
                <p className="text-sm">{category.stockCount} Products</p>
            </div>
        </div>
    )
}

export default TopCategory