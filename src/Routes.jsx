import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AddProducts from "./pages/AddProducts/AddProducts";
import PrivateAddProducts from "./PrivateRoutes/PrivateAddProducts";
// import Products from "./pages/Products/Products";
import NikeProducts from "./pages/DynamicProductPages/NikeProducts";
import AdidasProducts from "./pages/DynamicProductPages/AdidasProducts";
import GucciProducts from "./pages/DynamicProductPages/GucciProducts";
import HermesProducts from "./pages/DynamicProductPages/HermesProducts";
import TiffanyProducts from "./pages/DynamicProductPages/TiffanyProducts";
import ZaraProducts from "./pages/DynamicProductPages/ZaraProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-products",
        element: (
          <PrivateAddProducts>
            <AddProducts></AddProducts>
          </PrivateAddProducts>
        ),
      },
      // {
      //   path: "/products",
      //   element: <Products></Products>,
      //   loader: () => fetch("http://localhost:5000/products"),
      // },
      {
        path: "/nike-products",
        element: <NikeProducts></NikeProducts>,
        loader: () => fetch("http://localhost:5000/nike-products"),
      },
      {
        path: "/adidas-products",
        element: <AdidasProducts></AdidasProducts>,
        loader: () => fetch("http://localhost:5000/adidas-products"),
      },
      {
        path: "/gucci-products",
        element: <GucciProducts></GucciProducts>,
        loader: () => fetch("http://localhost:5000/gucci-products"),
      },
      {
        path: "/hermes-products",
        element: <HermesProducts></HermesProducts>,
        loader: () => fetch("http://localhost:5000/hermes-products"),
      },
      {
        path: "/tiffany-products",
        element: <TiffanyProducts></TiffanyProducts>,
        loader: () => fetch("http://localhost:5000/tiffany-products"),
      },
      {
        path: "/zara-products",
        element: <ZaraProducts></ZaraProducts>,
        loader: () => fetch("http://localhost:5000/zara-products"),
      },
    ],
  },
]);

export default router;
