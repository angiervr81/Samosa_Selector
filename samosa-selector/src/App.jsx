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
          onClick={updateCount}
          />
        </div>
      </div>
      <div className='container'>
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>Each Click give you 2x samosas!</p>
          <button>Cost: 10 samosas</button>
        </div>

        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>Your Clicks are 5x stronger!</p>
          <button>Cost: 100 samosas</button>
        </div>

        <div className="upgrade">
          <h3>Full Feast👩🏽‍🍳 </h3>
          <p>Your Clicks are 5x stronger!</p>
          <button>Cost: 1000 samosas</button>
        </div>
      </div>
    </div>
  );
};

export default App;

