import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import BookDetail from './Components/BookDetail/BookDetail.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
