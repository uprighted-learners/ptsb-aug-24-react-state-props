import { useState } from "react"

function Count({ count, setCount }) {
    
    // Syntax:
    // [ varaiable, setVariableFx ] = useState(initialValue)

    // const [ count, setCount ] = useState(0)
    // count -> value placeholder
    // setCount -> fx that handles updating said value
    // useState => holds the inital count value

    function incCount() {
        // Any other approach may inc value twice or none at all
        setCount(prevCount => prevCount + 1)
        console.log(count)
    }

    function decCount() {
        setCount(prevCount => prevCount - 1)
        console.log(count)
    }

    return (
        <div>
            <button onClick={incCount}>+</button>
            <span>{count}</span>
            <button onClick={decCount}>-</button>
        </div>
    )
}

export default Count