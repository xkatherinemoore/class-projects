/*  
Author: Katherine Moore
Course: CIS 133 DA
Section: 19894
*/

//Sets the element with id=lastmodified with last document update
document.getElementById("lastmodified").innerHTML = document.lastModified;

function submitForm() {
    alert('Thank you! Your message has been sent off to your local school board!');
}

function resetForm() {
    alert('The form has been cleared. No data was submitted.')
}

function toggleNav(x) {
    x.classList.toggle("change");
}
