import React from 'react';

import Control from './components/Control';
import Timer from './components/Timer';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app__title">25 + 5 Clock</h1>
      <div className="app__control-wrapper">
        <Control nameID="break" title="Break Length" value={25} />
        <Control nameID="session" title="Session Length" value={5} />
      </div>
      <div className="app__timer-wrapper">
        <Timer />
      </div>
    </div>
  );
};

export default App;
