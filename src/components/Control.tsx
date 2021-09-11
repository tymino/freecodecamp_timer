import React from 'react';

interface IControlProps {
  nameID: string;
  title: string;
  value: number;
}

const Control: React.FC<IControlProps> = ({ nameID, title, value = 55 }) => {
  return (
    <div className="control">
      <h3 id={`${nameID}-label`} className="control__title">{title}</h3>
      <div className="control__button-wrapper">
        <button id={`${nameID}-decrement`} className="control__button control__button--add">
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"></path>
          </svg>
        </button>

        <div id={`${nameID}-length`} className="control__value">{value}</div>

        <button id={`${nameID}-increment`} className="control__button control__button--subtract">
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Control;
