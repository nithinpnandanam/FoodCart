import { useState,useEffect } from "react"
import {swiggy_menu_api_URL} from "./constants"
const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo]=useState([])
    useEffect(()=>{
        getRestaurantInfo()
    },[])
    const getRestaurantInfo = async() => {
        const resposne =  await fetch(swiggy_menu_api_URL+resId)

        const json = await resposne.json()
        setResInfo(json.data)
    }
    return resInfo
}
export default useRestaurantMenu