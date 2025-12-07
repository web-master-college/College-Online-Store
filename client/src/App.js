import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ContactUs from './pages/ContactUs/ContactUs';
import ThankYou from './pages/ThankYou/ThankYou';
import Search from "./pages/Search/Search";

const NotFoundPage = () => (
  <div className="container mx-auto my-5 px-2 sm:px-8">
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-5">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetails />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
