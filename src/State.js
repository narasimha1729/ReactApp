import react, { useEffect } from "react";
import { useState } from "react";

function State()
{
    const [count, setCount] = useState(0); 
    const [value, setValue] = useState(0);
    useEffect(() => {
        //document.title = `You clicked ${count} times`;
        setCount(count+1);
    },[]);
    
    return <button onClick = {() => setCount(count+1)} >{count}</button>;
//<button onClick = {() => setValue(value+1)} >{value}</button>;
}

export default State;
