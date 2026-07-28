import React from 'react';
import {use} from "react";

const book = ({bookPromise}) => {
    const data = use(bookPromise);
    console.log(data)
    return (
        <div>
            <h1>single book</h1>
        </div>
    );
};

export default book;