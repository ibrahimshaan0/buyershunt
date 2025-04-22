import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [aiChat, setAiChat] = useState({
        isOpen: false,
        messages: [
            { sender: 'ai', text: 'Hello! I\'m TechForest Guide, your AI assistant. How can I help you today?' }
        ],
        newMessage: ''
    });

    const messageEndRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChatToggle = () => {
        setAiChat(prev => ({
            ...prev,
            isOpen: !prev.isOpen
        }));
    };

    const handleChatInput = (e) => {
        setAiChat(prev => ({
            ...prev,
            newMessage: e.target.value
        }));
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!aiChat.newMessage.trim()) return;

        // Add user message
        const userMessage = { sender: 'user', text: aiChat.newMessage };
        setAiChat(prev => ({
            ...prev,
            messages: [...prev.messages, userMessage],
            newMessage: ''
        }));

        // Simulate AI response after a short delay
        setTimeout(() => {
            const aiResponse = {
                sender: 'ai',
                text: getAIResponse(aiChat.newMessage)
            };

            setAiChat(prev => ({
                ...prev,
                messages: [...prev.messages, aiResponse]
            }));
        }, 1000);
    };

    // Simple AI response function - in a real application, you'd connect to an actual AI service
    const getAIResponse = (message) => {
        const lowerMsg = message.toLowerCase();

        if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
            return "Hello! How can I assist you with Buyers' Hunt today?";
        } else if (lowerMsg.includes('product') || lowerMsg.includes('items')) {
            return "We offer a wide range of products. You can browse our categories or search for specific items on our website.";
        } else if (lowerMsg.includes('delivery') || lowerMsg.includes('shipping')) {
            return "We typically deliver within 3-5 business days. Express shipping options are also available.";
        } else if (lowerMsg.includes('return') || lowerMsg.includes('refund')) {
            return "Our return policy allows returns within 30 days of purchase. Please visit our Returns page for detailed information.";
        } else if (lowerMsg.includes('payment') || lowerMsg.includes('pay')) {
            return "We accept credit cards, PayPal, and mobile banking payments. All transactions are secure.";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('support')) {
            return "You can reach our customer support team at support@buyershunt.com or call us at +880 1234-567890.";
        } else if (lowerMsg.includes('location') || lowerMsg.includes('address')) {
            return "Our main office is located at 123 Street, Rajshahi, Bangladesh. We also have warehouses in major cities.";
        } else if (lowerMsg.includes('hours') || lowerMsg.includes('open')) {
            return "Our customer service is available Monday to Saturday, 9:00 AM to 8:00 PM.";
        } else {
            return "I'm not sure I understand. Could you please rephrase or ask something else about our products or services?";
        }
    };

    // Auto-scroll to bottom of messages
    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [aiChat.messages]);

    return (
        <div className="bg-[#F7F8FA] min-h-screen">
            {/* Header Section */}
            <div className="bg-[#1C0221] text-[#F4F2F3] py-12 px-4 text-center">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg max-w-2xl mx-auto opacity-90">
                        We're here to help! Reach out to our team for any inquiries, support, or feedback.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold text-[#1C0221] mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[#1C0221]/10 rounded-full">
                                        <i className="ri-map-pin-line text-xl text-[#1C0221]"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Our Location</h3>
                                        <p className="text-gray-600">Rajshahi, Bangladesh</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[#1C0221]/10 rounded-full">
                                        <i className="ri-phone-line text-xl text-[#1C0221]"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone Number</h3>
                                        <p className="text-gray-600">+880 1234-567890</p>
                                        <p className="text-gray-600">+880 9876-543210</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[#1C0221]/10 rounded-full">
                                        <i className="ri-mail-line text-xl text-[#1C0221]"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email Address</h3>
                                        <p className="text-gray-600">info@buyershunt.com</p>
                                        <p className="text-gray-600">support@buyershunt.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[#1C0221]/10 rounded-full">
                                        <i className="ri-time-line text-xl text-[#1C0221]"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Delivery Hours</h3>
                                        <p className="text-gray-600">Saturday - Thursday: 9:00 AM - 8:00 PM</p>
                                        <p className="text-gray-600">Friday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                                <div className="flex space-x-3">
                                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1C0221]/10 rounded-full hover:bg-[#1C0221] hover:text-white transition-all duration-300">
                                        <i className="ri-facebook-fill text-xl"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1C0221]/10 rounded-full hover:bg-[#1C0221] hover:text-white transition-all duration-300">
                                        <i className="ri-twitter-x-fill text-xl"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1C0221]/10 rounded-full hover:bg-[#1C0221] hover:text-white transition-all duration-300">
                                        <i className="ri-instagram-fill text-xl"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1C0221]/10 rounded-full hover:bg-[#1C0221] hover:text-white transition-all duration-300">
                                        <i className="ri-linkedin-fill text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
                            <h3 className="font-semibold text-lg mb-3">Our Service Area</h3>
                            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                                {/* Replace with actual map implementation */}
                                <div className="w-full h-full flex items-center justify-center">
                                    <p className="text-gray-500">Map loading...</p>
                                    {/* For actual implementation, use Google Maps or other map service */}
                                    {/* <iframe src="https://www.google.com/maps/embed?..." width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-bold text-[#1C0221] mb-6">Send Us a Message</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name*</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C0221]"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C0221]"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject*</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C0221]"
                                        placeholder="How can we help you?"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message*</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C0221]"
                                        placeholder="Type your message here..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-[#1C0221] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#1C0221]/90 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
                            <h2 className="text-2xl font-bold text-[#1C0221] mb-6">Frequently Asked Questions</h2>

                            <div className="space-y-4">
                                <div className="border-b pb-4">
                                    <h3 className="font-semibold text-lg">What are your delivery times?</h3>
                                    <p className="text-gray-600 mt-1">We typically deliver within 3-5 business days nationwide. Express delivery options are available at checkout.</p>
                                </div>

                                <div className="border-b pb-4">
                                    <h3 className="font-semibold text-lg">How can I track my order?</h3>
                                    <p className="text-gray-600 mt-1">You can track your order by logging into your account and viewing your order history, or using the tracking number provided in your confirmation email.</p>
                                </div>

                                <div className="border-b pb-4">
                                    <h3 className="font-semibold text-lg">What is your return policy?</h3>
                                    <p className="text-gray-600 mt-1">We accept returns within 30 days of purchase for most items. Products must be in original condition with all packaging and tags.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg">Do you offer international shipping?</h3>
                                    <p className="text-gray-600 mt-1">Yes, we ship to selected international destinations. Shipping costs and delivery times vary by location.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* TechForest Guide AI Chat Support */}
            <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end`}>
                {/* Chat Interface */}
                {aiChat.isOpen && (
                    <div className="bg-white rounded-xl shadow-lg mb-4 w-80 sm:w-96 overflow-hidden">
                        <div className="bg-[#1C0221] text-white p-4 flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full mr-3">
                                    <i className="ri-robot-fill text-white"></i>
                                </div>
                                <h3 className="font-bold">TechForest Guide</h3>
                            </div>
                            <button onClick={handleChatToggle} className="text-white hover:text-gray-300">
                                <i className="ri-close-line text-xl"></i>
                            </button>
                        </div>

                        <div className="h-80 overflow-y-auto p-4">
                            {aiChat.messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-lg p-3 ${msg.sender === 'user'
                                            ? 'bg-[#1C0221] text-white rounded-tr-none'
                                            : 'bg-gray-100 text-gray-800 rounded-tl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messageEndRef} />
                        </div>

                        <form onSubmit={handleSendMessage} className="border-t p-4 flex">
                            <input
                                type="text"
                                value={aiChat.newMessage}
                                onChange={handleChatInput}
                                placeholder="Type your question here..."
                                className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#1C0221]"
                            />
                            <button
                                type="submit"
                                className="bg-[#1C0221] text-white p-2 rounded-r-lg hover:bg-[#1C0221]/90"
                            >
                                <i className="ri-send-plane-fill"></i>
                            </button>
                        </form>
                    </div>
                )}

                {/* Chat Toggle Button */}
                <button
                    onClick={handleChatToggle}
                    className="w-14 h-14 bg-[#1C0221] text-white rounded-full shadow-lg hover:bg-[#1C0221]/90 flex items-center justify-center"
                >
                    {aiChat.isOpen ? (
                        <i className="ri-close-line text-2xl"></i>
                    ) : (
                        <div className="relative flex items-center justify-center">
                            <i className="ri-customer-service-2-fill text-2xl"></i>
                            <span className="absolute -top-1 -right-1 bg-green-500 rounded-full w-3 h-3"></span>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Contact;