import React from "react";
import veg from "../Images/veg.png";
import nonveg from "../Images/nonveg.png";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../Utils/MockData";
import { useParams } from "react-router-dom";
import { ITEM_IMAGE_URL } from "../Utils/Constants";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import useResDetails from "../Utils/useResDetails";
import RestaurantCategory from "./RestaurantCategory";
import MenuShimmer from "./MenuShimmer";
import ResImage from "./ResImages";
import { RES_IMAGES_URL } from "../Utils/Constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);
  const resDetails = useResDetails(resList);
  const [showIndex, setShowIndex] = useState(0);
  const [searchText, setSearchText] = useState("");



  if (menu === null) {
    return  <MenuShimmer/>
    ;
  }


  let cardsIndex = (menu?.data?.cards)?.length;
  const { name: name1 } = menu?.data?.cards[2]?.card?.card?.info;
  const { cards } =
    menu?.data?.cards[cardsIndex-1]?.groupedCard?.cardGroupMap?.REGULAR;

    const searchHandler = () => {
      const filteredMenu = cards.filter((card) => card?.card?.card?.title?.toLowerCase().includes(searchText.toLowerCase()));
      console.log(filteredMenu)
  }




  const filteredCards = cards?.filter((card) => {
    return card?.card?.card?.title !== undefined;
  });
  // console.log(filteredCards)

  const filteredItemCards = filteredCards.slice(1);

  const imageId = filteredCards[2]?.card?.card?.itemCards?.map((card) => card?.card?.info?.imageId);
  const imageUrls = imageId?.slice(0, 5)?.map(id => `${RES_IMAGES_URL+id}`);


  const { image, resName, cusine, rating, price, distance, address } =
    resDetails[resId - 1]?.data; 

  return (
    <div className="restaurant-menu-container mt-16 mx-auto">
      <div className="resDetails">
        {/* <img className="resImage" src={image} alt="" /> */}
        <ResImage imageUrls={imageUrls} firstImage={image}/>

        <div className="res-name-rating">
          <h1 className="name">{name1}</h1>
          <p className="resRating">
            {rating}
            <i className="fa-solid fa-star"></i>
          </p>
        </div>
        <div className="res-cusine-price">
          <p className="res-cusine">{cusine}</p>
          <p className="price">₹{price}</p>
        </div>
        <div className="res_address_distance">
          <p className="resAddress">{address}</p>
          <p className="resDistance">{distance}Km</p>
        </div>
      </div>

      <div className="menu-header">
        <h4 className="heading">
          <i className="fa-solid fa-bowl-food"></i>Menu
          <i className="fa-solid fa-bowl-food"></i>
        </h4>
        <div className="search-conatiner">
          <input
          id="searchFood" 
          value={searchText}
          onChange={(e) => {
            const  newValue = e.target.value;
            setSearchText(newValue);
            console.log(newValue)
          }}
            className="menu-search"
            type="text"
            placeholder="Search for dishes"
          />
          <i htmlFor="searchFood" onClick={searchHandler} className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="veg-nonveg-btn">
          <img className="veg_nonveg_icon" src={veg} alt="" />
          <input type="checkbox" id="veg" />
          <label htmlFor="veg" className="veg"></label>
          <img className="veg_nonveg_icon" src={nonveg} alt="" />
          <input type="checkbox" id="nonveg" />
          <label htmlFor="nonveg" className="nonveg"></label>
        </div>
      </div>

      <div className="main_menu_box">
        {filteredItemCards.map((card, index) => (
          //Controled Component
          <RestaurantCategory
          key={index}
            data={card?.card?.card}
            showItems={index === showIndex && true}
            mySetShowIndex={() => {
              showIndex === index ? setShowIndex(null) : setShowIndex(index);
            }}
        
          />
        ))}
      </div>
   </div>
  );
};

export default RestaurantMenu;
