import "../dropdown/dropDown.css";
import { House, QuestionCircle, Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const DropDown = (active) => {
  console.log(active.active);
  return (
    <>
      {active.active === null ? (
        <>
          <li className="dropdwonItem">
            <Link to={"/auth/logowanie"}>Logowanie</Link>
          </li>
          <li className="dropdwonItem">
            <Link to={"/auth/rejestracja"}>Rejestracja</Link>
          </li>
        </>
      ) : (
        <>
          <li className="dropdownItem">
            <House color="#222" size={28} />
            <Link to={"/admin/dashboard"}>Moje Konto</Link>
          </li>
          <li className="dropdownItem">
            <Cart color="#222" size={28} />
            <Link to={"/admin/moje-zamowienia"}>Moje Zamówienia</Link>
          </li>
          <li className="dropdownItem">
            <QuestionCircle color="#222" size={28} />
            <a href="https://www.szybkauprawa.pl/kontakt">Kontakt</a>
          </li>
        </>
      )}
    </>
  );
};

export default DropDown;
