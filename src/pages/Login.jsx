import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        agreeTerms: false
    });
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Login attempt with:', formData.email, formData.password);
            // Add login logic here
        } else {
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords don't match!");
                return;
            }
            console.log('Register attempt with:', formData);
            // Add registration logic here
        }
    };
    
    return (
        <div className="min-h-screen bg-[#F7F8FA] py-16 px-4">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b">
                    <button 
                        className={`w-1/2 py-4 font-bold text-lg ${isLogin ? 'bg-[#1C0221] text-white' : 'bg-gray-100 text-gray-600'}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button 
                        className={`w-1/2 py-4 font-bold text-lg ${!isLogin ? 'bg-[#1C0221] text-white' : 'bg-gray-100 text-gray-600'}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Register
                    </button>
                </div>
                
                {/* Form */}
                <div className="p-8">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-[#1C0221]">
                            {isLogin ? 'Welcome Back!' : 'Create an Account'}
                        </h2>
                        <p className="text-gray-600 mt-2">
                            {isLogin 
                                ? 'Sign in to access your account' 
                                : 'Join Buyers\' Hunt and start shopping'}
                        </p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        {/* Registration Fields */}
                        {!isLogin && (
                            <div className="mb-6">
                                <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                <div className="relative">
                                    <i className="ri-user-line absolute left-3 top-3 text-gray-500"></i>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C0221]"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                            </div>
                        )}
                        
                        {/* Email */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                            <div className="relative">
                                <i className="ri-mail-line absolute left-3 top-3 text-gray-500"></i>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C0221]"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Password */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                            <div className="relative">
                                <i className="ri-lock-line absolute left-3 top-3 text-gray-500"></i>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C0221]"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Confirm Password (Register only) */}
                        {!isLogin && (
                            <div className="mb-6">
                                <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                                <div className="relative">
                                    <i className="ri-lock-line absolute left-3 top-3 text-gray-500"></i>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C0221]"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>
                        )}
                        
                        {/* Remember Me / Terms (conditional) */}
                        <div className="mb-6">
                            {isLogin ? (
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            id="remember" 
                                            className="h-4 w-4 text-[#1C0221] focus:ring-[#1C0221] border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="text-[#1C0221] hover:text-yellow-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        id="agreeTerms"
                                        name="agreeTerms"
                                        checked={formData.agreeTerms}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-[#1C0221] focus:ring-[#1C0221] border-gray-300 rounded"
                                        required
                                    />
                                    <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
                                        I agree to the <a href="#" className="text-[#1C0221] hover:text-yellow-500">Terms of Service</a> and <a href="#" className="text-[#1C0221] hover:text-yellow-500">Privacy Policy</a>
                                    </label>
                                </div>
                            )}
                        </div>
                        
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#1C0221] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#30343F] transition duration-300"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>
                    
                    {/* Social Login */}
                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>
                        
                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                                <i className="ri-google-fill text-xl text-red-500"></i>
                            </button>
                            <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                                <i className="ri-facebook-fill text-xl text-blue-600"></i>
                            </button>
                            <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                                <i className="ri-github-fill text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Return to Home */}
            <div className="mt-8 text-center">
                <Link to="/" className="text-[#1C0221] hover:text-yellow-500 flex items-center justify-center">
                    <i className="ri-arrow-left-line mr-2"></i> Return to Home
                </Link>
            </div>
        </div>
    );
};

export default Login;