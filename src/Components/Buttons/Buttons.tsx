import React from 'react';
import s from "./Buttons.module.css"
import {OneButton} from "./OneButton/OneButton";
import {buttonsStateType} from "../../App";

export type ButtonsPropsType = {
    counterValue: number
    incOnClick: () => void
    resetOnClick: () => void
    buttonsState: buttonsStateType[]
}

export const Buttons = (props: ButtonsPropsType) => {

    let buttonsElements = props.buttonsState
        .map(b => <OneButton buttonTitle={b.buttonTitle}
                             disableValue={b.disableValue}
                             func={b.func}
                             counterValue={props.counterValue}/>)

    return (
        <div className={s.btnWrapper}>
            {buttonsElements}
        </div>
    )
}


