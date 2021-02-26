import React from 'react';
import s from "./Counter.module.css"


export type CounterPropsType = {
    counterValue: number
    incOnClick: () => void
    resetOnClick: () => void
}

export const Counter = (props: CounterPropsType) => {

    let classForNumber = props.counterValue === 5 ? s.endNumber : ""

    return (
        <div className={s.counterWrapper}>
            <div className={s.windowWithNumber}>
                <span className={classForNumber}>{props.counterValue}</span>
            </div>
            <div className={s.btnWrapper}>
                <button className={s.btn} disabled={props.counterValue >= 5} onClick={props.incOnClick}>inc</button>
                <button className={s.btn} disabled={props.counterValue === 0} onClick={props.resetOnClick}>reset
                </button>
            </div>
        </div>
    )
}