import React from 'react';
import { useDispatch } from 'react-redux';
import { setTimer, setPlayPause, setRefresh } from '../redux/actions';

interface ITimerProps {
  breakOrSession: boolean;
  isPause: boolean;
  timer: number;
}

const Timer: React.FC<ITimerProps> = ({ breakOrSession, isPause, timer }) => {
  const dispatch = useDispatch();

  const handlePlayPause = () => dispatch(setPlayPause());
  const handleRefresh = () => dispatch(setRefresh());

  const correctTime = (value: number) => {
    const floorValue = Math.floor(value);

    if (floorValue === 0) return `00`;
    if (floorValue < 10) return `0${floorValue}`;

    return floorValue;
  };

  React.useEffect(() => {
    let interval: any = null;

    interval = setInterval(() => {
      if (!isPause) dispatch(setTimer());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, isPause, timer]);

  return (
    <div className="timer">
      <h2 className="timer__title">{breakOrSession ? 'Break' : 'Session'}</h2>
      <div className="timer__value">
        {`${correctTime(timer / 60)}:${correctTime(timer % 60)}`}
      </div>
      <div className="timer__btn-container">
        <button
          className="timer__button timer__button--playpause"
          onClick={handlePlayPause}>
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 275.725 275.725">
            <path
              fill="currentColor"
              d="M137.862,0C61.726,0,0,61.726,0,137.862c0,76.14,61.726,137.862,137.862,137.862c76.139,0,137.862-61.723,137.862-137.862 C275.725,61.726,214.001,0,137.862,0z M125.639,148.395L75.67,177.051c-8.606,4.93-15.583,0.891-15.583-9.041v-57.115 c0-9.926,6.978-13.973,15.583-9.03l49.969,28.656C134.245,135.455,134.245,143.455,125.639,148.395z M161.371,166.694 c0,9.922-5.442,17.968-12.169,17.968c-6.722,0-12.171-8.046-12.171-17.968V112.21c0-9.921,5.449-17.971,12.171-17.971 c6.727,0,12.169,8.05,12.169,17.971V166.694z M211.878,166.694c0,9.922-5.447,17.968-12.174,17.968 c-6.726,0-12.174-8.046-12.174-17.968V112.21c0-9.921,5.448-17.971,12.174-17.971c6.727,0,12.174,8.05,12.174,17.971V166.694z"
            />
          </svg>
        </button>
        <button
          className="timer__button timer__button--refresh"
          onClick={handleRefresh}>
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Timer;
