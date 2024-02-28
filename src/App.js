import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Groceries from "./components/Groceries";
const Groceries = lazy(()=>import("./components/Groceries"))
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import RestaurantByFood from "./components/RestaurantByFood";
const AppLayout = () => {
  const [userName,setUserName] = useState()
  useEffect(()=>{
    // make an api call and set username and passsowrd
    const data ={
      name:"Rohit Sharma"
    }
    setUserName(data.name)
  },[])
  // {loggedInUser:userName} this is what we give inside createContext
  return (
    <Provider store={appStore}>
{/* Default */}
    <UserContext.Provider value={{loggedInUser:"Virat Kholi"}}>
      {/* Rohit Sharma */}
      <div>
        <Header/>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
          <Outlet/>
        </UserContext.Provider>
      </div>
    </UserContext.Provider>
    </Provider>
    
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>
      },,
      {
        path:"/about",
        element:<AboutUs/>,
        errorElement:<Error/>
      },
      {
        path:"/contact",
        element:<ContactUs/>,
        errorElement:<Error/>
      },
      {
        path:"/groceries",
        element:<Groceries/>,
        element: <Suspense fallback={(<h1>Loading...</h1>)}><Groceries /></Suspense>,
        errorElement:<Error/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
        errorElement:<Error/>
      },
      {
        path:"/cart",
        element:<Cart/>,
        errorElement:<Error/>
      },
      {
        path:"/restaurantByFood/:id",
        element:<RestaurantByFood/>,
        errorElement:<Error/>
      }
    
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);