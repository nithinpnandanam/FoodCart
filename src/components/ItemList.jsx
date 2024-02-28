import { useDispatch } from "react-redux";
import { CDN_URL_FOOD } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import NoImageAvailable from "../assets/NoImageAvailable2.png"
const ItemList = ({ menuDetails,dummy }) => {
  // UseDispatch is a hook
  const dispatch = useDispatch();
  const handleAddItem = (element) =>{
    dispatch(addItems(element))
  }
  // console.log("menuDetails",menuDetails)
  return menuDetails.map((element) => {
    return (
      <div className="flex justify-between py-4 shadow-lg mb-5 p-4 bg-gray-100" key={element.card.info.id} data-testid="foodItem">  
        <div className="w-4/5">
          <p>{element.card.info.name}</p>
          <p>{element.card.info.description}</p>
          <p>₹{element.card.info.price/100}</p>
        </div>
        <div className="relative w-[215px] h-[187px]">
          <img className={` h-full rounded-lg ${element.card.info.imageId ? ''  : 'w-[150px] h-[150px] pb-12 ml-[38px]'}`} src={element.card.info.imageId?CDN_URL_FOOD + element.card.info.imageId:NoImageAvailable} alt="Food Image" />
          <button className="absolute bottom-[0px] right-16 rounded-lg py-3 px-5 bg-black text-white" onClick={()=>handleAddItem(element)}>Add +</button>
        </div>
      </div>
    );
  });
};
export default ItemList;
