import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
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
    },[])

    const handleSort = (type) => {
        setSortWish(type)
        if (type === "pages") {
            const sortedByPages = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
            setWishlist(sortedByPages);
        }
        if (type === "ratings") {
            const sortedByRatings = [...wishlist].sort((a, b) => a.rating - b.rating);
            setWishlist(sortedByRatings);}
    }


    return (
        <div>
            <details className="dropdown">
            <summary className="btn m-1">Sort By: {sortWish? sortWish:""}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
                <li><a onClick={()=>handleSort("ratings")}>Ratings</a></li>
            </ul>
            </details>

            <Tabs>
            <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
            <h2>My ReadList, books i read</h2>
            
            </TabPanel>


            <TabPanel>
            <h2>My Wishlist, Books that I wish to read {wishlist.length}</h2>
            {
                wishlist.map(b=><Book key={b.bookId} singleBook={b}></Book>)        
            }
            
            </TabPanel>
        </Tabs>
        </div>


        
    );
}



export default WishList;