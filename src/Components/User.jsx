import React from "react";
import { useState } from "react";
const User = (props) => {

    const [count] = useState(0)
    const [count2] = useState(1)
    const {name, location}  = props;


    return <div className="user_card">
        <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <h3>Contact : dayasagarconnect@gmail.com</h3>
    </div>
}
export default User;