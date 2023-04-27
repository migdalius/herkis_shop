import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import HomeAdmin from "./pages/admin/home/HomeAdmin";
import AdressAdmin from "./pages/admin/adress/AdressAdmin";
import OrderAdmin from "./pages/admin/order/OrderAdmin";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Err404 from "./pages/Err404";
import Cart from "./pages/cart/Cart";
import Delivery from "./pages/delivery/Delivery";
import { useSelector } from "react-redux";
import Pay from "./pages/pay/Pay";
import Sub from "./pages/sub/Sub";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import SingleSub from "./pages/singleSub/SingleSub";
import UserList from "./pages/admin/userList/UserList";
import UserDetail from "./pages/admin/userList/UserDetail";
import UserOrders from "./pages/admin/userOrders/UserOrders";
import Products from "./pages/admin/products/Products";
import Success from "./pages/pay/Success";
import ProductDetail from "./pages/admin/products/ProductDetail";
import UserOrdersDetails from "./pages/admin/userOrders/UserOrdersDetails";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  const admin = user.isAdmin;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Err404 />} />
        {/* RWD Done */}
        <Route path="/" element={<Home />} />
        {/* RWD - problem with white nav space */}

        <Route path="/koszyk" element={<Cart />} />
        {/* RWD Done */}
        <Route path="/dostawa" element={<Delivery />} />
        {/* RWD Done */}
        <Route path="/platnosc" element={<Pay />} />
        {/* RWD Done */}
        <Route
          path="/logowanie"
          element={user ? <Navigate to="/moje-konto" /> : <Login />}
        />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/subskrypcja" element={<Sub />} />
        <Route path="/subskrypcja/:id" element={<SingleSub />} />
        <Route path="/jak-dziala-zestaw-do-uprawy" element={<Work />} />
        <Route path="/kontakt" element={<Contact />} />

        {/* Login user panel */}
        <Route path="/moje-konto" element={user ? <HomeAdmin /> : <Login />} />
        <Route
          path="/moje-konto/adres-dostawy"
          element={user ? <AdressAdmin /> : <Login />}
        />
        <Route
          path="/moje-konto/moje-zamowienia"
          element={user ? <OrderAdmin /> : <Login />}
        />
        <Route
          path="/zamowienie-przyjete"
          element={user ? <Success /> : <Login />}
        />

        {/* Admin panel */}

        <Route
          path="/moje-konto/lista-uzytkownikow"
          element={admin ? <UserList /> : <Login />}
        />
        <Route
          path="/moje-konto/lista-uzytkownikow/:id"
          element={admin ? <UserDetail /> : <Login />}
        />
        <Route
          path="/moje-konto/zamowienia"
          element={admin ? <UserOrders /> : <Login />}
        />
        <Route
          path="/moje-konto/zamowienia/:id"
          element={admin ? <UserOrdersDetails /> : <Login />}
        />
        <Route
          path="/moje-konto/produkty"
          element={admin ? <Products /> : <Login />}
        />
        <Route
          path="/moje-konto/produkty/:id"
          element={admin ? <ProductDetail /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
