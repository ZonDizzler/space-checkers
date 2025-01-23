$(document).ready(function () {
  console.log('document ready');
  const r = renderBoard(); // Generate row HTML using rowTemplate
  $('#board-container').html(r); // Replace the content of #row-1 with the generated HTML
  renderCheckers();
  $('.checker').click(selectChecker);
});
/*
function toggle(cell) {
  const checker = cell.children().first();
  checker.toggle();

  if (!checker.is(":visible")) {
    switchColor(checker);
  }
}
*/
function switchColor(checker) {
  if (checker.hasClass('black-checker')) {
    checker.removeClass('black-checker').addClass('white-checker');
  } else {
    checker.removeClass('white-checker').addClass('black-checker');
  }
}

function renderBoard() {
  let boardString = '';
  for (let rowNum = 1; rowNum <= 8; rowNum++) {
    boardString = boardString + renderRow(rowNum);
  }
  return boardString;
}

function renderCell(rowNum, cellNum) {

  // Determine parity of cell
  const isWhite = (rowNum + cellNum) % 2 === 0;
  const cellColor = isWhite ? 'white' : 'black';

  return `
    <div id="cell-${rowNum}-${cellNum}" class="cell ${cellColor}"></div>
  `;
}

function renderRow(rowNum) {
  let rowString = `<div id="row-${rowNum}" class="row">`;
  for (let cellNum = 1; cellNum <= 8; cellNum++) {
    rowString = rowString + renderCell(rowNum, cellNum)
  }
  rowString = rowString + `</div>`
  return rowString
}
