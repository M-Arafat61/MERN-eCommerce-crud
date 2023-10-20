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
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import PrivateProductDetails from "./PrivateRoutes/PrivateProductDetails";
import MyCart from "./pages/MyCart/MyCart";
import PrivateCart from "./PrivateRoutes/PrivateCart";
import UpdateProducts from "./pages/UpdateProducts/UpdateProducts";
import PrivateUpdateProduct from "./PrivateRoutes/PrivateUpdateProduct";

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
      //   loader: () => fetch("https://elite-ensemble-emporium-server-o7xy7v2wj.vercel.app/products"),
      // },
      {
        path: "/nike-products",
        element: <NikeProducts></NikeProducts>,
        loader: () =>
          fetch(
            "https://elite-ensemble-emporium-server-o7xy7v2wj.vercel.app/nike-products"
          ),
      },
      {
        path: "/adidas-products",
        element: <AdidasProducts></AdidasProducts>,
        loader: () =>
          fetch(
            "https://elite-ensemble-emporium-server-o7xy7v2wj.vercel.app/adidas-products"
          ),
      },
      {
        path: "/gucci-products",
        element: <GucciProducts></GucciProducts>,
        loader: () =>
          fetch(
            "https://elite-ensemble-emporium-server-o7xy7v2wj.vercel.app/gucci-products"
          ),
        // https://elite-ensemble-emporium-server-nabi9z1t2.vercel.app/
      },
      {
        path: "/hermes-products",
        element: <HermesProducts></HermesProducts>,
        loader: () =>
          fetch(
            "https://elite-ensemble-emporium-server-o7xy7v2wj.vercel.app/hermes-products"
          ),
      },
      {
        path: "/tiffany-products",
        element: <TiffanyProducts></TiffanyProducts>,
        loader: () =>
          fetch(
            "https://elite-ensemble-emporium-server-o7xy7v2wj.vercel.app/tiffany-products"
          ),
      },
      {
        path: "/zara-products",
        element: <ZaraProducts></ZaraProducts>,
        loader: () =>
          fetch(
            "https://elite-ensemble-emporium-server-o7xy7v2wj.vercel.app/zara-products"
          ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateProductDetails>
            <ProductDetails></ProductDetails>
          </PrivateProductDetails>
        ),
        loader: ({ params }) =>
          fetch(
            `https://elite-ensemble-emporium-server-o7xy7v2wj.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/cart",
        element: (
          <PrivateCart>
            <MyCart></MyCart>
          </PrivateCart>
        ),
        loader: () =>
          fetch(
            "https://elite-ensemble-emporium-server-o7xy7v2wj.vercel.app/cart"
          ),
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivateUpdateProduct>
            <UpdateProducts></UpdateProducts>
          </PrivateUpdateProduct>
        ),
        loader: ({ params }) =>
          fetch(
            `https://elite-ensemble-emporium-server-o7xy7v2wj.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
