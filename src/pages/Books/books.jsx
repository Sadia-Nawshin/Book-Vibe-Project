import React, { Suspense, useEffect, useState } from 'react';
import Book from "../Book/book";
const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);

   
    //useEffect(() => {
        //fetch("../../../public/booksData.json")
    //    .then(res => res.json)
    //    .then(data => {
    //        setAllBooks(data)
    //    })
    //}, [])

    //const bookPromise = fetch("../../../public/booksData.json").then(res=>res.json())
    //<Book bookPromise={bookPromise}></Book>   

    return (
        <div>
            <h1 className='text-center text-3xl m-2 font-bold'>Books</h1>
            <Suspense fallback={<span className="loading loading-dots loading-xs"></span>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>
                
            </Suspense>
        </div>
    );
};

export default Books;