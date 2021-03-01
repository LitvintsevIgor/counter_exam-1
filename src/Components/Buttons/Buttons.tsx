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
                             disabled={b.disableValue === props.counterValue}
                             func={b.func}
        />)

    return (
        <div className={s.btnWrapper}>
            {buttonsElements}
        </div>
    )
}


