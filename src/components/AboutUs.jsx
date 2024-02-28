import UserClass from "./UserClass"
import React from "react"
import UserContext from "../utils/UserContext"
class AboutUs extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent Constructor")
    }
    componentDidMount(){
        // console.log("Parent componentDidMount")
    }
    render(){
        // console.log("Parent Render");
        return(
            <div className="text-center">
                <h1 className="text-center text-3xl my-4">This is the About Us Page</h1>
                <UserClass name={'First'} place={'Place 1'}/>
              
                    {/* <UserContext.Consumer>
                        {(data)=>console.log(data)}
                    </UserContext.Consumer> */}
                    <UserContext.Consumer>
                        {({loggedInUser})=><h2>Logged In user : {loggedInUser}</h2>}
                    </UserContext.Consumer>
            </div>
        )
    }
}
export default AboutUs