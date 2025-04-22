import React, { useState } from "react";
import { Link } from "react-router-dom";
import siteLogo from "/assets/images/BHLogoWhite.svg";

const Navbar = () => {
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [isLocDropdownOpen, setIsLocDropdownOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [isEntedDD, setIsEnteredDD] = useState(false);

    return (
        <>
            {/* Top Info Bar */}
            {/* OLD Color : 000814 */}
            <div className="bg-[#000814] text-white py-2 px-8 flex justify-between items-center text-sm">
                {/* Phone */}
                <div className="flex items-center space-x-2">
                    <i className="ri-phone-line"></i>
                    <span>112233</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-2">
                    <i className="ri-mail-line"></i>
                    <span>info@buyershunt.com</span>
                </div>

                {/* Dropdowns */}
                <div className="flex items-center space-x-4">
                    {/* Language Dropdown */}
                    <div className="relative">
                        <button
                            onMouseEnter={() => setIsLangDropdownOpen(true)}
                            onMouseLeave={() => {
                                if (!isEntedDD) {
                                    setTimeout(() => setIsLangDropdownOpen(false), 300)
                                }
                            }}
                            className="flex items-center space-x-1 hover:text-yellow-500 focus:outline-none"
                        >
                            <span>ENG</span>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        {isLangDropdownOpen && (
                            <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-md z-20">
                                <button
                                    onClick={() => setIsLangDropdownOpen(false)}
                                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                                >
                                    ENG
                                </button>
                                <button
                                    onClick={() => setIsLangDropdownOpen(false)}
                                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                                >
                                    BN
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Location Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLocDropdownOpen(!isLocDropdownOpen)}
                            className="flex items-center space-x-1 hover:text-yellow-500 focus:outline-none"
                        >
                            <span>Bangladesh</span>
                            <i className="ri-arrow-down-s-line"></i>
                        </button>
                        {isLocDropdownOpen && (
                            <div className="absolute right-0 mt-2 bg-[#F4F2F3] text-[#30343F] rounded shadow-md z-20">
                                <button
                                    onClick={() => setIsLocDropdownOpen(false)}
                                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                                >
                                    Bangladesh
                                </button>
                                <button
                                    onClick={() => setIsLocDropdownOpen(false)}
                                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                                >
                                    China
                                </button>
                                <button
                                    onClick={() => setIsLocDropdownOpen(false)}
                                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                                >
                                    USA
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            {/* OLD Color:  001d3d */}
            <nav className="bg-[#1C0221] text-[#F4F2F3] py-4 px-8 flex justify-between items-center sticky top-0 z-10">
                {/* Site Title */}
                <div className="siteTitle flex flex-row gap-5 text-gray-300 ml-2 items-center">
                    <img className="w-[100px] " src={siteLogo} alt="Site Logo" />
                    <h1 className="text-4xl font-bold text-gray-300">Buyers' Hunt</h1>
                </div>

                {/* Categories Dropdown */}
                <div
                    className="relative mx-8"
                    onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                    onMouseLeave={() => {
                        if (!isEntedDD) {
                            setTimeout(() => setIsCategoryDropdownOpen(false), 300)
                        }
                    }}
                >
                    <button className="flex items-center space-x-1 hover:text-yellow-500 focus:outline-none z-[5]">
                        <span>Categories</span>
                        <i className="ri-arrow-down-s-line"></i>
                    </button>
                    {isCategoryDropdownOpen && (
                        <div>
                            <div
                                onMouseEnter={() => setIsEnteredDD(true)}
                                onMouseLeave={() => {
                                    setIsEnteredDD(false);
                                    setTimeout(() => setIsCategoryDropdownOpen(false), 300);
                                }}
                                className="absolute left-0 mt-2 bg-[#F4F2F3] text-gray-800 rounded shadow-md w-48"
                            >
                                <Link
                                    to="/categories/electronics"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    NoteBook / Laptop
                                </Link>
                                <Link
                                    to="/categories/electronics"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Computer
                                </Link>
                                <Link
                                    to="/categories/clothing"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Accesories
                                </Link>
                                <Link
                                    to="/categories/home-appliances"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Home Appliances
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                {/* What's New Button */}
                <button className="text-white bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-lg shadow-md">
                    What's New
                </button>

                {/* Search Bar */}
                <div className="flex items-center relative w-1/3 ml-8">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full py-3 px-4 pl-10 bg-gray[#F4F2F3] text-gray-800 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <i className="ri-search-line absolute left-3 text-gray-500 text-lg"></i>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="hover:text-yellow-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-yellow-500">Products</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-yellow-500">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-yellow-500">
                            <i className="ri-shopping-cart-line text-xl"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="hover:text-yellow-500">Login</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;


// color backup

// 1E2749 - dark blue
// 273469 - dark blue (optional)
// 30343F - dark blue (optional)