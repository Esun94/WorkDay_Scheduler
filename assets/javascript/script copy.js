//Create our document read funstion to make sure nothing runs before we load the page
$(document).ready(function() {
    var textAreaEl = document.querySelector("#text-area")
    var saveBtnEl = $('.saveBtn')
    var modalEL = document.querySelector(".modal")
    // function to listen for click events on page
    saveBtnEl.on('click', function(event) {
        console.log("saving")
        //grab the saved event options
         // create variables to save user input and time
        var savedEvent = {
            textAreaEl: textAreaEl.value.trim(),
        }
        //save to local storage
        localStorage.setItem("savedEvent", JSON.stringify(savedEvent));
        renderMessage();
        //alert user that items have been saved to localStorage
        
        // create timeOut Value that removes save alert
    
    });
    
    // function renderMessage() {
    function renderMessage() {
    //     var
    var userInput = JSON.parse(localStorage.getItem("savedEvent"));
    //}
    }
        
    
    
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