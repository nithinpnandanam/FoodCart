import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="bg-gray-300 flex justify-center py-7">
        <div className="w-2/4 flex justify-evenly">
          <div className=" flex items-center w-[500px]">
            <h2 className="text-3xl font-extrabold">
              For better experiance, download the app now
            </h2>
          </div>
          <div className="flex ">
            <div className="">
              <Link  to="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                  alt="Download Android App"
                  className='w-[200px] h-[65px] pr-5'
                />
              </Link>
            </div>
            <div>
              <Link  to="https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                  alt="App Store"
                  className='w-[200px] h-[65px]'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black flex justify-center">
        <div className="flex justify-center py-10">
          <div className="flex flex-col text-white mr-20">
            <h3 className="pb-4 text-xl">Swiggy</h3>
            <h4 className="text-stone-400">2023 Bundi Technologies Pvt Ltd</h4>
          </div>
          <div className="flex flex-col text-white mr-20">
            <h3 className="pb-4 text-xl">Company</h3>
            <h4 className="pb-2 text-stone-400 ">About</h4>
            <h4 className="pb-2 text-stone-400">Careers</h4>
            <h4 className="pb-2 text-stone-400">Team</h4>
            <h4 className="pb-2 text-stone-400">Swiggy One</h4>
            <h4 className="pb-2 text-stone-400">Swiggy Instasmart</h4>
            <h4 className="pb-2 text-stone-400">Swiggy Genie</h4>
          </div>
          <div className="flex flex-col text-white mr-20">
            <h3 className="pb-4 text-xl">Contact Us</h3>
            <h4 className="pb-2  text-stone-400">Help & Support</h4>
            <h4 className="pb-2  text-stone-400">Partner with us</h4>
            <h4 className="pb-2  text-stone-400">Ride with us</h4>
          </div>
          <div className="flex flex-col text-white mr-20">
            <h3 className="pb-4 text-xl">Legal</h3>
            <h4 className="pb-2  text-stone-400">Terms & Conditions</h4>
            <h4 className="pb-2  text-stone-400">Cookie Policy</h4>
            <h4 className="pb-2  text-stone-400">Privacy Policy</h4>
          </div>
          <div className="flex flex-col text-white mr-20">
            <h3 className="pb-4 text-xl">We deliver to :</h3>
            <h4 className="pb-2  text-stone-400">Bangalore</h4>
            <h4 className="pb-2  text-stone-400">Gurgaon</h4>
            <h4 className="pb-2  text-stone-400">Hyderabad</h4>
            <h4 className="pb-2  text-stone-400">Delhi</h4>
            <h4 className="pb-2  text-stone-400">Mumbai</h4>
            <h4 className="pb-2  text-stone-400">Pune</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
