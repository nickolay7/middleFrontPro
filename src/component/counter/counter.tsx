import {useState} from 'react';
import styles from "./style.modules.scss";

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const onCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2><br />
            <button className={styles.btn} onClick={onCounter}>increment</button>
        </div>
    );
};
