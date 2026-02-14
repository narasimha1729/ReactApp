import React from "react";
import {useState} from 'react';

function Count()
{

    const [count, setCount] = useState(0);

    return (<input type='button' value={count} onClick={() => setCount(count+1)} /> );

}

export default Count;