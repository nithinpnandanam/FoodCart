import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import Cart from "../Cart";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import ParagonMenu from "../mocks/ParagonMenu.json";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(ParagonMenu);
    },
  });
});

it("is Cart page getting updated when any food item is added", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart/>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const SelectedCategory = screen.getByText("Salads (10)");
  fireEvent.click(SelectedCategory)
  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(10);
  const addBtns = screen.getAllByRole("button", { name: "Add +" })
  fireEvent.click(addBtns[0])
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument()
  fireEvent.click(addBtns[1])
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument()
  expect(screen.getAllByTestId("foodItem").length).toBe(12)
  fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))
});
