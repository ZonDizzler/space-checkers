let checkers = [
  { row: 1, cell: 2, color: 'white' },
  { row: 1, cell: 4, color: 'white' },
  { row: 1, cell: 6, color: 'white' },
  { row: 1, cell: 8, color: 'white' },
  { row: 2, cell: 1, color: 'white' },
  { row: 2, cell: 3, color: 'white' },
  { row: 2, cell: 5, color: 'white' },
  { row: 2, cell: 7, color: 'white' },
  { row: 3, cell: 2, color: 'white' },
  { row: 3, cell: 4, color: 'white' },
  { row: 3, cell: 6, color: 'white' },
  { row: 3, cell: 8, color: 'white' }
];
for (let i = 0; i < 32; i++) {

}

function renderCell(rowNum, cellNum) {

  // Determine parity of cell
  const isWhite = (rowNum + cellNum) % 2 === 0;
  const cellColor = isWhite ? 'white' : 'black';

  return `
    <div id="cell-${rowNum}-${cellNum}" class="cell ${cellColor}"></div>
  `;
}

function renderCheckers() {
  checkers.forEach(element => {

    $(`#cell-${element.row}-${element.cell}`).html(renderChecker(element.color));
  });
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