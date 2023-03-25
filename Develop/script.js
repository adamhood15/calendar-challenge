// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


//Activates the clock to start on page load
$(document).ready(function () {

var saveBtn = $('.saveBtn');
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

//Displays clock
var today = dayjs().format('dddd MMMM DD');
currentDay.text(today);

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

// stores an array that contains all classes of each element, then grabs the last item in the array
var hour9Id = parseFloat(($('#hour-9').attr('class').split(' ')).pop());
var hour10Id = parseFloat(($('#hour-10').attr('class').split(' ')).pop());
var hour11Id = parseFloat(($('#hour-11').attr('class').split(' ')).pop());
var hour12Id = parseFloat(($('#hour-12').attr('class').split(' ')).pop());
var hour13Id = parseFloat(($('#hour-1').attr('class').split(' ')).pop());
var hour14Id = parseFloat(($('#hour-2').attr('class').split(' ')).pop());
var hour15Id = parseFloat(($('#hour-3').attr('class').split(' ')).pop());
var hour16Id = parseFloat(($('#hour-4').attr('class').split(' ')).pop());
var hour17Id = parseFloat(($('#hour-5').attr('class').split(' ')).pop());

//Stores each hour class in an array as a number
var hourClassArr = [hour9Id, hour10Id, hour11Id, hour12Id, hour13Id, 
                    hour14Id, hour15Id, hour16Id, hour17Id]

//Stores each element in an array so that we can loop through it
var hourId = [$('#hour-9'), $('#hour-10'), $('#hour-11'), $('#hour-12'),  
              $('#hour-1'), $('#hour-2'), $('#hour-3'), $('#hour-4'), $('#hour-5'),]

//Applies past, present, future class depending on what time it is
//Must check class of each element and then apply new class to the ID of the element
for (i = 0; i < hourId.length; i++) {

  //Grabs the hour number from day function
  var hour = dayjs().hour();

  //Applies Present class
  if (hour === hourClassArr[i]) {

    hourId[i].addClass('present');

  //Applies future class
  } else if (hour < hourClassArr[i]) {


    hourId[i].addClass('future');
  
  //Applies past class
  } else if (hour > hourClassArr[i]) {


    hourId[i].addClass('past');

  }
}


}) ;

