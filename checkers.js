var selectedChecker = undefined;

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
  { row: 3, cell: 8, color: 'white' },

  { row: 6, cell: 1, color: 'black' },
  { row: 6, cell: 3, color: 'black' },
  { row: 6, cell: 5, color: 'black' },
  { row: 6, cell: 7, color: 'black' },
  { row: 7, cell: 2, color: 'black' },
  { row: 7, cell: 4, color: 'black' },
  { row: 7, cell: 6, color: 'black' },
  { row: 7, cell: 8, color: 'black' },
  { row: 8, cell: 1, color: 'black' },
  { row: 8, cell: 3, color: 'black' },
  { row: 8, cell: 5, color: 'black' },
  { row: 8, cell: 7, color: 'black' }
];



function renderCheckers() {
  checkers.forEach(checker => {

    $(`#cell-${checker.row}-${checker.cell}`).html(renderChecker(checker.color));
  });
}


function renderChecker(color, hidden) {
  return `<div class="checker ${color}-checker" ${hidden}></div>`
}

function selectChecker() {
  selectChecker = $(this).children().first();
  console.log("selecting checker", selectChecker);
}