import React, { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import resList from "../Utils/MockData";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserConText";
import { useSelector } from "react-redux";

function Header({ updateData }) {
  // console.log("typeof updateData",typeof(updateData))
  const [btnText, setBtnText] = useState("Login");
  const [searchText, setSearchText] = useState("");

  //Whenever the state variable changes/updates, react will be trigger and begin the reconsiliation cycle(Re-render the component.
  const searchHandler = () => {
    const filteredResList = resList.filter((res) =>
      res?.data?.resName.toLowerCase().includes(searchText.toLowerCase())
    );
    updateData(filteredResList);
  };
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const uniqueItems = cartItems.filter(
    (item, index, self) =>
      index === self.findIndex((i) => i.card.info.id === item.card.info.id)
  );

  return (
    //Header
    <div className="header fixed top-0 z-20 bg-none">
      <div className="sub-header">
        {/* Logo-Container */}
        <div className="logo">
          <img src={LOGO_URL} alt="image" />
        </div>

        <div className="search-bar">
          <input
            type="text"
            data-testid = "search_input"
            placeholder="Search your favorite food or restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          />
          <button
            data-testid = "search_btn"
            className="search-btn"
            onClick={searchText !== "" ? searchHandler : null}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Nav-Items-Container */}
        <div className="nav-items">
          <ul>
            <li>
              {" "}
              <Link to="/grocery">Grocery</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about">About Us</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contactUs">Contact Us</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping relative hover:text-orange-500">
                 {cartItems.length >  0 &&  <p className="absolute text-black text-xs top-[-12] right-[-12] bg-green-600 rounded-full px-[5]">
                    {uniqueItems.length}
                  </p>}
                </i>
              </Link>{" "}
            </li>
            {/* <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li> */}
            <button
          
              className="login-btn"
              onClick={() => {
                btnText === "Login"
                  ? setBtnText(loggedInUser)
                  : setBtnText("Login");
              }}
            >
              {btnText}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
