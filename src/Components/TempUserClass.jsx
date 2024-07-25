import React from "react";

class TempUserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        count:0,
        count2:1,
    }
    // console.log(this.props.name+"Temp Child Constructor")
  } 

  
  componentDidMount(){
    setTimeout(() => {
      // console.log(this.props.name+"Temp Child Mounted")
    },)
  }




  render() {
    const { name, location } = this.props;
    const {count, count2} = this.state;
    // console.log(this.props.name+"Temp Child Render")
    return (
      <div className="user_card">
        <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
        <button className="countBtn" onClick={() => {
            //Never update state variable directly.
            this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 2
            })
        }}>Count Increase</button>
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <h3>Contact : aakashconnect@gmail.com</h3>
      </div>
    );
  }
}

export default TempUserClass;
