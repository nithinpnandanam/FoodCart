import ContactUs from "../ContactUs";
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"

// instead of the keyword "test" , "it" cal also be used
// using describe we can group test cases
describe("Test cases of contact us",()=>{
    // beforeAll(()=>{
    //     console.log("Before All")
    // })
    // beforeEach(()=>{
    //     console.log("Before Each")
    // })
    // AfterAll(()=>{
    //     console.log("After All")
    // })
    // AfterEach(()=>{
    //     console.log("After Each")
    // })
    test("Should load contact us component",()=>{
        // rendering
        render (<ContactUs/>)
        // ContactUs is in jsx so this needs to be transpiled to a react element for JS Dom to understand
        // this is done with the help of @babel/preset-react 
    
        // querying
        const heading = screen.getByRole("heading")
        // assertion
        // using toBeInTheDocument() 
        // console.log(heading) >> a react element is produced in the console
        expect(heading).toBeInTheDocument()
    })
    
    
    // two methods by which we can check whether there are buttons in our page 
    
    test("Should load button in contact us component",()=>{
        render (<ContactUs/>)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
    })
    
    test("Should load button in contact us component",()=>{
        render (<ContactUs/>)
        const button = screen.getByText("Submit")
        expect(button).toBeInTheDocument()
    })
    
    // Below is a test case that fails
    
    // test("Should load button in contact us component",()=>{
    //     render (<ContactUs/>)
    //     const button = screen.getByText("Random")
    //     // Random is not present .So this test fails
    //     // whats loaded in the jsdom is also shown in the console
    //     expect(button).toBeInTheDocument()
    // })
    
    // checking if a placeholder exist or not
    test("Should load an input with placeholder name in contact us component",()=>{
        render (<ContactUs/>)
        const placeholderName = screen.getByPlaceholderText("Name")
        expect(placeholderName).toBeInTheDocument()
    })
    
    test("Should load all the input in contact us component",()=>{
        render (<ContactUs/>)
        // const allInput = screen.getAllByRole("input")
        // instead of input we must use the keywork textbox
        const allInput = screen.getAllByRole("textbox")
        // console.log(allInput);
        // allInput = [reactElement1,reactElement2]
        expect(allInput.length).toBe(2)
    })
})
