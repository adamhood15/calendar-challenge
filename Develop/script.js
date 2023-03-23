// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var get9amEven = localStorage.getItem('9amEvent');
var saveBtn = $('.saveBtn');
var saveIcon = $('#10amBtn');
var currentDay = $('#currentDay');
var event9am = $('#9am')
var event10am = $('#10am') 
var event11am = $('#11am')
var event12am = $('#12am')
var event1pm = $('#1pm')
var event2pm = $('#2pm')
var event3pm = $('#3pm')
var event4pm = $('#4pm')
var event5pm = $('#5pm')

//Activates the clock to start on page load
$(document).ready(function () {
  //Displays clock
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
//Displays the localstorage item in the appropriate text box
event9am.val(localStorage.getItem('hour-9'));
event10am.val(localStorage.getItem('hour-10'));
event11am.val(localStorage.getItem('hour-11'));
event12am.val(localStorage.getItem('hour-12'));
event1pm.val(localStorage.getItem('hour-1'));
event2pm.val(localStorage.getItem('hour-2'));
event3pm.val(localStorage.getItem('hour-3'));
event4pm.val(localStorage.getItem('hour-4'));
event5pm.val(localStorage.getItem('hour-5'));

saveBtn.on('click', function () {

  //grabs the id of the parent div for each timeslot
  var parentID = this.parentElement.id;
  //grabs the text area element of the timeslot
  var siblingID = this.previousElementSibling;
  //stores the user input for the text area of each timeslot
  var userInput = siblingID.value;
  //sets user input and id key to local storage
  localStorage.setItem(parentID, userInput)

})


  // TODO: Add code to apply the past, pre
  // sent, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var divID = $('#hour-9').attr('id');
  var hour10Id = $('#hour-10').attr('id');
var hour = dayjs().format('H');
console.log(hour);
console.log(divID);
console.log(hour10Id);

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
