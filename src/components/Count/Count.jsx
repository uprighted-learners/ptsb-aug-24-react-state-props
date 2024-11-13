import { useState } from "react"

function Count() {
  
    const [ count, setCount ] = useState(0)
    console.log(setCount)

    function incCount() {
        count++
        console.log(count)
    }

    function decCount() {
        count--
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