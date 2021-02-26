import React from 'react';
import { buttonsStateType } from '../App';
import { Buttons } from './Buttons/Buttons';
import s from "./Counter.module.css"
import { Scoreboard } from './Scoreboard/Scoreboard';


export type CounterPropsType = {
    counterValue: number
    incOnClick: () => void
    resetOnClick: () => void
    buttonsState: buttonsStateType[]
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counterWrapper}>
            <Scoreboard counterValue={props.counterValue} />
            <Buttons counterValue={props.counterValue}
                     incOnClick={props.incOnClick}
                     resetOnClick={props.resetOnClick}
                     buttonsState={props.buttonsState}
            />
        </div>
    )
}
