function createEquationElement(equation) {
  const equationContainer = document.createElement('div');
  equationContainer.className = 'equation';

  const parts = equation.match(/[^+\s=]+(?: ['\w]+)*|[+=]/g);

  parts.forEach(part => {
    part = part.trim();

    if (imageMap[part]) {
      const img = document.createElement('img');
      img.src = imageMap[part];
      img.alt = part;
      equationContainer.appendChild(img);
    } else {
      const symbol = document.createElement('span');
      symbol.className = 'symbol';
      symbol.textContent = part;
      equationContainer.appendChild(symbol);
    }
  });

  return equationContainer;
}

function renderEquations() {
  const equationsContainer = document.getElementById('equations');
  evolutions.forEach(equation => {
    const equationElement = createEquationElement(equation);
    equationsContainer.appendChild(equationElement);
  });
}

renderEquations();
