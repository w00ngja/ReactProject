import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AllProducts from './pages/AllProducts';
import AddProducts from './pages/AddProducts';
import ProductsDetail from './pages/ProductsDetail';
import MyCart from './pages/MyCart';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// 페이지 라우팅 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <AllProducts /> },
      { path: '/products', element: <AllProducts /> },
      { path: '/products/add', element: <AddProducts /> },
      { path: '/products/:id', element: <ProductsDetail /> },
      { path: '/cart', element: <MyCart /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
