import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import WishlistBooks from './components/WishlistBooks/WishlistBooks';
import ReadBooks from './components/ReadBooks/ReadBooks';
import Publish from './components/Publish/Publish';
import Authors from './components/Authors/Authors';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/list",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/Books.json'),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('/Books.json'),
          },
          {
            path: "wishlist",
            element: <WishlistBooks></WishlistBooks>,
            loader: () => fetch('/Books.json'),
          },
        ],
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('/Books.json'),
      },
      {
        path: "/publish",
        element: <Publish></Publish>,
      },
      {
        path: "/author",
        element: <Authors ></Authors>,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../Books.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
