import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";


export type buttonsStateType = {
    buttonTitle: string
    disableValue: number
    func: () => void
}

function App() {

    let [counterValue, setCounterValue] = useState(0);

    const incOnClick = () => {setCounterValue(counterValue += 1)};
    const resetOnClick = () => {setCounterValue(0)};

    // let buttonsState = [
    //     {
    //         buttonTitle: "inc",
    //         disableValue: 5,
    //         func: incOnClick
    //     },
    //     {
    //         buttonTitle: "reset",
    //         disableValue: 0,
    //         func: resetOnClick
    //     }
    // ]

  return (
    <div className="App">
        <Counter counterValue={counterValue}
                 incOnClick={incOnClick}
                 resetOnClick={resetOnClick}
                 buttonsState={buttonsState}
        />
    </div>
  );
}

export default App;
