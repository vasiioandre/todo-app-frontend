import { useState } from 'react'
import './Counter.css'

export default function Counter() {

    //const state = useState(0);
    const [count, setCount] = useState(0);

    function incrementCounterFunction() {
        // console.log(state)
        // console.log(state[0])
        // console.log(state[1])
        // state[1](state[0] + 1)

        setCount(count + 1)
        console.log(count)
    }

    function decrementCounterFunction() {
        setCount(count-1)
    }

    return (
        <div className="Count">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton"
                    onClick={incrementCounterFunction}
                >+1</button>
            </div>
            <div>
                <button className="counterButton"
                    onClick={decrementCounterFunction}
                >-1</button>
            </div>
        </div>
    )
}