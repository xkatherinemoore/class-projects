/* Program that calculates whether a person is getting enough sleep in a 7-day period.

Developer Note: I find this program clunky in it's current state, but this was a guided assignment and the getSleepHours(day) function needed to be a switch function that returned a number. See sleepDebtCalculator2.js file to see a different iteration of this program */

//Takes a day of the week input and returns the hours slept that day
function getSleepHours(day) {
  day = day.toLowerCase(); //Prevents capitalization error
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      console.log('Day of the week entered is invalid.');
  }
}

//Returns the total hours slept for the week
function getActualSleepHours() {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours ('sunday');
}
//Sets an ideal hours of sleep per night and multiplies by 7
function getIdealSleepHours() {
  var idealHours = 8;
  return idealHours*7;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();

  if (actualSleepHours == idealSleepHours) {
    console.log('You\'re getting the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    var sleepHours = actualSleepHours - idealSleepHours;
    console.log('You got ' + sleepHours + ' hour(s) over the ideal amount!');
  } else if (actualSleepHours < idealSleepHours) {
    var sleepHours = idealSleepHours - actualSleepHours
    console.log('You need ' + sleepHours + ' hour(s) more sleep this week!');
  }
}

calculateSleepDebt();