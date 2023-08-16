/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 08/16/2023
*/

let isValidButton = document.querySelector('#isValidBtn');

isValidButton.addEventListener("click", (e) => {
    e.preventDefault();

    //HTML elements
    let isValidMsg = document.querySelector('#isValidMsg');
    let getInput = document.querySelector('#isValidInput').value;

    //Clear #isValidMsg 
    isValidMsg.textContent = "";

    //Input Validation
    try {
        //No input
        if (getInput == "") {
            throw "is empty";
        } 
        //Input not a number
        if (isNaN(getInput)) {
            throw "is not a number"
        }
        //Input too large
        if (getInput > 15) {
            throw "is too high"
        }
        //Input too small
        if (getInput < 12) {
            throw "is too low"
        }
    } catch (error) {
        isValidMsg.innerHTML = "Input " + error; //Invalid input message
    } finally {
        alert("This will always run");
    }
});