import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import {WithPromotedLabel} from "../RestaurantCard"
import "@testing-library/jest-dom";
import data_res_1 from "../mocks/mockData1.json"
import data_res_2 from "../mocks/mockData2.json"

// Checking if a single restaurant card loads with props
it("Should load a single restaurant card with props", () => {
  render(<RestaurantCard resData={data_res_1} />);
  const restaurantName = screen.getByText("Burger King");
  expect(restaurantName).toBeInTheDocument();
});

// Checking if a single restaurant card loads with promoted label is loaded
// Note : this is how higher order components are checked
it("Should load a single restaurant card with with promoted label", () => {

  // render(<WithPromotedLabel resData={data_res_2} />);
  
  const WrappedComponent = WithPromotedLabel(RestaurantCard);
  render(<WrappedComponent resData={data_res_2} />);
  const restaurantNamePromoted = screen.getByText("Promoted");
  expect(restaurantNamePromoted).toBeInTheDocument();
});