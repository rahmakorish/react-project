import { useState } from "react";
import "./App.css";
import React from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./component/Navbar.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout.jsx";

export default function App() {

    const router = createBrowserRouter([
    {
        path:"", element: <Layout/>, children:[
    {path: '/', element:  <Home/>},
    {path: '/about', element: <About/>},
    {path: '/contact', element: <Contact/>},
  {path: '/portfolio', element: <Portfolio/>},
    {path: '*', element: <Home/>}
    ]
    },
])

return (
    <>
    <RouterProvider router={router}/>
    </>
);
}

