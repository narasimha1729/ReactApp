import { useState } from "react";
import { useEffect } from "react";

function State()
{
    const [count, setCount] = useState(0); 
   useEffect(() => {
   setCount(c => c + 1);
}, []);
    
    return <button onClick = {() => setCount(count+1)} >{count}</button>;
//<button onClick = {() => setValue(value+1)} >{value}</button>;
}

export default State;
