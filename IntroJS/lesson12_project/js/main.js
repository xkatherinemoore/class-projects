/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 08/09/2023
*/

//Result variable & msg variable
let result;
let msg;

//getLocation function - Checks if user's browser is Chrome, gets location if supported by browser, prints output
function getLocation() {

    //Determines if browser is Chrome (Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#browser_name_and_version)
    //Checked code on Chrome, Firefox, and Edge with correct results
    let ua = navigator.userAgent;
    let isChrome;
    let msgDiv = document.querySelector('#msg');
    if (ua.match(/Chrome/) && !ua.match(/Chromium/) && !ua.match(/Edg/)) {
        isChrome = true;
    } else {
        isChrome = false;
    }

    
    //Gets location if supported, prints output messages
    if (isChrome && navigator.geolocation) {
        msgDiv.innerHTML = "You're using Chrome, so you're cool!";
        navigator.geolocation.getCurrentPosition(printResults);
    } else if (navigator.geolocation) {
        msgDiv.innerHTML = "You're not on the cool list. <a href=\"https://www.google.com/chrome/\">Download Chrome here!</a>";
        navigator.geolocation.getCurrentPosition(printResults);
    } else {
        msgDiv.innerHTML = "Geolocation is not supported by this browser";
    }
    
}

//Prints location coordinates to #result
function printResults(locationObject) {
    let resultDiv = document.querySelector('#result');

    resultDiv.innerHTML = 
        `Latitude: ${locationObject.coords.latitude} <br />
        Longitude: ${locationObject.coords.longitude}`

}