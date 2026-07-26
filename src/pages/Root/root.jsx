import React from 'react';
import NavBar from '../../components/header/navbar';
import { Outlet } from 'react-router';
import Footer from "../../components/footer/footer";
import Banner from "../../components/Banner/Banner"

const root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default root;