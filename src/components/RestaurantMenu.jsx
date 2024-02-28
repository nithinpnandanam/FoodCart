
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"

import {useState} from "react"
const RestaurantMenu = () => {
    // Which accordian shpuld open first,Currently its nulll so all will be closed
    const [showIndex,setshowIndex] = useState(null);
    const {resId}=useParams()
    const resInfo = useRestaurantMenu(resId)
    if(resInfo.length===0){
        return(<Shimmer/>)
    }
    const {name,cuisines}=resInfo?.cards[0]?.card?.card?.info
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(element=>
        // console.log(element.card.card['@type'])
        element?.card?.card['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    const dummy = "Dummy Data"

    return (
      <div className="p-12 w-3/5 m-auto">
        <h1 className="text-2xl pb-4 font-medium">{name}</h1>
        {categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItem={index === showIndex ? true : false}
            setshowIndexx={() => showIndex === index ? setshowIndex(null) : setshowIndex(index)}
            dummy={dummy}
          />
          // This is what we pass as props { data:{@type: value1, title: value2, itemCards: value3} }
        ))}
      </div>
    );
}
export default RestaurantMenu