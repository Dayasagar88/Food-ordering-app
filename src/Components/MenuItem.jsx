import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Utils/CartSlice";
import { ITEM_IMAGE_URL } from "../Utils/Constants";

export default function MenuItem({ item }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const cardItems = useSelector((store) => store.cart.items);
  const [qty, setQty] = useState(0);

  return (
    <div>
      <div className="transition-all scale-[1] py-2 border-b-2 border-gray-300 w-full flex justify-between">
        <div className="">
          <span className="my-10">{item?.card?.info?.name}</span>
          <br />
          <span className="my-4">
            ₹{item?.card?.info?.price / 100}
            <i className="ml-1 text-[.7rem] text-green-600 tracking-widest fa-solid fa-tag">
              <span className="text-black">30% OFF USE SWIGGYIT</span>
            </i>
          </span>
          <p className="text-[.85rem] w-3/4 mt-4">
            {item?.card?.info?.description}
          </p>
        </div>

        <img
          className="w-36 h-36 rounded-xl mb-2"
          src={ITEM_IMAGE_URL + item?.card?.info?.imageId}
          alt="img"
        />
        {qty !== 0 ? (
          <div
            className="flex
            absolute bg-white right-[37px] shadow-lg bottom-1 rounded-lg min-w-[70px] justify-around py-1 font-bold text-green-700 bg"
          >
            <button
              onClick={() => {
                if (qty >= 1) {
                  setQty(qty - 1);
                  handleRemoveItem(item)
                }
               
              }}
              className="border-r px-[6px]"
            >
              -
            </button>
            <p>{qty}</p>
            <button
              className="border-l px-1"
              onClick={() => {
                setQty(qty + 1);
                handleAddItem(item);
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              handleAddItem(item);
              setQty(qty + 1);
            }}
            className="addItem-btn absolute shadow-lg right-[39px] bottom-1 bg-white px-4 py-1 text-green-700 font-bold rounded-lg"
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
}
