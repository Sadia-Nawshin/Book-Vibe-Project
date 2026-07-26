import React from 'react';
import BannerBook from "../../assets/banner-book.webp";

const Banner = () => {
    return (
        <div className="flex m-2 justify-around w-full items-center bg-gray-200">
            <div className="m-2">
                <p>Books to freshen up your bookshelf</p>
                <button className='border-2 p-1 rounded-[5px] m-3'>View The List</button>
            </div>
            
            <div className=''>
                <img className="w-3/12" src={BannerBook} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;