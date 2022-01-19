var showCurrentDay = $('#currentDay');

//show current day (function)
function displayCurrentDay() {
    var thisDay = moment().format("dddd, MMMM Do");
    showCurrentDay.text(thisDay);
}

setInterval(displayCurrentDay, 1000);