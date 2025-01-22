$(document).ready(function () {
  console.log('document ready');
  const r = renderBoard(); // Generate row HTML using rowTemplate
  $('#board-container').html(r); // Replace the content of #row-1 with the generated HTML
  renderCheckers();
  $('.cell.black').click(selectChecker);
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
