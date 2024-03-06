import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import ProductDetails from "./components/pages/ProductDetails";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Signup from "./components/pages/Signup";
import Error from "./components/pages/Error";
import Counter from "./components/Counter";
import Cart from "./components/pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
