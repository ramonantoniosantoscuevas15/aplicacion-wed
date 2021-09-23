let session_minutes = "25";
let session_seconds = "00";


// Function that starts the template for the timer
function template() {
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
}

// Function that starts the timer
function start_timer() {
    // Change the minutes and seconds to starting time
    session_minutes = 1;
    session_seconds = 59;

    // Add the minutes and seconds to the page
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;

    // Start the timer
    let minutes_interval = setInterval(minutesTimer, 60000);
    let seconds_interval = setInterval(secondsTimer, 1000);

    // Function for counting the minutes
    function minutesTimer() {
        session_minutes = session_minutes - 1;
        document.getElementById("minutes").innerHTML = session_minutes;
    }

    // Function for counting the seconds
    function secondsTimer() {
        session_seconds = session_seconds - 1;
        document.getElementById("seconds").innerHTML = session_seconds;

        /* Check if the minutes and seconds has reached 0,
        if reached 0 then end the session */
        if(session_seconds <= 0) {
            if(session_minutes <= 0) {
                // Clears the inverval and stops the counter
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                // Add the message to the HTML
                document.getElementById("done").innerHTML = "Session Completed! Take a break";

                // Make the HTML message div visible
                document.getElementById("done").classList.add("show_message");

                // Reset the session seconds to 60
                session_seconds = 60;
            }
        }
    }

}