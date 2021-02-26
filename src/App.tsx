import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";


function App() {

    let [counterValue, setCounterValue] = useState(0);

    const incOnClick = () => {setCounterValue(counterValue += 1)};
    const resetOnClick = () => {setCounterValue(0)};

  return (
    <div className="App">
        <Counter counterValue={counterValue}
                 incOnClick={incOnClick}
                 resetOnClick={resetOnClick}

        />
    </div>
  );
}

export default App;
