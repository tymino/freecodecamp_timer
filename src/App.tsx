import React from 'react';

import Control from './components/Control';
import Timer from './components/Timer';

const App = () => {
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div className="control-wrapper">
        <Control />
        <Control />
      </div>
      <Timer />
    </div>
  );
};

export default App;
