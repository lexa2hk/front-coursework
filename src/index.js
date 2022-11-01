import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import About from "./About";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div><NavBar/><App/></div>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/about",
        element: <div><NavBar/><About/></div>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


