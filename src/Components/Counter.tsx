import React from 'react';
import { Buttons } from './Buttons/Buttons';
import s from "./Counter.module.css"
import { Scoreboard } from './Scoreboard/Scoreboard';


export type CounterPropsType = {
    counterValue: number
    incOnClick: () => void
    resetOnClick: () => void
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counterWrapper}>
            <Scoreboard counterValue={props.counterValue} />
            <Buttons counterValue={props.counterValue}
                     incOnClick={props.incOnClick}
                     resetOnClick={props.resetOnClick}
            />
        </div>
    )
}
