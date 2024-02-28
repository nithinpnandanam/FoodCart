import { BANNER_FOOD_MENU } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
const RestaurantByFood = () => {
  const [restaurantForFood, setrestaurantForFood] = useState([]);
  const [restaurantHeading,setrestaurantHeading] = useState(null)
  useEffect(() => {
    fetchDataHeader(id);
  }, []);
  const { id } = useParams();
  // console.log(id);
  const WithPromotedLabels = WithPromotedLabel(RestaurantCard);
  // Fetching data to show all the restaurants for a particular food
  const fetchDataHeader = async (extractedString) => {
    const response = await fetch(
      BANNER_FOOD_MENU +
        extractedString +
        "&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await response.json();
    // console.log(json.data.cards.slice(3))
    setrestaurantForFood(json.data.cards.slice(3));
    setrestaurantHeading(json.data.cards[0].card.card)

  };
  const { title, description } = restaurantHeading || {};
  return restaurantForFood.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="w-4/5 m-auto py-4">
          <h1 className="py-4 font-black text-4xl">{title}</h1>
          <h1 className=" text-lg">{description}</h1>
          <h1 className="font-black text-2xl pt-6">Restaurants to explore</h1>
      </div>
      <div className="flex flex-wrap w-4/5 m-auto gap-x-12 ">
        {restaurantForFood.map((element) => {
          return (
            <Link
              key={element.card.card.info.id}
              to={"/restaurant/" + element.card.card.info.id}
            >
              {element.card.card.info.totalRatingsString == "10K+" ? (
                <div className="">
                  <WithPromotedLabels resData={element.card.card} />
                </div>
              ) : (
                <div className="">
                  <RestaurantCard resData={element.card.card} />
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantByFood;
