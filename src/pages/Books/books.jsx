import React, { Suspense, useEffect, useState } from 'react';

const books = () => {
    const [allBooks, setAllBooks] = useState([]);

   
    //useEffect(() => {
        //fetch("../../../public/booksData.json")
    //    .then(res => res.json)
    //    .then(data => {
    //        setAllBooks(data)
    //    })
    //}, [])

    const bookPromise = fetch("../../../public/booksData.json").then(res=>res.json())

    return (
        <div>
            <h2 className='text-3xl text-center p-6'>hello i am book</h2>
            <Suspense fallback={<span>loading....</span>}>
                <Book bookPromise={bookPromise}></Book>
            </Suspense>
        </div>
    );
};

export default books;