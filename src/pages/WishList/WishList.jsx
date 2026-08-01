import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredWishBook } from '../../utility/addToDB';
import Book from '../Book/book';

const WishList = () => {
    const [wishlist, setWishlist] = useState([])
    const [sortWish, setSortWish] = useState("");
    const wishData = useLoaderData();
    useEffect(()=>{
        const storedWishBookData = getStoredWishBook()
        const convertedStoredWishBook = storedWishBookData.map(id => parseInt(id))
        const myWishList = wishData.filter(book => convertedStoredWishBook.includes(book.bookId))
        setWishlist(myWishList)
    },[]);
        
    return (
        <div>  
            <h2>My Wishlist, Books that I wish to read {wishlist.length}</h2>
            {
                wishlist.map(b=><Book key={b.bookId} singleBook={b}></Book>)        
            }
           

        </div>


        
    );
}

export default WishList;