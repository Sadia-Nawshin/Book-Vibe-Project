import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book=> book.bookId === bookId);
    const {bookName, image} = singleBook;
    return (
        <div className='w-2/3 mx-auto'>
            
            <img src={image} className='w-48' alt="" />
            <h1>{bookName}</h1>
        </div>
    );
};

export default BookDetails;