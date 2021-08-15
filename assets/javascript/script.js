//Create our document read funstion to make sure nothing runs before we load the page
$(document).ready(function () {

    // var currentDate = moment().format("MMMM, Do YYYY");
    // $("#currentDay").text(currentDate);
    // var inputEl = document.querySelector("#text-area");
    // var saveBtnEL = $('.saveBtn');

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