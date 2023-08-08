/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 7/7/2023

NOTES: I put the your number message outside of the if statement because I think the output looks cleaner
*/

function playGame() {
    let numRandom = Math.ceil(Math.random()*100); //Random number between 1-100
    let min = 50;
    let max = 75;

    //Prints numRandom message
    toggleDisplay();
    document.getElementById('numRandom_output').innerHTML = `Your Number: ${numRandom}`;

    if(numRandom > min && numRandom < max) {
        document.getElementById('results').innerHTML = 'YOU WON!'//Prints winner message 
    } else {
        document.getElementById('results').innerHTML = 'Bad luck! Keep Trying!' //Prints keep trying message
    }
}

//Styling - Changes #output_container display from none to block
function toggleDisplay() {
    let element = document.getElementById('output_container');
    element.style.display = 'block';
}