import React from "react";
import Shimmer from "./Shimmer";


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      userInfo: {
        name: "Akshay Saini",
        location: "India",
        avatar_url: "https://avatars.githubusercontent.com/u/12824231?v=4"
      }
    })

    console.log(this.props.name+" Child Constructor")
  } 

  async componentDidMount(){
      
      const data =  await fetch("https://api.github.com/users/akshaymarch7");
      const response = await data.json();

      console.log(response)

      setTimeout(() => {
        this.setState({
          userInfo:response,
        })
      }, 2000);

      // setInterval(() => {
      //   console.log(this.props.name+" Child Mounted")
      // }, 1000)
    }

    componentDidUpdate(){
      console.log("Component Did Update")
    }

    componentWillUnmount(){
      console.log("componentWillUnmount")
    }


  render() {

    
    const { name , location, avatar_url } = this.state.userInfo;

   
    console.log(this.props.name+" Child Render")
     
    return this.state.userInfo.name === null ? <Shimmer/> : (
      <div className="user_card">
        <img src={avatar_url} alt="" />
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <h3>Contact : aakashconnect@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;


/**
 * 
 * --Mounting Phase---
 * 
 * Constructor(With dummy data)  this.state
 * Render(With dummy data)
 *      DOM is rendered with dummy data<HTML/>
 * ComponentDidMount Called
 *     API call
 *     this.setState  --> State Variable is updated
 * 
 * 
 * ---Update Phase---
 * 
 * Render(with API data)
 *     DOM is updated with API data <HTML/>
 * ComponentDidUpdate Called
 */
