import React from "react";
import { ITEM_IMAGE_URL } from "../Utils/Constants";
import { addItem, removeItem } from "../Utils/CartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ item }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  // console.log(cartItems)
  
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  
  const filteredCartItems = cartItems.filter(
    (items) => items?.card?.info?.name === item?.card?.info?.name
  );
    // console.log(filteredCartItems.length);
  const [qty, setQty] = useState(filteredCartItems.length);

  return (
    <div className="grid grid-cols-4 gap-28  px-2  border-b-[2px] border-gray-300">
      <img
        className="w-[100px] rounded-[20px] py-2"
        src={ITEM_IMAGE_URL + item?.card.info?.imageId}
        alt="img"
      />
      <p className="my-auto">{item?.card?.info?.name}</p>
      <p className="my-auto">
        ₹{((item?.card?.info?.price / 100) * qty).toFixed(0)}
      </p>
      <div
        className="flex  my-auto place-self-end
                 bg-gray-300 items-center shadow-md rounded-lg max-h-10 max-w-[100px] justify-around py-1 font-bold text-green-700 "
      >
        <button
          onClick={() => {
            if (qty >= 1) {
              handleRemoveItem(item);
              if(qty > 1){
              setQty(qty - 1);
              }
            }
          }}
          className="border-r px-[8px] border-gray-400"
        >
          -
        </button>
        <p className="px-2">{qty}</p>
        <button
          className="border-l px-[8px] border-gray-400"
          onClick={() => {
            handleAddItem(item);
            setQty(qty + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
