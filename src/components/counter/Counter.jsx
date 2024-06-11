import { useState } from 'react'
import { PropTypes } from 'prop-types'
import './Counter.css'

export default function Counter({by}) {

    //const state = useState(0);
    const [count, setCount] = useState(0);

    console.log(by)

    function incrementCounterFunction() {
        // console.log(state)
        // console.log(state[0])
        // console.log(state[1])
        // state[1](state[0] + 1)

        setCount(count + by)
        console.log(count)
    }

    function decrementCounterFunction() {
        setCount(count - by)
    }

    return (
        <div className="Count">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton"
                    onClick={incrementCounterFunction}
                >+{by}</button>
            </div>
            <div>
                <button className="counterButton"
                    onClick={decrementCounterFunction}
                >-{by}</button>
            </div>
        </div>
    )
}

Counter.propTypes = {
    by: PropTypes.number
}

Counter.defaultProps = {
    by: 1
}