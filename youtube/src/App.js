import "./App.css";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";

// React-router-dom : 페이지 라우팅
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:keyword", element: <Videos /> },
      { path: "/videos/watch/:id", element: <VideoDetail /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
