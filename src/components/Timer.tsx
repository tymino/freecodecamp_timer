import React from 'react';

interface ITimerProps {
  isPause: boolean;
  timer: number;
}

const Timer: React.FC<ITimerProps> = ({ isPause, timer }) => {
  return (
    <div>
      Timer
    </div>
  );
};

export default Timer;
