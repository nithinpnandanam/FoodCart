import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props.name+" Child Constructor")
        this.state={
            userInfo:{
                name:"Dummy",
                id:"Default"
            }
        }
    }
    async componentDidMount(){
        // console.log(this.props.name+" Child componentDidMount")
        const response = await fetch("https://api.github.com/users/nithinpnandanam");
        const json = await response.json()
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        // console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        // console.log("componentWillUnmount")
    }
    render(){
        const {name,id}=this.state.userInfo
        // console.log(name+" Child Render");
        return(
            <div className="p-4 w-fit border-2 border-solid bg-gray-100 m-auto mb-4">
                <h2>Name : {name} </h2>
                <h2>ID : {id}</h2>
            </div>
        )
    }
}

export default UserClass