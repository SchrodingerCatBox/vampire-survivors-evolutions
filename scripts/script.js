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

function renderEquationsWithStyle(equations, styleClass) {
  const equationsContainer = document.getElementById('equations');
  equations.forEach(equation => {
    const equationElement = createEquationElement(equation);
    equationElement.classList.add(styleClass);
    equationsContainer.appendChild(equationElement);
  });
}


function renderEquations() {
  renderEquationsWithStyle(base_game, 'base_game');
  renderEquationsWithStyle(legacy_of_the_moonspell, 'dlc_legacy_of_the_moonspell');
  renderEquationsWithStyle(tides_of_the_foscari, 'dlc_tides_of_the_foscari');
  renderEquationsWithStyle(emergency_meeting, 'dlc_emergency_meeting');
  renderEquationsWithStyle(operation_guns, 'dlc_operation_guns');
  renderEquationsWithStyle(ode_to_castlevania, 'dlc_ode_to_castlevania');
  renderEquationsWithStyle(emerald_diorama, 'dlc_emerald_diorama');
}

renderEquations();
