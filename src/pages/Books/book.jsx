import React, { useEffect, useState } from 'react';

const book = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch("../../../public/booksData.json")
        .then(res => res.json)
        .then(data => {
            setAllBooks(data)
        })
    }, [])
    return (
        <div>
            <h2>hello i am book</h2>
        </div>
    );
};

export default book;