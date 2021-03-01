import s from "../Buttons.module.css";
import React from "react";

export type OneButtonType = {
    buttonTitle: string
    disabled: boolean
    func: () => void
}

export const OneButton = (props: OneButtonType ) => {
    return (
        <button className={s.btn}
                disabled={props.disabled}
                onClick={props.func}
        >{props.buttonTitle}</button>
    )
}