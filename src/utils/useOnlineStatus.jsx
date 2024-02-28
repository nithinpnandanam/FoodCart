import { useState,useEffect } from "react"
const useOnlineStatus = () =>{
    // check if online
    const [onlineStatus,setonlineStatus]=useState(true)
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(false)
        })
        window.addEventListener("online",()=>{
            setonlineStatus(true)
        })
    },[])
    // bolean value
    return onlineStatus
}
export default useOnlineStatus
