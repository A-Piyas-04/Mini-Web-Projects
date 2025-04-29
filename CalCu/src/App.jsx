import { useState } from 'react'
import './styles/App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')

  const handleNumber = (number) => {
    if (display === '0') {
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }

  const handleOperator = (operator) => {
    setEquation(display + ' ' + operator)
    setDisplay('0')
  }

  const handleEqual = () => {
    const result = eval(equation + ' ' + display)
    setDisplay(result.toString())
    setEquation('')
  }

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{equation}</div>
        <div className="current-operand">{display}</div>
      </div>
      <button className="span-two" onClick={handleClear}>CLEAR</button>
      <button onClick={() => handleOperator('/')}>/</button>
      <button onClick={() => handleNumber('7')}>7</button>
      <button onClick={() => handleNumber('8')}>8</button>
      <button onClick={() => handleNumber('9')}>9</button>
      <button onClick={() => handleOperator('*')}>*</button>
      <button onClick={() => handleNumber('4')}>4</button>
      <button onClick={() => handleNumber('5')}>5</button>
      <button onClick={() => handleNumber('6')}>6</button>
      <button onClick={() => handleOperator('-')}>-</button>
      <button onClick={() => handleNumber('1')}>1</button>
      <button onClick={() => handleNumber('2')}>2</button>
      <button onClick={() => handleNumber('3')}>3</button>
      <button onClick={() => handleOperator('+')}>+</button>
      <button onClick={() => handleNumber('0')}>0</button>
      <button onClick={() => handleNumber('.')}>.</button>
      <button className="span-two" onClick={handleEqual}>=</button>
    </div>
  )
}

export default App