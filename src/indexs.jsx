import { useCallback, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [count, setCount] = useState([]);

  const getCards = useCallback(() => {
    const carts = JSON.parse(localStorage.getItem("cart") || []) || [];
    if (carts.length) {
      setCount(carts);
    }
    return carts;
  }, [count]);

  useEffect(() => {
    getCards();
  }, [getCards]);

  return (
    <div className="header-flex">
      <div>
        <Link to="/">
          <img
            className="w-20"
            src="https://clone-f50ae.web.app/assets/icons/logo.png"
            alt="img"
          />
        </Link>
      </div>
      <form className="form">
        <div className="flex">
          <div>
            <input className="inputs" type="text" />
          </div>
          <div>
            <img
              className="w-8"
              src="https://i.pinimg.com/564x/18/f4/48/18f448ff8ec3358e3255ac19e37c53b1.jpg"
              alt="img"
            />
          </div>
        </div>
      </form>
      <div className="img-flex">
        <div>
          <img
            className="w-10"
            src="https://media.istockphoto.com/id/1160777145/vector/us-circle-flag-icon-waving-american-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=it5YEg0mYlnJDF-aQ98srEwTRC4fb0RQwTW9yJ0SCsc="
            alt=""
          />
        </div>
        <div>
          <Link to="/sign" className="title">
            Hello, Guest Sign In
          </Link>
        </div>
        <div>
          <Link to="/return" className="title">
            Returns & Orders
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img
              className="img"
              src="https://static.vecteezy.com/system/resources/previews/027/381/351/non_2x/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg"
              alt="img"
            />
          </Link>
          <span style={{ color: "#fff" }}>{count?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
