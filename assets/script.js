/* variables */
var showCurrentDay = $('#currentDay');
var timeBlock = $('.container')

/* function */
//begin function to save to local storage
$(document).ready(function () {
    //save button click
    $(".saveBtn").on("click", function () {
        //attain values of .description in jQuery
        var inputText = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        //save to local storage
        localStorage.setItem(time, inputText);
    })
})


//show current day (function)
function displayCurrentDay() {
    var thisDay = moment().format("dddd, MMMM Do");
    showCurrentDay.text(thisDay);
}

setInterval(displayCurrentDay, 1000);