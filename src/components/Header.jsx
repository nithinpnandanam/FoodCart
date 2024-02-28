import {LOGO_CDN} from "../utils/constants"
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";
import LogoRestaurent from "../assets/icons/food-delivery.png"
const Header = () => {
  const [headerBtn,setheaderBtn] = useState('Login')
  const onlineStatus = useOnlineStatus()
  const {loggedInUser} = useContext(UserContext)
  // useContext is a hook that we use to acces context

  // Subscribing to the store using a Selector
  // cart is the name that we gave in cartSlice.jsx
  // with the help of useSelector we have access to the store
  const cartItems = useSelector((store)=>store.cart.items)
    return (
      <div className="flex justify-between items-center bg-gray-300">
        <div className="w-[150px]">
          <img className="w-full" src={LogoRestaurent} alt="Logo Restaurent"></img>
        </div>
        <div className="nav-items">
          <ul className="flex pr-6 items-center">
            <li className="text-xl p-4">Online Status : {onlineStatus?"🟢":"🔴"} </li>
            <li className="text-xl p-4"><Link to="/groceries">Groceries</Link></li>
            <li className="text-xl p-4"><Link to="/">Home</Link></li>
            <li className="text-xl p-4"><Link to="/about">About Us</Link></li>
            <li className="text-xl p-4"> <Link to="/contact">Contact Us</Link></li>
            <li className="text-xl p-4"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
            <div className="text-xl p-4 flex first-letter items-center">
              <button className="w-[83px] border rounded-lg border-black p-2" onClick={
               ()=>{
                headerBtn==='Login'?setheaderBtn('Logout'):setheaderBtn('Login')
               }
              }>{headerBtn}</button>
            </div>
            <li className="text-xl p-4">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;