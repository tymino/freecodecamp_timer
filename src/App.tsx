import React from 'react';
import useTypedSelector from './hooks/useTypedSelector';

import { setBreak, setSession } from './redux/actions';

import Control from './components/Control';
import Timer from './components/Timer';

const App: React.FC = () => {
  const { breakLength, sessionLength, isBreakTime, isPause, timer } = useTypedSelector((state) => state);

  return (
    <div className="app">
      <h1 className="app__title">25 + 5 Clock</h1>
      <div className="app__control-wrapper">
        <Control nameID="break" title="Break Length" value={breakLength} isPause={isPause} setAction={setBreak} />
        <Control nameID="session" title="Session Length" value={sessionLength} isPause={isPause} setAction={setSession} />
      </div>
      <div className="app__timer-wrapper">
        <Timer isBreakTime={isBreakTime} isPause={isPause} timer={timer} />
      </div>
    </div>
  );
};

export default App;
