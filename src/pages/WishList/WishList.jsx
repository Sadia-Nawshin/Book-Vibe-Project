import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/book';

const WishList = () => {
    const [wishList, setWishList] = useState([])
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    useEffect(()=>{
        const storedBookData = getStoredBook()
        const convertedStoredBook = storedBookData.map(id => parseInt(id))
        const myWishList = data.filter(book => convertedStoredBook.includes(book.bookId))
        setReadList(myWishList)
    },[])

    const handleSort = (type) => {
        setSort(type)
    }

    return (
        <div>
            <details className="dropdown">
            <summary className="btn m-1">Sort By: {sort? sort:""}</summary>
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
            <h2>My ReadList</h2>
            </TabPanel>

            <TabPanel>
            <h2>My WishList, books I wish to read {wishList.length}</h2>
            {
                wishList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
            }
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default WishList;