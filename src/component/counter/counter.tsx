import {useState} from 'react';
import "./style.scss";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const onCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2><br />
            <button className="btn" onClick={onCounter}>increment</button>
        </div>
    );
};

export default Counter;