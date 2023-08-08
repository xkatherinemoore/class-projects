/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 7/7/2023
*/

//create the classGrades array and populate with students/grades
let classGrades = [];
classGrades.push(['David', 80]);
classGrades.push(['Victor', 77]);
classGrades.push(['Tracey', 55]);
classGrades.push(['Jason', 95]);
classGrades.push(['Raymond', 69]);

//Returns the letter associated with number grade
function getGrade(grade) {
    if (grade >= 90) {
        return 'A';
    } else if (grade >= 80 && grade < 90) {
        return 'B';
    } else if (grade >= 70 && grade < 80) {
        return 'C';
    } else if (grade >= 60 && grade < 70) {
        return 'D';
    } else if (grade >= 0 && grade < 60) {
        return 'F';
    } else {
        console.log('Something went wrong');
    }
}

//Prints all students grades to index.html
for (let i = 0; i < classGrades.length; i++) {
    //Retrieve values from classGrades array
    let name = classGrades[i][0];
    let numGrade = classGrades[i][1];
    let letterGrade = getGrade(numGrade);
    
    //Writes to HTML
    document.write(`${name}'s number grade is ${numGrade}% which is a ${letterGrade} <br>`);
}