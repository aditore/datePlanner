/* variables */
var showCurrentDay = $('#currentDay');
var timeBlock = $('.container')

/* function */
//begin function when document loads
$(document).ready(function () {
    //save button click
    $(".saveBtn").on("click", function () {
        //attain values of .description in jQuery
        var inputText = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        //save to local storage
        localStorage.setItem(time, inputText);
    })

    function whatTime() {
        //get number of hours within day
        var checkHour = moment().hour();
        console.log(checkHour);
        //loop through time-blocks //1 hour = 1
        $('.time-block').each(function () {
            var timeBlockParse = parseInt($(this).attr('id').split('h')[1]);
            //checking that values are both numbers
            console.log(this);
            console.log(timeBlockParse);
            //check time and add style to background
            if (timeBlockParse < checkHour) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            } else if (timeBlockParse === checkHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        }) 
    }
    //get an event from local storage if any event has been saved
    $('#h9 .description').val(localStorage.getItem('h9'));
    $('#h10 .description').val(localStorage.getItem('h10'));
    $('#h11 .description').val(localStorage.getItem('h11'));
    $('#h12 .description').val(localStorage.getItem('h12'));
    $('#h13 .description').val(localStorage.getItem('h13'));
    $('#h14 .description').val(localStorage.getItem('h14'));
    $('#h15 .description').val(localStorage.getItem('h15'));
    $('#h16 .description').val(localStorage.getItem('h16'));
    $('#h17 .description').val(localStorage.getItem('h17'));   
    //run function
    whatTime();
})


//show current day (function)
function displayCurrentDay() {
    var thisDay = moment().format("dddd, MMMM Do");
    showCurrentDay.text(thisDay);
}

setInterval(displayCurrentDay, 1000);