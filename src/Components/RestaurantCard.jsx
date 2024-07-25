import React, { useEffect, useState } from 'react'



function RestaurantCard(props) {

  const [resCardData, setResCardData] = useState(null)
  
    const { resData } = props;
    // console.log(resData)

    const { image, resName, cusine, rating, price, distance, address } =
      resData?.data;


  
    // console.log(props);
  return (
    //Restaurant Card
    <div
    className="restaurant-card">
      {/* Res-Image */}
      <div className="res-image">
        <img src={image} alt="res-img" />
      </div>

      <div className="res-details">
        {/* Res-Name and Rating */}
        <div className="res-name-rating">
          <h1>{resName}</h1>
          <div className="rating">
            {rating}
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        {/* Cuisine and Price */}
        <div className="cuisine-price">
          <p className="cuisine">{cusine}</p>
          <p className="price">₹{price}</p>
        </div>

        {/* Address and Distance */}
        <div className="address-distance">
          <p className="address">{address}</p>
          <p className="distance">{distance} Km</p>
        </div>
      </div>
    </div>
  )
};

// Higher Order Component
// input  - RestaurantCard ==> RestaurantCardPromoted
export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className='relative'>
        <label className='absolute text-white bg-black rounded-md px-1 z-10 left-5 top-0'>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard
