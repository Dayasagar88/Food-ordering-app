import { useEffect, useState } from "react";
import { MENU_DATA_URL_1, MENU_DATA_URL_2, restaurant_Id } from "./Constants";

const useRestaurantMenu = (resId) => {
  //fetchData
  // console.log(resId)
  // console.log(restaurant_Id)

  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchData();


    return () => {
        clearInterval(fetchData());
    }
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        MENU_DATA_URL_1 + restaurant_Id?.id[resId - 1] + MENU_DATA_URL_2
      );

      // const data = await fetch(MENU_DATA_URL_1 + 611107 + MENU_DATA_URL_2);
      const response = await data.json();
      // console.log(response);
      setMenu(response);
    } catch (err) {
      console.log("Error");
    }
  };

  return menu;


};
export default useRestaurantMenu;

