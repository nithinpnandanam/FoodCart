import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom"

// Checking if login button is present in the header component
it("Should load header component with login button", () => {
  render(
    // BrowserRouter since when header is read to be printed in the jsdom "Link" which is a part of react router dom appers 
    // Provider and appStore to make jsdom to understand redux
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button")
  expect(loginButton).toBeInTheDocument()

});

// If there are several buttons and we need to chcek whether a specific button is present or not
it("Should load header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"Login"})
    expect(loginButton).toBeInTheDocument()
  
  });

// Checkinf if "Cart - (0 items)" is present as a text 
it("Should load header component with zero items in cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByText("Cart - (0 items)")
    expect(loginButton).toBeInTheDocument()
  });
  // cart - 1 or cart -2 ......so in that case we can juse like this
  // so regex can also be passed in screen.getByText
  it("Should load header component with zero items in cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByText(/Cart/)
    expect(loginButton).toBeInTheDocument()
  });
  // when login button is clicked it must change to logout
  it("Should login button change to logout when clicked", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:"Logout"})
    expect(logoutButton).toBeInTheDocument()
  });