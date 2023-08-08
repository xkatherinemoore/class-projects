/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 7/1/2023
*/

/*

Problem: The principal of a school needs to know the percentage of students in the school that submit their homework. (This should be calculated by first determining the homework submission per student in each classroom, and then calculating the average submission per classroom across the school.) 

For this assignment, you'll be creating a function to create many objects. 

*/

//1. Create an object called stuHwAverage. The properties you'll create should include Teacher Name, Student Count and Homework Submitted. 
// You'll also need to create a method that calculates the homework submitted per classroom (Homework Submitted divided by Student Count).

class stuHwAverage {
    constructor(teacherName, studentCount, homeworkSubmitted) {
        this.teacherName = teacherName;
        this.studentCount = studentCount;
        this.homeworkSubmitted = homeworkSubmitted;
    }
        
    //Calculates homework avg
    homeworkAvg() {
       return this.homeworkSubmitted / this.studentCount;
    }
    
};

//2. Create at least 3 classroom objects. Each object should contain matching variables from above (Teacher Name, Student Count and Homework Submitted).

//Classroom Objects
smith = new stuHwAverage('Smith', 28, 21);
jones = new stuHwAverage('Jones', 19, 17);
francis = new stuHwAverage('Francis', 30, 29);

//console.log(smith);
//console.log(smith.homeworkAvg());

//3. Calculate the average number of homework assignments submitted across the school (Add the 3 classroom averages and divide by 3).

//Function that takes homeworkAvg property from objects from studentHwAvg class, and averages them together
function schoolAvg(...classroomAvg) {
    //console.log(classroomAvg);
    let schoolAvg = classroomAvg.reduce(function(total, classroom) { 
        return total += classroom; 
    });
    let scores = schoolAvg/classroomAvg.length;
    //console.log(scores);
    return scores;
}

let result = schoolAvg(smith.homeworkAvg(), jones.homeworkAvg(), francis.homeworkAvg());


//4. Convert the returned number into a percentage
result = Math.round(result * 100);


//5. Output your results to an id called result and assign the id a string that reads like the following:
//Approximately 78% of classes surveyed submit their homework.
//(The percentage will change depending on the numbers you choose for student count and homework submitted.)
document.getElementById('result').innerHTML = `Approximately ${result}% of classes surveyed submit their homework.`