import React from 'react';
import {use} from "react";
import { CiStar } from "react-icons/ci"; 
import { Link } from 'react-router';

const Book = ({singleBook}) => {
   // const data = use();
   // const { bookName, author } = singleBook;
    console.log(singleBook)
    
    const {bookName, author, image, publisher, category, rating, tags, bookId} = singleBook;
    return (
        
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 shadow-sm w-[350px] h-[430px] border-2 border-gray-100 mb-5 p-2">
        <figure className="px-10 pt-10 mt-5 bg-gray-100 w-2/3 mx-auto rounded-[8px]">
            <img className="rounded-xl h-[300px]" src={image}
            alt="Shoes"/>
        </figure>
        <div className="card-body">
            <div className='flex'>
                {
                tags.map(tag => <button className='text-green-600 font-semibold m-2 p-2 rounded-[8px] bg-green-50'>{tag}</button>)
                }
            </div>
            
            <h2 className="card-title">{bookName}</h2>
            <p>By : {author}</p>

           
            <div className="card-actions border-t-2 border-dashed mt-2">
            <p className='mt-2'>{category}</p>
            <div className='flex gap-1 items-center mt-2'>
                {rating}
                <CiStar />
            </div>
            
            </div>
        </div>
        </div>
        </Link>
    );
};

export default Book;