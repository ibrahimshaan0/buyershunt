import React from 'react'
import { Link } from 'react-router-dom';

const date = new Date();

function Footer() {
    return (
        <footer className='w-full pt-10 flex items-center flex-col gap-10 bg-[#1C0221] text-[#F4F2F3]'>
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 lg:px-8 gap-8 md:gap-4">
                {/* First Column - Location & Social */}
                <div className='w-full md:w-1/3 max-w-sm'>
                    <div className="w-full flex flex-row items-center gap-4 py-4 px-6 rounded-xl border border-[#F4F2F3]/30 hover:border-[#F4F2F3] transition-all duration-300">
                        <i className="ri-map-pin-line text-3xl p-3 bg-[#F4F2F3]/10 rounded-full text-[#F4F2F3]"></i>
                        <div>
                            <h4 className='text-left text-xl font-bold'>Location</h4>
                            <p className='text-left text-[#F4F2F3]/80'>Rajshahi, Bangladesh</p>
                        </div>
                    </div>
                    <div className="py-6">
                        <h4 className="text-left text-2xl font-bold mb-3">Follow Us</h4>
                        <div className="flex flex-row flex-wrap items-center gap-4 py-2">
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F4F2F3]/10 hover:bg-[#F4F2F3]/20 transition-all duration-300">
                                <i className="ri-facebook-fill text-xl"></i>
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F4F2F3]/10 hover:bg-[#F4F2F3]/20 transition-all duration-300">
                                <i className="ri-linkedin-fill text-xl"></i>
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F4F2F3]/10 hover:bg-[#F4F2F3]/20 transition-all duration-300">
                                <i className="ri-twitter-x-fill text-xl"></i>
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F4F2F3]/10 hover:bg-[#F4F2F3]/20 transition-all duration-300">
                                <i className="ri-instagram-fill text-xl"></i>
                            </a>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-left text-xl font-bold mb-3">Subscribe to Our Newsletter</h4>
                            <div className="flex mt-2">
                                <input type="email" placeholder="Your email" className="bg-[#F4F2F3]/10 border border-[#F4F2F3]/30 rounded-l-lg py-2 px-4 focus:outline-none focus:border-[#F4F2F3] flex-grow" />
                                <button className="bg-[#F4F2F3] text-[#1C0221] font-bold py-2 px-4 rounded-r-lg hover:bg-[#F4F2F3]/90 transition-all duration-300">
                                    <i className="ri-send-plane-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Column - Important Topics */}
                <div className='w-full md:w-1/3'>
                    <h3 className="text-xl font-bold pb-4 border-b border-[#F4F2F3]/20 mb-4">Important Topics</h3>
                    <div className="flex flex-row justify-between gap-4">
                        <div className="flex-1">
                            <ul>
                                <li className="mb-2">
                                    <Link to="#" className="hover:text-[#F4F2F3]/70 transition-colors duration-200 flex items-center">
                                        <i className="ri-arrow-right-s-line mr-2"></i>
                                        Online Delivery
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="hover:text-[#F4F2F3]/70 transition-colors duration-200 flex items-center">
                                        <i className="ri-arrow-right-s-line mr-2"></i>
                                        Our Blogs and Posts
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="hover:text-[#F4F2F3]/70 transition-colors duration-200 flex items-center">
                                        <i className="ri-arrow-right-s-line mr-2"></i>
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="hover:text-[#F4F2F3]/70 transition-colors duration-200 flex items-center">
                                        <i className="ri-arrow-right-s-line mr-2"></i>
                                        Our Warehouses
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="hover:text-[#F4F2F3]/70 transition-colors duration-200 flex items-center">
                                        <i className="ri-arrow-right-s-line mr-2"></i>
                                        Repair Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <ul>
                                <li className="mb-2">
                                    <Link to="#" className="hover:text-[#F4F2F3]/70 transition-colors duration-200 flex items-center">
                                        <i className="ri-arrow-right-s-line mr-2"></i>
                                        About Us
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="hover:text-[#F4F2F3]/70 transition-colors duration-200 flex items-center">
                                        <i className="ri-arrow-right-s-line mr-2"></i>
                                        Brands
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="hover:text-[#F4F2F3]/70 transition-colors duration-200 flex items-center">
                                        <i className="ri-arrow-right-s-line mr-2"></i>
                                        Payment & Refund
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="hover:text-[#F4F2F3]/70 transition-colors duration-200 flex items-center">
                                        <i className="ri-arrow-right-s-line mr-2"></i>
                                        Warranty & Returns
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="hover:text-[#F4F2F3]/70 transition-colors duration-200 flex items-center">
                                        <i className="ri-arrow-right-s-line mr-2"></i>
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Third Column - Contact & Hours */}
                <div className='w-full md:w-1/3 max-w-sm'>
                    <h3 className="text-xl font-bold pb-4 border-b border-[#F4F2F3]/20 mb-4">Contact Us</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <i className="ri-phone-fill text-xl bg-[#F4F2F3]/10 p-2 rounded-full"></i>
                            <div>
                                <p className="text-sm text-[#F4F2F3]/70">Phone</p>
                                <p className="font-medium">+880 1234-567890</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="ri-mail-fill text-xl bg-[#F4F2F3]/10 p-2 rounded-full"></i>
                            <div>
                                <p className="text-sm text-[#F4F2F3]/70">Email</p>
                                <p className="font-medium">info@buyershunt.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="ri-time-fill text-xl bg-[#F4F2F3]/10 p-2 rounded-full"></i>
                            <div>
                                <p className="text-sm text-[#F4F2F3]/70">Delivery Hours</p>
                                <p className="font-medium">Sat-Thu: 9:00 AM - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-[#F4F2F3]/5 rounded-lg">
                        <h4 className="font-bold mb-2">Customer Support</h4>
                        <p className="text-sm text-[#F4F2F3]/80 mb-3">Need help with your order? Our support team is available 24/7.</p>
                        <Link to="/contact" className="inline-flex items-center bg-[#F4F2F3] text-[#1C0221] py-2 px-4 rounded-lg font-medium hover:bg-[#F4F2F3]/90 transition-colors duration-200">
                            <i className="ri-customer-service-2-line mr-2"></i> Get Support
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center py-3 bg-[#000814] text-white w-full">
                <div className="container mx-auto">
                    Copyright © {date.getFullYear()} All Rights Reserved by <Link className="font-medium underline hover:text-[#F4F2F3]/70" to="/">Buyer's Hunt</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer