import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import './App.css';
import ContactUs from './pages/ContactUs/ContactUs';
const HomePage = () => <h1>Welcome to the Home Page!</h1>;
const AboutPage = () => <h1>Learn more About Us!</h1>;
const ContactPage = () => <ContactUs />;
const NotFoundPage = () => <h1>404 - Page Not Found</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
        <HomePage />
      </div>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: (
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
        <AboutPage />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav> */}
        <ContactPage />
      </div>
    ),
  },
]);


function App() {
  return (<RouterProvider router={router} /> );
}

export default App;
