import React from 'react';

const Keyboard = ({ onClick }) => (
  <div className="keyboard">
    <button className="button" onClick={() => onClick('AC')}>AC</button>
    <button className="button" onClick={() => onClick('CE')}>CE</button>
    <button className="button" onClick={() => onClick('%')}>%</button>
    <button className="button operator" onClick={() => onClick('÷')}>÷</button>
    <button className="button" onClick={() => onClick('7')}>7</button>
    <button className="button" onClick={() => onClick('8')}>8</button>
    <button className="button" onClick={() => onClick('9')}>9</button>
    <button className="button operator" onClick={() => onClick('x')}>x</button>
    <button className="button" onClick={() => onClick('4')}>4</button>
    <button className="button" onClick={() => onClick('5')}>5</button>
    <button className="button" onClick={() => onClick('6')}>6</button>
    <button className="button operator" onClick={() => onClick('-')}>−</button>
    <button className="button" onClick={() => onClick('1')}>1</button>
    <button className="button" onClick={() => onClick('2')}>2</button>
    <button className="button" onClick={() => onClick('3')}>3</button>
    <button className="button operator" onClick={() => onClick('+')}>+</button>
    <button className="button" onClick={() => onClick('0')}>0</button>
    <button className="button" onClick={() => onClick('.')}>.</button>
    <button className="button" onClick={() => onClick('+/-')}>+/-</button>
    <button className="button operator" onClick={() => onClick('=')}>=</button>
  </div>
);

export default Keyboard;
