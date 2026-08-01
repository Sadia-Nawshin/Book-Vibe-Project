import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
import { addToStoredWishDB } from '../../utility/addToDB';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book=> book.bookId === bookId);
    console.log(singleBook);
    const {bookName, image, author, category, review, tags, publisher, totalPages, yearOfPublishing, rating} = singleBook;

    const handleRead = id =>{
        MySwal.fire({
        title: "Good job!",
        text: "You have finished reading the book!",
        icon: "success"
});
        addToStoredDB(id)
    }

    const handleWish = id =>{
        MySwal.fire({
        title: "Good job!",
        text: "The book has been added to your wishlist!",
        icon: "success"
});
        addToStoredWishDB(id)
    }

    return (
        
        <div className='mx-auto flex'>
            <title>{bookName}</title>
            <div className='bg-gray-100 w-1050 h-150 m-5 rounded-[8px] mx-auto flex justify-center items-center'>
                <img src={image} className='w-52 h-full object-contain' alt="" />
            </div>
           
            <div className='m-5'>
                <h1 className='font-bold text-2xl'>{bookName}</h1>
                <p className='font-normal mt-2 pt-2 pb-2'>By : {author}</p>

                <p className='mt-2 mb-2 border-t-1 border-b-1 pt-2 pb-2'>{category}</p>

                <p><span className='font-semibold'>Review :</span> {review}</p>

                <div className='flex flex-wrap items-center font-semibold gap-2 mb-2'>
                    <span>Tag :</span>
                    {
                    tags.map(tag => <p className='text-green-600 font-semibold m-2 p-2 rounded-[8px] bg-green-50'>#{tag}</p>)
                    }
                
                </div>

                <div className='pt-2 pb-2 border-t-1'>
                    <p className='pt-2 pb-2'>Number of Pages: <span className='font-semibold'>{totalPages}</span></p>
                    <p className='pt-2 pb-2'>Publisher: <span className='font-semibold'>{publisher}</span></p>
                    <p className='pt-2 pb-2'>Year of Publishing: <span className='font-semibold'>{yearOfPublishing}</span></p>
                    <p className='pt-2 pb-2'>Rating: <span className='font-semibold'>{rating}</span></p>
                </div>


                <button onClick={() => handleRead(id)} className='btn btn-info m-2'>Read</button>
                <button onClick={() => handleWish(id)} className='btn btn-accent m-2'>WishList</button>
            </div>
            
        </div>
    );
};

export default BookDetails;