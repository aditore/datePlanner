/* variables */
var showCurrentDay = $('#currentDay');
var timeBlock = $('.container')

/* function */

//show current day (function)
function displayCurrentDay() {
    var thisDay = moment().format("dddd, MMMM Do");
    showCurrentDay.text(thisDay);
}

setInterval(displayCurrentDay, 1000);