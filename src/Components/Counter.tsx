import React, {useState} from 'react';
import s from "./Counter.module.css"


export const Counter = () => {

    let [counterValue, setCounterValue] = useState(0);
    let classForNumber = counterValue === 5 ? s.endNumber : ""

    const incOnClick = () => {setCounterValue(counterValue += 1)};
    const resetOnClick = () => {setCounterValue(0)};

    return (
        <div className={s.counterWrapper}>
            <div className={s.windowWithNumber}>
                <span className={classForNumber}>{counterValue}</span>
            </div>
            <div className={s.btnWrapper}>
                <button className={s.btn} disabled={counterValue >= 5} onClick={incOnClick} >inc</button>
                <button  className={s.btn}  disabled={counterValue === 0} onClick={resetOnClick }>reset</button>
            </div>
        </div>
    )
}