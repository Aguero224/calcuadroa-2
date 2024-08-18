import React, { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import Keyboard from './Components/Keyboard';

const App = () => {
  const [value, setValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = (button) => {
    if (button === '=') {
      try {
        // Reemplaza los operadores no válidos por los correctos
        const expression = value
          .replace(/x/g, '*')  // Multiplicación
          .replace(/÷/g, '/'); // División
          
        // Evalúa la expresión matemática
        const result = eval(expression);
        setValue(result.toString());
      } catch (e) {
        setValue('Error');
      }
    } else if (button === 'AC') {
      setValue('');
    } else if (button === 'CE') {
      setValue(prev => prev.slice(0, -1));
    } else if (button === '+/-') {
      setValue(prev => (prev.charAt(0) === '-' ? prev.slice(1) : '-' + prev));
    } else if (button === '%') {
      try {
        const result = eval(value
          .replace(/x/g, '*')
          .replace(/÷/g, '/')) / 100;
        setValue(result.toString());
      } catch (e) {
        setValue('Error');
      }
    } else {
      setValue(prev => prev + button);
    }
  };

  return (
    <div className={`calculator ${isDarkMode ? 'dark' : 'light'}`}>
      <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? '🌞' : '🌜'}
      </button>
      <Display value={value} />
      <Keyboard onClick={handleClick} />
    </div>
  );
};

export default App;
