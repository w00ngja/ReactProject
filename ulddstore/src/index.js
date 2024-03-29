import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AllProducts from './pages/AllProducts';
import AddProducts from './pages/AddProducts';
import ProductsDetail from './pages/ProductsDetail';
import ProtectedRoute from './pages/ProtectedRoute';
import MyCart from './pages/MyCart';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// 페이지 라우팅 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      {
        path: '/products/add',
        element: (
          <ProtectedRoute requireAdmin>
            <AddProducts />
          </ProtectedRoute>
        ),
      },
      { path: '/products/:id', element: <ProductsDetail /> },
      {
        path: '/carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
