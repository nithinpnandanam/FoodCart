import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import mockAllResData from "../mocks/mockAllResData";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Explanation of the fetch function that we defined
// This is the basic syntax
// global.fetch = jest.fn(() => {
//   return 
// });
// return Promise.resolve({ json: () => Promise.resolve(data) }): 
// This line configures the mock to return a resolved Promise with an object that has a json method.
// The json method is also a mock function that returns another resolved Promise with the provided data.
// Since testing is done in JSdom rather than in a browser we cant use fetch 
// Thats why we use a custom function similar to fetch
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Warning: An update to Body inside a test was not wrapped in act(...).
// When testing, code that causes React state updates should be wrapped into act(...):

// act(() => {
//   /* fire events that update state */
// });

// Thus when a state update happens act must be used
// act returns a promise
// so use async await

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// To avoid problem with Link in the body component we use BrowserRouter
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockAllResData);
    },
  });
});
it("Should render body component and get all the zam zam restaurants", async () => {
  await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
  });
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput")

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // <input
  //   type="text"
  //   value={searchValue}
  //   data-testid="searchInput"
  //   onChange={(e) => {
  //     setsearchValue(e.target.value);
  //   }}
  // />

  // e defined above is represented below 

  // {target: { value: "Zam Zam" }} 
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  fireEvent.change(searchInput, {
    target: { value: "Veg" },
  });
  fireEvent.click(searchBtn);

  // screen should load 4 cards
  // Here there might be a difference since the restaurants may change in the live api
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(4);

});

it("Should render all the top rated restaurants", async () => {
  await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
  });
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedsearchBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
  fireEvent.click(topRatedsearchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(19);

});

