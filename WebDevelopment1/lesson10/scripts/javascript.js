/*  
Author: Katherine Moore
Course: CIS 133 DA
Section: 19894
*/

//Sets the element with id=lastmodified with last document update
document.getElementById("lastmodified").innerHTML = document.lastModified;

//When submit button is clicked, alert appears
function submitForm() {
    alert('Thank you! Your project request has been submitted!');
}

//When reset button is clicked, message displays
function resetForm() {
    document.getElementById("resetmessage").style.display = "block";
}