import { CDN_URL_FOOD } from "../utils/constants";
import star from "../assets/icons/star.png";
// import LogoRestaurent from "../assets/icons/food-delivery.png"
import NoImageAvailable from "../assets/NoImageAvailable2.png";
// import { useState} from "react";
// We have imported a named export

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, locality } =
    props.resData.info;
  // console.log(props)
  // const [imageLoaded, setImageLoaded] = useState(true);
  if (props.resData.info.cloudinaryImageId === null || undefined) {
    return <h1>hello</h1>;
  } else {
    return (
      <div className="w-80 my-4 p-[5px] h-[400px] max-w-xs transition duration-300 ease-in-out hover:scale-110" data-testid="resCard">
        <div className="h-[60%] pb-4 ">
          <img
            // className="w-full  mb-4 h-full rounded-2xl"
            className="w-full  mb-4 h-full rounded-2xl "
            src={CDN_URL_FOOD + cloudinaryImageId}
            // onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              
              // Check if the error is a 404 status
              // setImageLoaded(false)
              if (e.target.complete===true) {
                e.target.src =
                  "https://media-assets.swiggy.com/swiggy/image/upload/dls-web/assets/images/placeholder-light.png";
              }
            }}
          />
        </div>
        <div className="pl-3 ">
          <h3 className="text-xl font-medium pb-1">{name}</h3>
          <div className="flex pb-1">
            <div className="w-5 mr-3">
              <img src={star} alt="star" />
            </div>
            <h4>{avgRating}</h4>
          </div>
          <h4 className="pb-1 text-gray-80000 opacity-50">{cuisines.join(", ")}</h4>
          <h4 className="pb-1 text-gray-80000 opacity-50">{locality}</h4>
        </div>
      </div>
    );
  }
};

export const WithPromotedLabel = (RestaurantCard) => {
  // props == {{resData:element}}
  return (props) => {
    return (
      <div className="relative">
        <label className="rounded-tl-[16px] rounded-tr-lg rounded-br-lg rounded-bl-lg absolute left-[6px] top-[6px] p-2.5 bg-black text-white">
          Promoted
        </label>
        {/* Restaurant card must only take {resData:element} */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
//   This is called default export
