import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/root";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from "../pages/Home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            path: "/",
            Component: Home
        }
    ]
  },
]);
