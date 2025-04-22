import React from "react";
import ProductCard from "./ProductCard";

function PopularProducts() {
    const popularProcucts = [
        {
            id: 1,
            name: "Havit H2232d 3.5mm Jack + USB Black Gaming Headphone with Microphone",
            image: "/assets/images/products/black-headphone-no-brand.jpeg",
            price: 150,
            rating: 4.5,
            reviews: 20,
            category: "Headphone",
            stockCount: 100,
            isFavourte: true,
            features: {
                type: "gaming",
                connectionType: "wired",
                microphone: "yes",
                plugType: "3.5mm",
                cableLength: "7.2ft",

            }
        },
        {
            id: 2,
            name: "Polariod Camera",
            image: "/assets/images/products/polaroid-camera.jpg",
            price: 2000,
            rating: 4.8,
            reviews: 100,
            category: "Camera",
            stockCount: 100,
            isFavourte: false,
            features: {
                type: "digital",
                connectionType: "",
                microphone: "yes",
                plugType: "3.5mm",
                cableLength: "7.2ft",

            }
        },
        {
            id: 3,
            name: "Black Headphone",
            image: "/assets/images/products/black-headphone-no-brand.jpeg",
            price: 300,
            rating: 4.9,
            reviews: 400,
            category: "Category 3",
            stockCount: 100,
            isFavourte: false,
            features: {
                type: "gaming",
                connectionType: "wired",
                microphone: "yes",
                plugType: "3.5mm",
                cableLength: "7.2ft",

            }
        },
        {
            id: 4,
            name: "Polariod Camera",
            image: "/assets/images/products/polaroid-camera.jpg",
            price: 400,
            rating: 4.7,
            reviews: 500,
            category: "Category 4",
            stockCount: 100,
            isFavourte: false,
            features: {
                type: "gaming",
                connectionType: "wired",
                microphone: "yes",
                plugType: "3.5mm",
                cableLength: "7.2ft",

            }
        },
        {
            id: 5,
            name: "Black Headphone",
            image: "/assets/images/products/black-headphone-no-brand.jpeg",
            price: 500,
            rating: 4.6,
            reviews: 600,
            category: "Category 5",
            stockCount: 0,
            isFavourte: false,
            features: {
                type: "",
                connectionType: "",
                microphone: "",
                plugType: "3.5mm",
                cableLength: "7.2ft",

            }
        },
    ];

    return (
        <div className="w-[85vw] mx-auto">
            <h2 className="text-[2.5rem] font-bold my-[8vw] md:mt-[100px] lg:mt-[150px] xl:mt-[150px] text-center">
                Our Best Products
            </h2>
            <div className="flex flex-row justify-center flex-wrap gap-4 px-4"> 
                {popularProcucts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default PopularProducts;
