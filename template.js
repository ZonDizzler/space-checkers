function renderCell(rowNum, cellNum) {

  // Determine parity of cell
  const isRed = (rowNum + cellNum) % 2 === 0;
  const cellColor = isRed ? 'red' : 'black';

  let checkerString = '';
  if (isRed) {
    // There are no checkers in red cells
    checkerString = '';
  } else if (rowNum < 4) {
    checkerString = renderChecker('red');
  } else if (rowNum > 5) {
    checkerString = renderChecker('black');
  } else {
    checkerString = renderChecker('black', 'hidden');
  }
  return `
    <div id="cell-${rowNum}-${cellNum}" class="cell ${cellColor}">
      ${checkerString}
    </div>
  `;
}

function renderChecker(color, hidden) {
  return `<div class="checker ${color}-checker" ${hidden}></div>`
}

function renderRow(rowNum) {
  let rowString = `<div id="row-${rowNum}" class="row">`;
  for (let cellNum = 1; cellNum <= 8; cellNum++) {
    rowString = rowString + renderCell(rowNum, cellNum)
  }
  rowString = rowString + `</div>`
  return rowString
}

function renderBoard() {
  let boardString = '';
  for (let rowNum = 1; rowNum <= 8; rowNum++) {
    boardString = boardString + renderRow(rowNum);
  }
  return boardString;
}