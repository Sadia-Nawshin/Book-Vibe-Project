import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/root";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from "../pages/Home/home";
import About from '../pages/About/about';
import BookDetails from '../pages/BookDetails/BookDetails';

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
          path: "/bookDetails/:id",
          Component: BookDetails
        }
    ]
  },
]);
