function cellTemplate(rowNum, cellNum) {

  // Determine parity of cell
  const isRed = (rowNum + cellNum) % 2 === 0;
  const cellColor = isRed ? 'red' : 'black';

  let checkerString = '';
  if (isRed) {
    // There are no checkers in red cells
    checkerString = '';
  } else if (rowNum < 4) {
    checkerString = checkerTemplate('red');
  } else if (rowNum > 5) {
    checkerString = checkerTemplate('black');
  } else {
    checkerString = checkerTemplate('black', 'hidden');
  }
  return `
    <div id="cell-${rowNum}-${cellNum}" class="cell ${cellColor}">
      ${checkerString}
    </div>
  `;
}

function checkerTemplate(color, hidden) {
  return `<div class="checker ${color}-checker" ${hidden}></div>`
}

function rowTemplate(rowNum) {
  let rowString = `<div id="row-${rowNum}" class="row">`;
  for (let cellNum = 1; cellNum <= 8; cellNum++) {
    rowString = rowString + cellTemplate(rowNum, cellNum)
  }
  rowString = rowString + `</div>`
  return rowString
}

function boardTemplate() {
  let boardString = '';
  for (let rowNum = 1; rowNum <= 8; rowNum++) {
    boardString = boardString + rowTemplate(rowNum);
  }
  return boardString;
}