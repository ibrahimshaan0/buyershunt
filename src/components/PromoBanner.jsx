import React, { useEffect, useState } from 'react'
import bannerSide from "/assets/images/banners/verticalPromoBanner.svg";

function PromoBanner() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        "/assets/images/banners/discountbanner.svg",
        "https://images.pexels.com/photos/29705625/pexels-photo-29705625/free-photo-of-stunning-aerial-view-of-quebec-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    const pauseBanner = () => {
        setIsPaused(iP => iP = true);
    }

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [isPaused]);

    return (
        <div className="banner w-full h-[70vh] min-h-[50vh] bg-gray-200 ">
            <div className="w-[85vw] mx-auto flex gap-8 justify-center" >
                <div className='h-[35vw] relative'>
                    <img className="promoBannerImg h-full drop-shadow-md rounded-xl ease duration-[1s]" src={slides[currentSlide]} alt="" onMouseEnter={pauseBanner} onMouseLeave={() => (setIsPaused(iP => iP = false))} />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-500"
                                    }`}
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        ))}
                    </div>
                </div>
                <img className="h-[35vw] drop-shadow-md" src={bannerSide} alt="" />

            </div>
        </div>
    )
}

export default PromoBanner