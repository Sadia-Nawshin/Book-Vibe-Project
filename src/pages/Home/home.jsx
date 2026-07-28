import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/books';
import { useLoaderData } from 'react-router';

const home = () => {
    const data = useLoaderData();
    //console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Books data={data}></Books>

        </div>
    );
};

export default home;