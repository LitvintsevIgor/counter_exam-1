import s from "../Buttons.module.css";
import React from "react";

export type OneButtonType = {
    buttonTitle: string
    disableValue: number
    counterValue: number
    func: () => void
}

export const OneButton = (props: OneButtonType ) => {
    return (
        <button className={s.btn}
                disabled={props.counterValue === props.disableValue}
                onClick={props.func}
        >{props.buttonTitle}</button>
    )
}