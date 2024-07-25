import res1Image from "../Images/res1-img.avif";
import res2Image from "../Images/res_2-img.avif";
import res3Image from "../Images/res3-img.avif";
import res4Image from "../Images/res4-img.avif";
import res5Image from "../Images/res5-img.avif";
import res6Image from "../Images/res6-img.avif";
import res7Image from "../Images/res7-img.avif";
import res8Image from "../Images/res8-img.avif";
import res9Image from "../Images/res9-img.avif";
import res10Image from "../Images/res10-img.avif";
import res11Image from "../Images/res11-img.avif";
import res12Image from "../Images/res12-img.avif";
import res13Image from "../Images/res13-img.avif";
import res14Image from "../Images/res14-img.avif";
import res15Image from "../Images/res15-img.avif";

const resList = [
    {
      type: "restaurant",
      data: {
        id: "1",
        image: `${res1Image}`,
        resName: "KFC",
        cusine:
          "North Indian, Mediterranean, Continental, Sushi, Italian, Lebanese, Asian, Bar Food",
        rating: "4",
        price: "1800 For Two",
        address: "Middle Circle, Connaught Place, New Delhi",
        distance: "3",
        promoted: false,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "2",
        image: `${res2Image}`,
        resName: "Bansi Wala",
        cusine:
          "Bakery, Chinese, Indian, Sweets",
        rating: "3.9",
        price: "2100 For Two",
        address: "Middle Circle, Connaught Place, New Delhi",
        distance: "2",
        promoted: true,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "3",
        image: `${res3Image}`,
        resName: "Pizza Hut",
        cusine: "Bar Food, American, Continental, North Indian",
        rating: "4.5",
        price: "4000 For Two",
        address: "Janpath, New Delhi",
        distance: "3.4",
        promoted: false,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "4",
        image: `${res4Image}`,
        resName: "Murthal No.1 Parantha",
        cusine:
          "Continental, North Indian, Italian, Pizza, Chinese, Asian, Fast Food, Beverages",
        rating: "4.4",
        price: "3000 For Two",
        address: "Middle Circle, Connaught Place, New Delhi",
        distance: "2.1",
        promoted: false,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "5",
        image: `${res5Image}`,
        resName: "Subway",
        rating: "4.3",
        cusine:
          "North Indian, Chinese, Asian, Italian, Mughlai, Desserts, Tea, Beverages",
        price: "2900 For Two",
        address: "Middle Circle, Connaught Place, New Delhi",
        distance: "3",
        promoted:false,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "6",
        image: `${res6Image}`,
        resName: "Kings Kulfi",
        rating: "4.5",
        cusine: "Continental, Italian",
        price: "3300 For Two",
        address: "Shangri-La Eros, New Delhi",
        distance: "1.7",
        promoted: true,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "7",
        image: `${res7Image}`,
        resName: "Roll Express",
        rating: "4",
        cusine:
          "Bar Food, North Indian, Burger, Biryani, Fast Food, Desserts, Beverages, Kebab",
        price: "2200 For Two",
        address: "Inner Circle, Connaught Place, New Delhi",
        distance: "1.3",
        promoted: false,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "8",
        image: `${res8Image}`,
        resName: "Biryani Badshah",
        rating: "4.2",
        cusine: "North Indian, Chinese, Fast Food, Beverages",
        price: "2500 For Two",
        address: "Karol Bagh, New Delhi",
        distance: "2.8",
        promoted: false,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "9",
        image: `${res9Image}`,
        resName: "Nazeer Foods",
        cusine:
          "North Indian, Asian, Lebanese, Italian, European, Chinese, Beverages",
        rating: "4.2",
        price: "2300 For Two",
        address: "Connaught Place, New Delhi",
        distance: "2.1",
        promoted: true,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "10",
        image: `${res10Image}`,
        resName: "Wow! Momo",
        rating: "3.9",
        cusine: "Continental, North Indian, Italian, Asian",
        price: "2400 For Two",
        address: "Connaught Place, New Delhi",
        distance: "4",
        promoted: true,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "11",
        image: `${res11Image}`,
        resName: "McDonald's",
        rating: "4.3",
        cusine: "North Indian, Desserts",
        price: "2500 For Two",
        address: "Middle Circle, Connaught Place, New Delhi",
        distance: "3",
        promoted: false,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "12",
        image: `${res12Image}`,
        resName: "Burger King",
        rating: "4.4",
        cusine: "Mexican, Pizza, Pasta, American, Burger, Tex-Mex, Desserts",
        price: "2700 For Two",
        address: "Connaught Place, New Delhi",
        distance: "2.1",
        promoted: false,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "13",
        image: `${res13Image}`,
        resName: "Natural Ice Cream",
        rating: "4.3",
        cusine: "Mexican,Ice Cream,Desserts",
        price: "1400 For Two",
        address: "Connaught Place, New Delhi",
        distance: "4.3",
        promoted: true,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "14",
        image: `${res14Image}`,
        resName: "California Burrito,",
        rating: "4.1",
        cusine: "Mexican,Ice Cream,Desserts,Mexican, American, Salads, Continental, Keto, Healthy Food, Beverages, Snacks, Desserts",
        price: "1700 For Two",
        address: "Connaught Place, New Delhi",
        distance: "2.4",
        promoted: false,
      },
    },
    {
      type: "restaurant",
      data: {
        id: "15",
        image: `${res15Image}`,
        resName: "EatFit",
        rating: "4.4",
        cusine: "Chinese, Healthy Food, Tandoor, Pizzas,",
        price: "1300 For Two",
        address: "Connaught Place, New Delhi",
        distance: "2.6",
        promoted: true,
      },
    },
  ];

  export default resList;