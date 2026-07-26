import React from 'react';
import BannerBook from "../../assets/banner-book.webp";

const Banner = () => {
    return (
        <div className="hero bg-gray-200 mt-8 mb-8 rounded-2xl h-[354px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={BannerBook}
            className="max-w-sm rounded-lg shadow-2xl"/>
            <div className=''>
            <h1 className="text-5xl font-bold mr-20">Books to freshen up <br />your bookshelf</h1>
            
            <button className='btn btn-success border-2 p-1 rounded-[5px] mt-10 text-white'>View The List</button>
            </div>
        </div>
        </div>
        
    );
};

export default Banner;