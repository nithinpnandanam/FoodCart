import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  // We are subscribing to a particular portion of the store
  // There is no need to subscribe to the entire store like the below step
  // const cartItems = useSelector((store)=>store)
  // because if we dont want cartItems to update when some other change has happened to our store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-auto rounded-lg px-[11px] pb-4 w-[65%]">
      <h1 className="pt-5 text-center text-4xl">Cart</h1>
      <div className="my-4 text-center">
        <button
          onClick={handleClearCart}
          className="ml-1 text-base py-1 px-5 border rounded-lg border-black"
        >
          Clear Cart
        </button>
      </div>
      <div>
        <ItemList menuDetails={cartItems}></ItemList>
      </div>
    </div>
  );
};
export default Cart;
