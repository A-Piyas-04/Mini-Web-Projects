// Calculator 4x6 grid structure initialization
const calculator = document.createElement('div');
calculator.className = 'calculator-grid';

for (let i = 0; i < 24; i++) {
  const btn = document.createElement('button');
  btn.className = 'calc-btn';
  btn.textContent = i + 1;
  calculator.appendChild(btn);
}

document.body.appendChild(calculator);

// Import CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = './cyberpunk-calc.css';
document.head.appendChild(link);