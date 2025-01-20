function cellTemplate(rowNum, cellNum) {
  const isRed = (rowNum + cellNum) % 2 === 0;
  const cellColor = isRed ? 'red' : 'black';

  let checkerString = '';
  if (isRed) {
    checkerString = '';
  } else if (rowNum < 4) {

    checkerString = '<div class="checker red-checker"></div>'

  } else if (rowNum > 5) {
    checkerString = '<div class="checker black-checker"></div>'
  } else {
    checkerString = '<div class="checker black-checker" hidden></div>'
  }
  return `
    <div id="cell-${rowNum}-${cellNum}" class="cell ${cellColor}">
      ${checkerString}
    </div>
  `;
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