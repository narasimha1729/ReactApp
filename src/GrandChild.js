import React from "react";
import UserContext from "./UserContext";
import { useContext } from "react";

function Grandchild()
{
    const user = useContext(UserContext);  
    return (<div>Grandchild Component {user.name} is {user.age} years old.</div>);
}
export default Grandchild;