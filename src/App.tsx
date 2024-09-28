import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./routes";
import { Root } from "./routes/root";
import { Products } from "./routes/product";
import { Customers } from "./routes/customers";
import { Orders } from "./routes/orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "products",
          children: [{ index: true, element: <Products /> }],
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
