import {useState} from "react";
function FunctionCounter() {
    const [FunctionCounter, setFunctionCounter] = useState(0);

    const increment=() => {
        console.log();
        setFunctionCounter(FunctionCounter + 1);
    }
return (
    <div>
        <h1>function count is: {FunctionCounter}</h1>
        <button onClick={increment}>move</button>
    </div>
)
} 

export default FunctionCounter;