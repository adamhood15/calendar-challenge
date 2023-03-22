// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var get9amEvent = localStorage.getItem('9amEvent');
var saveBtn = $('.saveBtn');
var currentDay = $('#currentDay');
var textInput9am = $('#9am');
var textInput10am = $('#10am');
var textInput11am = $('#11am');
var textInput12am = $('#12am');
var textInput1pm = $('#1pm');
var textInput2pm = $('#2pm');
var textInput3pm = $('#3pm');
var textInput4pm = $('#4pm');
var textInput5pm = $('#5pm');
var saveBtn9am = $('#9amBtn')
var saveBtn10am = $('#10amBtn')
var saveBtn11am = $('#11amBtn')
var saveBtn12am = $('#12amBtn')
var saveBtn1pm = $('#1pmBtn')
var saveBtn2pm = $('#2pmBtn')
var saveBtn3pm = $('#3pmBtn')
var saveBtn4pm = $('#4pmBtn')
var saveBtn5pm = $('#5pmBtn')

var calendarEvents = [];

$(document).ready(function () {

  var today = dayjs().format('dddd MMMM DD');
  currentDay.text(today);

}) ;
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

textInput9am.text(get9amEvent);
textInput10am.text(localStorage.getItem('10amEvent'));
textInput11am.text(localStorage.getItem('11amEvent'));
textInput12am.text(localStorage.getItem('12amEvent'));
textInput1pm.text(localStorage.getItem('1pmEvent'));
textInput2pm.text(localStorage.getItem('2pmEvent'));
textInput3pm.text(localStorage.getItem('3pmEvent'));
textInput4pm.text(localStorage.getItem('4pmEvent'));
textInput5pm.text(localStorage.getItem('5pmEvent'));

saveBtn9am.on('click', function (event) {
  console.log($(this));

    let userInput = textInput9am.val();
    var storeEvent = localStorage.setItem('9amEvent', userInput);

})

saveBtn10am.on('click', function (event) {
  console.log($(this));

    let userInput = textInput10am.val();
    var storeEvent = localStorage.setItem('10amEvent', userInput);

})
saveBtn11am.on('click', function (event) {
  console.log($(this));

    let userInput = textInput11am.val();
    var storeEvent = localStorage.setItem('11amEvent', userInput);

})
saveBtn12am.on('click', function (event) {
  console.log($(this));

    let userInput = textInput12am.val();
    var storeEvent = localStorage.setItem('12amEvent', userInput);

})
saveBtn1pm.on('click', function (event) {
  console.log($(this));

    let userInput = textInput1pm.val();
    var storeEvent = localStorage.setItem('1pmEvent', userInput);

})
saveBtn2pm.on('click', function (event) {
  console.log($(this));

    let userInput = textInput2pm.val();
    var storeEvent = localStorage.setItem('2pmEvent', userInput);

})
saveBtn3pm.on('click', function (event) {
  console.log($(this));

    let userInput = textInput3pm.val();
    var storeEvent = localStorage.setItem('3pmEvent', userInput);

})
saveBtn4pm.on('click', function (event) {
  console.log($(this));

    let userInput = textInput4pm.val();
    var storeEvent = localStorage.setItem('4pmEvent', userInput);

})
saveBtn5pm.on('click', function (event) {
  console.log($(this));

    let userInput = textInput5pm.val();
    var storeEvent = localStorage.setItem('5pmEvent', userInput);

})



  // TODO: Add code to apply the past, pre
  // sent, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
