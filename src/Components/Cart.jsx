import { useDispatch, useSelector } from "react-redux";
import { clearCart} from "../Utils/CartSlice";
import EmptyCart_img from "../Images/EmptyCart.png";

import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

 

  const uniqueItems = cartItems.filter(
    (item, index, self) =>
      index === self.findIndex((i) => i.card.info.id === item.card.info.id)
  );
  // console.log(uniqueItems);

  let sum = cartItems.reduce(
    (acc, item) => acc + (item?.card?.info?.price || 0),
    0
  );

  return (
    <div className="cart mb-6  mt-20 mx-auto max-w-[70%] min-h-[80vh] bg-white">
      {cartItems.length === 0 ? (
        <div className="h-[80vh]">
          <img className="h-full" src={EmptyCart_img} alt="img" />
        </div>
      ) : (
        <div>
          {" "}
          {uniqueItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
          <div className="w-full flex justify-end">
          <button onClick={handleClearCart} className="bg-orange-400 px-2 py-1 m-2 rounded-lg hover:bg-orange-500 transition-bg duration-200 text-white">Clear cart</button> 
          </div>
 
          <div className="py-2 px-2">
            <h3 className="px-1 font-bold">Bill Details</h3>
            <div className="flex justify-between px-1">
              <p>Total Quantity</p>
              <p>{cartItems.length}</p>
            </div>
            <div className="flex pb-2 justify-between px-1 border-b-[2px] border-gray-400">
              <p>Item total</p>
              <p>₹{(sum / 100).toFixed(0)}</p>
            </div>
            <div className="py-3 space-y-1">
              <div className="flex justify-between px-1">
                <p>Delivery partner fee</p>
                <p className="text-green-600">Free</p>
              </div>
              <div className="flex justify-between px-1">
                <p>GST and Restaurant Charges</p>
                <p>₹{((sum / 100) * 0.18).toFixed(2)}</p>
              </div>
            </div>
            <div className="flex justify-between px-1 border-t-[1px] border-black font-bold">
              <p>TO PAY</p>
              <p>₹{(sum / 100 + (sum / 100) * 0.18).toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Cart;
