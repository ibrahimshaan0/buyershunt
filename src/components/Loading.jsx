import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-1/2">
                <h1 className="text-8xl text-center font-bold uppercase text-[#1E2749] mb-5">Buyers' Hunt</h1>

                <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#1E2749] animate-loading-bar"
                        style={{ width: '100%' }}
                    ></div>
                </div>

            </div>
        </div>
    );
};

export default Loading;


