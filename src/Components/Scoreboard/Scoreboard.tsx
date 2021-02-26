import React from 'react';
import s from "./Scoreboard.module.css"


export type ScoreboardPropsType = {
    counterValue: number
}

export const Scoreboard = (props:ScoreboardPropsType) => {

    let classForNumber = props.counterValue === 5 ? s.endNumber : ""

    return (
        <div className={s.windowWithNumber}>
            <span className={classForNumber}>{props.counterValue}</span>
        </div>
        )
}