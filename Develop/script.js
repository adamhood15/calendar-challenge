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

saveBtn9am.on('click', function (event) {
  console.log($(this));

    let userInput = textInput9am.val();
    var storeEvent = localStorage.setItem('9amEvent', userInput);

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
