import useRestaurant from "../utils/useRestaurant"
const FoodItems = () =>{
    const resInfo = useRestaurant()
    console.log(resInfo)
    return (
        <h1>Hello</h1>
    )
}
export default FoodItems