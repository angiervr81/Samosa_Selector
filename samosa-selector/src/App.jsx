import { useState } from 'react';
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);
  return (
    <div className="App">
      <div className="app-container">
      <div className="header">
        <h1>Samosa Selector</h1>

        <h2>Count: {count}</h2>

        <img
          className="samosa"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aAsZ_HEnDRiInJJQehosA7P9-9idHS1kpQ&s"
          alt="Samosa"
          onClick={updateCount}/>
        </div>
      </div>
    </div>
  );
}

export default App;

