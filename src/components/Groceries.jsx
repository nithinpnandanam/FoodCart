import UserContext from "../utils/UserContext"
import { useContext } from "react"
const Groceries = () => {
    const {loggedInUser} = useContext(UserContext)
    return(
        <div className="flex flex-col justify-center my-6">
            <h1  className="text-center text-3xl my-4 ">Logged In User : {loggedInUser}</h1>
            <h2  className="text-center text-3xl my-4">This is the page for buying Groceries</h2>
        </div>   
    )
}
export default Groceries