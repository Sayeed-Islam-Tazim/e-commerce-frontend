import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home";
import ProductAdd from "../components/product/ProductAdd";
import ProductView from "../components/product/ProductView";
import ProductEdit from "../components/product/ProductEdit";

const routes = createBrowserRouter([
  {
    path: "",
    Component: HomeLayout,
    // element: <HomeLayout />,
    children: [
      {
        path: "",
        Component: Home,
        // element: <Home />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "products/add-product",
        Component: ProductAdd,
      },
      {
        path: "products/view-product/:id",
        Component: ProductView,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "products/edit-product/:id",
        Component: ProductEdit,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
    ],
  },
]);

export default routes;
