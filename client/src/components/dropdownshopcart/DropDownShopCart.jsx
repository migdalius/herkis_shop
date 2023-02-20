import "../dropdownshopcart/dropDownShopCart.css";
import { House, QuestionCircle, Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const DropDownShopCart = () => {
  return (
    <div>
      <div className="shopping-cart-top">
        <p>Twój Koszyk</p>
        <div className="shopping-cart-sum-price">
          <p className="shoping-cart-title">Wartość Koszyka</p>
          <p>189,99 zł</p>
        </div>
      </div>
      {/* pierwszy */}
      <div className="shopping-cart-single-product">
        <img src="../img/kot_1.png" className="shopping-cart-image" />
        <h3 class="shopping-cart-title-single-product">
          Spodnie robocze Ardon Vision r. 50
        </h3>
        <span className="shopping-cart-single-product-price">189,98 zł</span>
      </div>
      {/* Drugi */}
      <div className="shopping-cart-single-product">
        <img src="../img/kot_1.png" className="shopping-cart-image" />
        <h3 class="shopping-cart-title-single-product">
          Spodnie robocze Ardon Vision r. 50
        </h3>
        <span className="shopping-cart-single-product-price">189,98 zł</span>
      </div>

      <div className="shopping-cart-footer">
        <button className="shopping-cart-button">Pokaż Koszyk</button>
        <button className="shopping-cart-button-fill">Do Kasy</button>
      </div>
    </div>
  );
};

export default DropDownShopCart;
