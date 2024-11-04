
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');    
  const [result, setResult] = useState(null); 

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');         
      setResult(null);      
    } else if (value === '=') {
      try {
        setResult(eval(input)); 
      } catch (error) {
        setResult('Error');  
      }
    } else {
      setInput(input + value); 
    }
  };

 
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'   
  ];

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>
        <p>{input || '0'}</p>
        <p>{result !== null ? `= ${result}` : ''}</p>
      </div>
      <div style={styles.buttonGrid}>
        {buttons.map((btn) => (
          <button
            key={btn}
            style={styles.button}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

const styles = {
  calculator: {
    width: '200px',
    margin: 'auto',
    padding: '10px',
    border: '2px solid #333',
    borderRadius: '8px',
    textAlign: 'center',
  },
  display: {
    backgroundColor: '#eee',
    padding: '10px',
    fontSize: '1.5rem',
    minHeight: '60px',
    marginBottom: '10px',
    borderRadius: '4px',
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '5px',
  },
  button: {
    padding: '15px',
    fontSize: '1rem',
    border: '1px solid #333',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
