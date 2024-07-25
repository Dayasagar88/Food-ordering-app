import React, { useEffect, useState, useContext } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import resList from "../Utils/MockData";
import OfferImage from "../Images/Offer.png";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserConText";

const Body = ({ card }) => {
  // console.log("card" , card);
  const [restaurantList, setRestaurantList] = useState([]);
  const LabeledResCards = WithPromotedLabel(RestaurantCard);

  const {setUserName, loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser)



  useEffect(() => {
    const timer = setTimeout(() => {
      setRestaurantList(card);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRestaurantList(card);
    },500);

    return () => {
      clearInterval(timer);
    };
  }, [card]);

  const id = "Restaurant_ID";

  // const {id_2} = restaurant_Id?.id[restaurantList.data]

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-20 mx-auto">
      <div className="w-full text-center my-5 gap-2">
        {/* <label htmlFor="userName" className="">
          Username :
        </label>
        <input
          value={loggedInUser}
          className="bg-gray-200 p-1 border border-black mx-2 outline-none"
          type="text"
          onChange={() => setUserName((e) => e.target.value)}
        /> */}
      </div>

      {/* Offer image */}
      <div className="Offer-img">
        <img src={OfferImage} alt="Offer-image" />
        <h1>Best Food in Delhi NCR</h1>
      </div>

      {/* Filter buttons */}
      <div className="filter-btn">
        {/* Top rated restaurants btn */}
        <button
        data-testid = "topRatedBtn"
          className="TRR_btn"
          onClick={() => {
            const filteredResList = restaurantList.filter(
              (res) => res.data.rating > "4"
            );
            setRestaurantList(filteredResList);
            // console.log(filteredResList);
          }}
        >
          Top Rated Restaurant
        </button>

        <button
          className="TRR_btn"
          onClick={() => {
            setRestaurantList(resList);
          }}
        >
          Show All Restaurant
        </button>
       
      </div>

      {/* Res-Card */}
      <div
       
      className="res-cards ">
        {restaurantList.map((restaurant) => (
          <Link data-testid="resCard"
            className="res_link_card"
            to={"/restaurantMenu/" + restaurant.data.id + "/" + id}
            key={restaurant.data.id}
          >
            {restaurant.data.promoted ? (
              <LabeledResCards resData={restaurant} />
            ) : (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
