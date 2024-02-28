import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Footer from "./Footer";
// import FoodItems from "./FoodItems";
import { BANNER_FOOD_URL } from "../utils/constants";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [curatedFoods, setcuratedFoods] = useState([]);
  const { setUserName, loggedInUser } = useContext(UserContext);
  // The variable name must not be similar to higher order component name
  const WithPromotedLabels = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.5270567&lng=76.9419295&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setcuratedFoods(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div>
        <h1>Hey there I think you are online</h1>
      </div>
    );
  }

  // const slideLeft = () => {
  //   let slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };

  // const slideRight = () => {
  //   let slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };

  const smoothScroll = (element, target, duration) => {
    const start = element.scrollLeft;
    const change = target - start;
    const increment = 20; // Adjust as needed
  
    const animateScroll = (elapsedTime) => {
      elapsedTime += increment;
      const position = easeInOut(elapsedTime, start, change, duration);
      element.scrollLeft = position;
  
      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll.bind(null, elapsedTime));
      }
    };
  
    const easeInOut = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animateScroll.bind(null, 0));
  };
  
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    smoothScroll(slider, slider.scrollLeft - 500, 500);
  };
  
  const slideRight = () => {
    let slider = document.getElementById("slider");
    smoothScroll(slider, slider.scrollLeft + 500, 500);
  };
  
  const restaurantsInHeader = (e) => {
    const url = e.action.link;
    const pattern = /collection_id=(.*?)&type=/;
    const matchResult = url.match(pattern);
    const extractedStringans = matchResult[1];
    return extractedStringans;
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="w-4/5 m-auto py-10 ">
        <div className="flex justify-end pb-8">
          <MdChevronLeft size={40} onClick={slideLeft} />
          <MdChevronRight size={40} onClick={slideRight} />
        </div>
        <div
          className="whitespace-nowrap overflow-x-auto no-scrollbar scrollbar-hide"
          id="slider"
        >
          {curatedFoods.map((element) => {
            // console.log(element)
            return (
              <div className="w-[144px] mr-2 inline-block">
                <Link to={"/restaurantByFood/" + restaurantsInHeader(element)}>
                  <img
                    src={BANNER_FOOD_URL + element.imageId}
                    className=""
                    alt="food_image"
                  />
                </Link>
              </div>
            );
          })}
          {/* <FoodItems /> */}
        </div>
        <div className="flex justify-between pt-4 my-6">
          <div className="flex">
            <div className="flex items-center">
              {/* data-testid >>>> this is the unique id that we use for selecting while testing */}
              <input
                type="text"
                value={searchValue}
                className="max-w-5 h-[82%] border border-gray-400 rounded pl-2 mr-2"
                data-testid="searchInput"
                onChange={(e) => {
                  setsearchValue(e.target.value);
                }}
              />

              <a
              href="#_"
              class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              onClick={() => {
                const filteredbySearchRest = listOfRestaurants.filter(
                  (element) =>
                    element.info.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                );
                setfilteredRestaurants(filteredbySearchRest);
              }}
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span class="relative text-white">Search</span>
            </a>
            </div>

            <input
              type="text"
              className="max-w-5 border rounded pl-2 ml-2 border-gray-400"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="flex items-center pr-4">
            <a
              href="#_"
              class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              onClick={() => {
                const filteredbySearchRest = listOfRestaurants.filter(
                  (element) => element.info.avgRating > 4.3
                );
                setfilteredRestaurants(filteredbySearchRest);
              }}
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span class="relative text-white">Top Rated Restaurants</span>
            </a>
          </div>
        </div>
        <h1 className="text-3xl my-6">
          Hello {loggedInUser} here are the top restaurants for you
        </h1>
        <div className="flex flex-wrap gap-12">
          {filteredRestaurants.map((element) => {
            // console.log("element", element);
            return (
              <Link key={element.info.id} to={"/restaurant/" + element.info.id}>
                {element.info.totalRatingsString == "10K+" ? (
                  <WithPromotedLabels resData={element} />
                ) : (
                  <RestaurantCard resData={element} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
