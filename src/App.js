import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import NotFoundPage from "./components/NotFoundPage";
import Contact from "./components/Contact";
import RestaurantsMenu from "./components/RestaurantsMenu";

/**
 * Header
 * - Logo
 * - Nav Items
 *
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Card
 *    - Image
 *   - Name of Restaurant, Cuisines, Rating, Delivery Time
 * Footer
 * - copyright
 * - Links
 * - Address
 * - contact
 *
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/contact2",
        element: <h1>Contact Us</h1>,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantsMenu />,
        errorElement: <NotFoundPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
