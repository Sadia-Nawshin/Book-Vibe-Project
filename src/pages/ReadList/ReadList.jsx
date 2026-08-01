import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/book';
import WishList from '../WishList/WishList';


const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    useEffect(()=>{
        const storedBookData = getStoredBook()
        const convertedStoredBook = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId))
        setReadList(myReadList)
    },[]);


    const handleSort = (criteria, source) => {
        setSort(criteria);
        if (source === "readlist") {
            if (criteria === "pages") {
                const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
                setReadList(sortedByPages);
            }
            if (criteria === "ratings") {
                const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
                setReadList(sortedByRatings);
            }
        }
        if (source === "wishlist") {
            if (criteria === "pages") {
                const sortedByPages = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
                setWishlist(sortedByPages);
            }
            if (criteria === "ratings") {
                const sortedByRatings = [...wishlist].sort((a, b) => a.rating - b.rating);
                setWishlist(sortedByRatings);
            }
        }
        
    }

    return (
        <div >
            <div className='flex items-center justify-center'>     
            <details className="dropdown">
            <summary className="btn m-1">Sort By: {sort? sort:""}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={()=>handleSort("readlist","pages")}>Pages</a></li>
                <li><a onClick={()=>handleSort("readlist","ratings")}>Ratings</a></li>
            </ul>
            </details>
            </div>

            <Tabs>
            <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
            <h2>My ReadList, books i read {readList.length}</h2>
            {
                readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
            }
            </TabPanel>

            <TabPanel>
            <WishList></WishList>
            </TabPanel>

            </Tabs>
        </div>
    );
};

export default ReadList;