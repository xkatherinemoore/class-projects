
//Creates an array where each value corresponds to hours slept for a given day. Default amount is 8 hours.
var hoursSlept = [8, 8, 8, 8, 8, 8, 8,]

//When called, sets the hours slept for a given day, a message is printed to the console noting the change
//Note that function returns new hoursSlept array. To call, use syntax: hoursSlept = setHoursSlept(day, hoursSleptAmount, hoursSlept)
function setHoursSlept(day, hoursSleptAmount, hoursSlept) {
    day = day.toLowerCase(); //Prevents capitalization errors for day value

    //sets hoursSlept based on user inputed day
    switch (day) {
        case 'monday':
            hoursSlept[0] = hoursSleptAmount;
            console.log('The number of hours slept on ' + day + ' was changed to ' + hoursSleptAmount);
            return hoursSlept;
            break;
        case 'tuesday':
            hoursSlept[1] = hoursSleptAmount;
            console.log('The number of hours slept on ' + day + ' was changed to ' + hoursSleptAmount);
            return hoursSlept;
            break;        
        case 'wednesday':
            hoursSlept[2] = hoursSleptAmount;
            console.log('The number of hours slept on ' + day + ' was changed to ' + hoursSleptAmount);
            return hoursSlept;
            break;
        case 'thursday':
            hoursSlept[3] = hoursSleptAmount;
            console.log('The number of hours slept on ' + day + ' was changed to ' + hoursSleptAmount);
            return hoursSlept;
            break;
        case 'friday':
            hoursSlept[4] = hoursSleptAmount;
            console.log('The number of hours slept on ' + day + ' was changed to ' + hoursSleptAmount);
            return hoursSlept;
            break;
        case 'saturday':
            hoursSlept[5] = hoursSleptAmount;
            console.log('The number of hours slept on ' + day + ' was changed to ' + hoursSleptAmount);
            return hoursSlept;
            break;
        case 'sunday':
            hoursSlept[6] = hoursSleptAmount;
            console.log('The number of hours slept on ' + day + ' was changed to ' + hoursSleptAmount);
            return hoursSlept;
            break;
        default:
            console.log('Day entered was invalid. Please try again.');
    }

}

//When called, prints the hours slept on a given day to the console
function getHoursSlept(day) {
    switch (day) {
        case 'monday':
            console.log('The number of hours slept on ' + day + ' was ' + hoursSlept[0]);
            break;
        case 'tuesday':
            console.log('The number of hours slept on ' + day + ' was ' + hoursSlept[1]);
            break;        
        case 'wednesday':
            console.log('The number of hours slept on ' + day + ' was ' + hoursSlept[2]);
            break;
        case 'thursday':
            console.log('The number of hours slept on ' + day + ' was ' + hoursSlept[3]);
            break;
        case 'friday':
            console.log('The number of hours slept on ' + day + ' was ' + hoursSlept[4]);
            break;
        case 'saturday':
            console.log('The number of hours slept on ' + day + ' was ' + hoursSlept[5]);
            break;
        case 'sunday':
            console.log('The number of hours slept on ' + day + ' was ' + hoursSlept[6]);
            break;
        default:
            console.log('Day entered was invalid. Please try again.');
    }
}

//Sum of hours slept for the week
const actualHoursSlept = hoursSlept.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0 
);

//Sets ideal hours for the week based on nightly value x7
const idealHoursSlept = (idealHoursPerNight) => idealHoursPerNight * 7; 

//Calculates difference between hours slept and ideal. Prints to console
function calculateSleepDebt(idealHoursPerNight) {

    //uses the reduce function to sum the values of the hoursSlept array 
    var actualSleepHours = hoursSlept.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);
    var idealSleepHours = idealHoursSlept(idealHoursPerNight);

    if (actualSleepHours == idealSleepHours) {
        console.log('You\'re getting the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        var sleepHours = actualSleepHours - idealSleepHours;
        console.log('You got ' + sleepHours + ' hour(s) over the ideal amount this week!');
    } else if (actualSleepHours < idealSleepHours) {
        var sleepHours = idealSleepHours - actualSleepHours
        console.log('You got ' + sleepHours + ' hour(s) under the ideal amount this week!');
}
}

hoursSlept = setHoursSlept('Monday', 7, hoursSlept);
hoursSlept = setHoursSlept('Wednesday', 6, hoursSlept);
hoursSlept = setHoursSlept('Thursday', 9, hoursSlept);
hoursSlept = setHoursSlept('saturday', 4, hoursSlept);

calculateSleepDebt(8);
