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

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Err404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/koszyk" element={<Cart />} />
        <Route path="/dostawa" element={<Delivery />} />
        <Route path="/platnosc" element={<Pay />} />
        <Route
          path="/logowanie"
          element={user ? <Navigate to="/moje-konto" /> : <Login />}
        />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/subskrypcja" element={<Sub />} />
        <Route path="/subskrypcja/:id" element={<SingleSub />} />
        <Route path="/jak-dziala-zestaw-do-uprawy" element={<Work />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/moje-konto" element={<HomeAdmin />} />
        <Route path="/moje-konto/adres-dostawy" element={<AdressAdmin />} />
        <Route path="/moje-konto/moje-zamowienia" element={<OrderAdmin />} />

        <Route path="/moje-konto/lista-uzytkownikow" element={<UserList />} />
        <Route
          path="/moje-konto/lista-uzytkownikow/:id"
          element={<UserDetail />}
        />
        <Route path="/moje-konto/zamowienia" element={<UserOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
