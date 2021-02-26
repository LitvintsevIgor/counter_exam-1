import React from 'react';
import s from "./Buttons.module.css"
import {OneButton} from "./OneButton/OneButton";

export type ButtonsPropsType = {
    counterValue: number
    incOnClick: () => void
    resetOnClick: () => void
}

export const Buttons = (props: ButtonsPropsType) => {

    // короче придется походу тут писать map как в пути самурая с постами
    // то есть будем массив кнопок, вместо массива постов,
    // и эти данные будут прокидываться вниз

    let buttonsState = [
        {
            buttonTitle: "inc",
            disableValue: 5,
            func: props.incOnClick
        },
        {
            buttonTitle: "reset",
            disableValue: 0,
            func: props.resetOnClick
        }
    ]

    let buttonsElements = buttonsState
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


