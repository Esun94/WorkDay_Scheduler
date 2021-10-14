//Create our document read funstion to make sure nothing runs before we load the page
$(document).ready(function () {

    // var currentDate = moment().format("MMMM, Do YYYY");
    // $("#currentTime").text(currentDate);
    // var inputEl = document.querySelector("#text-area");
    // var saveBtnEL = $('.saveBtn');
    var dateTimeEl = $("#currentTime");

    var am8 = $("#8am");
    var am9 = $("#9am9");
    var am10 = $("#10am");
    var am11 = $("#11am");
    var pm12 = $("#12pm");
    var pm1 = $("#1pm");
    var pm2 = $("#2pm");
    var pm3 = $("#3pm");
    var pm4 = $("#4pm");
    var pm5 = $("#5pm");
    var pm6 = $("#6pm");

    var savedMessage = $("#savedMessage");

    var hours = [
        {time: moment("8 am", "h a"), lookup: am8},
        {time: moment("9 am", "h a"), lookup: am9},
        {time: moment("10 am", "h a"), lookup: am10},
        {time: moment("11 am", "h a"), lookup: am11},
        {time: moment("12 pm", "h a"), lookup: pm12},
        {time: moment("1 pm", "h a"), lookup: pm1},
        {time: moment("2 pm", "h a"), lookup: pm2},
        {time: moment("3 pm", "h a"), lookup: pm3},
        {time: moment("4 pm", "h a"), lookup: pm4},
        {time: moment("5 pm", "h a"), lookup: pm5},
        {time: moment("6 pm", "h a"), lookup: pm6}
    ];
    
    console.log(moment().startOf('hour').format("h a"));

    // show clock and date under header
    function displayTime() {
        var time = moment().format("MMMM Do, YYYY[\n]hh:mm:ss a");
        dateTimeEl.text(time);
    }
    console.log(moment());
    setInterval(displayTime,1000);
    
    // comparing Current Time to Time Slot Rows
    for (let i=0; i < hours.length; i++) {
        var currentTime = moment().format("h a");
        console.log(currentTime);
        // color change depending on current time vs. time slot
        if (hours[i].time.isSame(moment(), "hour")) {
            hours[i].lookup.addClass("present");
        }
        else if (hours[i].time < moment()) {
            hours[i].lookup.addClass("past");
        }
        else if (hours[i].time > moment()) {
            hours[i].lookup.addClass("future");
        }
    };

// EventListner for buttons
    $(":button").on("click", function(event){
        var textValue = $(this).siblings(".description").val();
        var idValue = $(this).siblings(".description").attr("id");
    
        localStorage.setItem(idValue,textValue);
    
        savedMessage.text("The task has been saved!");
        
        setTimeout(function(){
            savedMessage.text("");
    
        }, 3000);
    
    });

    function scheduleTasks() {
        // getItem has to use strings to pull data back in so made a separate array to pull from.
        var timeSlotEL = [ "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm" ];
    
        for (let i=0; i < timeSlotEL.length; i++) {
            var savedItem = localStorage.getItem(timeSlotEL[i]);
    
            if (timeSlotEL[i]) {
              hours[i].lookup.text(savedItem);
            }
        }
    }

    scheduleTasks();

})
    