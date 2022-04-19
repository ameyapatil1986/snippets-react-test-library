import { Fragment } from "react";
import { useState } from "react";


const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <Fragment>
            <h1>My Counter</h1>
            <button id="b1" data-testid="b1" onClick={increment} value="x-men">+</button>
            {' '}
            <div>
                <div>
                    <h3>{counter}</h3>
                </div>
            </div>
            {' '}
            <button data-testid="b2" onClick={decrement}>-</button>
            <div>
                <input data-testid="input" type="number" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            </div>    
        </Fragment>
    );
}
 
export default Counter;