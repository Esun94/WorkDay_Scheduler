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

    // function to listen for click events on page
    $('.saveBtn').on('click', function(event) {
        event.preventDefault();
        //grab the saved event options
         // create variables to save user input and time
        var userEvent = {
            event: $('#text-area').value,
            hour: $('.hour').value
        }; 
        
        //save to local storage
        localStorage.setItem("userEvent", JSON.stringify(userEvent));
        
        //alert user that items have been saved to localStorage
        renderMessage()
        // create timeOut Value that removes save alert
    });

    // function renderMessage() {
    function renderMessage() {
        var saveDone = JSON.parse(localStorage.getItem("userEvent"))
        if (saveDone !== null) {
            alert('Saved to Local Storage');
        };
    };




    // Create time updater function()
    //get current time

    // create our loop to go over all the (html)time blocks (compare ids)

    // if else statement to...
    // check to see if we passed out time
    // check out removeClass and addClass
    // check to see if current hour matches (html time)physical hour

    // check to see if the time is in the future


    // retrieve local storage and render items to correct rows





})