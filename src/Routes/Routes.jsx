import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/root";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from "../pages/Home/home";
import About from '../pages/About/about';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';
import WishList from '../pages/WishList/WishList';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
          index: true,
          loader:()=>fetch("../../../public/booksData.json"),
          path: "/",
          Component: Home
        },
        {
          path: "/about",
          Component: About
        },
        {
          path: "/readlist",
          loader: ()=>fetch("../../../public/booksData.json"),
          Component: ReadList
        },
        
        {
          path: "/bookDetails/:id",
          loader: ()=>fetch("../../../public/booksData.json"),
          Component: BookDetails
        }
    ]
  },
]);
