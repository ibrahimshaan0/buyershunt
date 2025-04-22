import React from 'react'

function Article({ article }) {
    return (
        <div className="w-[500px] flex flex-col gap-2 justify-start rounded-md text-left shadow-lg">
            <div className="relative">
                <img className="w-full rounded-tl-xl rounded-tr-xl" src={article.img} alt={article.title} />
                <i className="ri-share-line absolute right-10 bottom-3 text-white rounded-[50%] bg-black px-1"></i>
                <i className="ri-message-2-line absolute right-3 bottom-3 text-white rounded-[50%] bg-black px-1"></i>
            </div>
            <p className="text-gray-500 mt-1 px-5">{article.category} || {article.date}</p>
            <h3 className="text-2xl font-bold px-5">{article.title}</h3>
            <p className="text-gray-500 text-sm px-5" >{article.shortDescription}..</p>
            <a className="text-blue-500 px-5 pb-5" href="">continue reading...</a>
        </div>
    )
}

export default Article