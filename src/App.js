import React, { useState, lazy, Suspense, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import resList from "./Utils/MockData";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import {
  Outlet,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import useOnlineStatus from "./Utils/useOnlineStatus";
import offlineImage from "./Images/offline.png";
import Shimmer from "./Components/Shimmer";
import UserContext from "./Utils/UserConText";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

//Chunking
//Lazy Loading
//Code Spliting
//Dynamic Bundling
//On demand loading
//Dynamic import

const About = lazy(() => import("./Components/About"));
const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  const [cardData, setCardData] = useState(resList);
  const onlineStatus = useOnlineStatus();

  const [userName, setUserName] = useState();

  //Authentication
  useEffect(() => {
    //Make an APII  call and send Username And Password
    const data = {
      name: "Sagar",
    };
    setUserName(data.name);
  }, []);
  // console.log(userName);

  const Test = () => {
    return (
      <>
        <Header updateData={setCardData} />        
        <Outlet />
        <Footer/>

      </>
    );
  };

  function refreshPage() {
    window.location.reload();
  }

  if (!onlineStatus) {
    return (
      <div className="offlineContent">
        <div>
          <img className="offlineImg" src={offlineImage} alt="image" />
          <button className="refreshBtn" onClick={refreshPage}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Routes>
            <Route path="/" Component={() => <Test />}>
              <Route path="/" Component={() => <Body card={cardData} />} />
              <Route
                path="/about"
                Component={() => (
                  <Suspense fallback={<Shimmer />}>
                    <About />
                  </Suspense>
                )}
              />
              <Route path="/contactUs" Component={() => <ContactUs />} />
              <Route
                path="/grocery"
                Component={() => (
                  <Suspense fallback={<Shimmer />}>
                    <Grocery />
                  </Suspense>
                )}
              />
              <Route
                path="restaurantMenu/:resId/:id"
                element={<RestaurantMenu />}
              />
              <Route path="/cart" Component={() => <Cart/>}/>
            </Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);
