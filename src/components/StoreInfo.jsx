import React, { useState } from 'react'

function StoreInfo() {
    const [toggleDescription, setToggleDescription] = useState(false);

    const handleToggleDescription = () => {
        setToggleDescription(prev => !prev);
    }

    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1C0221] mb-8 leading-tight">
                    Your Trusted Destination for Premium Electronics & Tech Products
                </h2>
                
                <div className="bg-[#F7F8FA] rounded-xl p-6 shadow-sm mb-8">
                    <div className={`prose max-w-none text-gray-700 ${toggleDescription ? '' : 'line-clamp-3'}`}>
                        <p className="text-lg mb-4">
                            At Buyers' Hunt, we're passionate about connecting you with the latest and most innovative technology products on the market. We curate a comprehensive selection of premium electronics from leading global brands and emerging tech pioneers.
                        </p>
                        
                        {toggleDescription && (
                            <>
                                <p className="text-lg mb-4">
                                    Founded in 2018, our mission has always been to provide a seamless shopping experience backed by expert knowledge and exceptional customer service. We carefully evaluate each product in our inventory to ensure it meets our standards for quality, performance, and value.
                                </p>
                                
                                <h3 className="text-xl font-semibold text-[#1C0221] mt-6 mb-3">What Sets Us Apart</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
                                        <span>Authorized retailer for over 50+ premium tech brands</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
                                        <span>Extended warranty options on most products</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
                                        <span>Certified product specialists available for consultation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
                                        <span>Hassle-free returns within 30 days of purchase</span>
                                    </li>
                                </ul>
                                
                                <h3 className="text-xl font-semibold text-[#1C0221] mt-6 mb-3">Our Product Categories</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="flex items-center mb-2">
                                            <i className="ri-smartphone-line text-2xl text-[#1C0221] mr-2"></i>
                                            <h4 className="font-medium">Smartphones & Accessories</h4>
                                        </div>
                                        <p className="text-sm text-gray-600">Latest models from Apple, Samsung, Google and more</p>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="flex items-center mb-2">
                                            <i className="ri-computer-line text-2xl text-[#1C0221] mr-2"></i>
                                            <h4 className="font-medium">Computers & Laptops</h4>
                                        </div>
                                        <p className="text-sm text-gray-600">High-performance machines for work and gaming</p>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="flex items-center mb-2">
                                            <i className="ri-headphone-line text-2xl text-[#1C0221] mr-2"></i>
                                            <h4 className="font-medium">Audio & Home Entertainment</h4>
                                        </div>
                                        <p className="text-sm text-gray-600">Premium sound systems, headphones and smart devices</p>
                                    </div>
                                </div>
                                
                                <p className="text-lg mt-6">
                                    Whether you're a tech enthusiast looking for the latest gadgets, a professional seeking reliable tools, or simply shopping for everyday electronics, Buyers' Hunt is your trusted partner in navigating the ever-evolving world of technology.
                                </p>
                            </>
                        )}
                    </div>
                    
                    <button 
                        onClick={handleToggleDescription}
                        className="mt-4 flex items-center text-[#1C0221] font-medium hover:text-[#1C0221]/70 transition-colors"
                    >
                        {toggleDescription ? (
                            <>
                                Read Less <i className="ri-arrow-up-s-line ml-1"></i>
                            </>
                        ) : (
                            <>
                                Read More <i className="ri-arrow-down-s-line ml-1"></i>
                            </>
                        )}
                    </button>
                </div>
                
                {/* Statistics Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-3xl font-bold text-[#1C0221]">5000+</div>
                        <div className="text-gray-600">Products</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-3xl font-bold text-[#1C0221]">50+</div>
                        <div className="text-gray-600">Brands</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-3xl font-bold text-[#1C0221]">15K+</div>
                        <div className="text-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-3xl font-bold text-[#1C0221]">24/7</div>
                        <div className="text-gray-600">Customer Support</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreInfo;