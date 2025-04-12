function createEquationElement(equation) {
  const equationContainer = document.createElement('div');
  equationContainer.className = 'equation';

  if (equation === 'Alucart Sworb = Alucard Swords = Alucard Shield') {
    equationContainer.title = "Need 6 maxed passives and weapons.";
  }

  const parts = equation.match(/[^+=→]+|[+=→]/g).map(part => part.trim()).filter(Boolean);


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
