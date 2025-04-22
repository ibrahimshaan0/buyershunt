import React from "react";
import PromoBanner from "../components/PromoBanner";
import PopularProducts from "../components/PopularProducts";
import PopularCategories from "../components/PopularCategories";
import OurArticles from "../components/OurArticles";
import StoreInfo from "../components/StoreInfo";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <div className="bg-gray-200">
            <h2 className="text-center text-gray-900 text-4xl pt-5 font-bold mb-4">Welcome to BUYERS' HUNT!</h2>
            <p className="text-center text-lg text-gray-900 mb-8">
                Discover our exclusive range of products and shop now!
            </p>
            <PromoBanner />
            <PopularProducts />
            <PopularCategories />
            <OurArticles />
            <div className="p-150 h-[300px]"></div>
            <StoreInfo />
            <div className="p-150 h-[150px]"></div>
            <Footer />
        </div>
    );
};

export default Home;



// color backup

// 1E2749 - dark blue
// F7F8FA - light gray