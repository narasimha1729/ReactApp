import React from "react";
import Child from "./Child";

import UserContext from   "./UserContext";

function Parent()
{
    const user = {name: "John", age: 30};

    return (
        <UserContext.Provider value={user}>
            <Child />
        </UserContext.Provider>
    );
}

export default Parent;