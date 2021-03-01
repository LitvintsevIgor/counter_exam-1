import React from 'react';
import { buttonsStateType } from '../App';
import { Buttons } from './Buttons/Buttons';
import s from "./Counter.module.css"
import { ScoreBoard } from './ScoreBoard/ScoreBoard';


export type CounterPropsType = {
    counterValue: number
    incOnClick: () => void
    resetOnClick: () => void
    buttonsState: buttonsStateType[]
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counterWrapper}>
            <ScoreBoard counterValue={props.counterValue} />
            <Buttons counterValue={props.counterValue}
                     incOnClick={props.incOnClick}
                     resetOnClick={props.resetOnClick}
                     buttonsState={props.buttonsState}
            />
        </div>
    )
}
