import { useState,useEffect } from "react";
import {restaurant_data_api_URL} from "./constants";
const useRestaurant = (resId) => {
    const [resInfo,setResInfo]=useState([])
    useEffect(()=>{
        getRestaurantInfo()
    },[])
    const getRestaurantInfo = async() => {
        const resposne =  await fetch(restaurant_data_api_URL)

        const json = await resposne.json()
        setResInfo(json.data)
    }
    return resInfo
}
export default useRestaurant