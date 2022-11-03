/* School Catalogue project from Coursera's Learn Intermediate JavaScript course

Problem: Create a catalog for the New York City Department of Education to hold quick reference material for each school in the city. */

//School Class
class School {
  constructor(name, numberOfStudents) {
    this._name = name;
    this._level = ['Primary', 'Middle', 'High'];
    this._numberOfStudents = numberOfStudents;
  }

  //Getters
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  //Setters
  set numberOfStudents(newNumber) {
    if (typeof newNumber === 'number') {
      return this._numberOfStudents = newNumber;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a number.')
    }
  }

  quickFacts() {
    console.log('School Name: ' + this.name);
    console.log('Level: ' + this.level);
    console.log('Number of Students: ' + this.numberOfStudents);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    var num = Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[num];
  }
}

//PrimarySchool Class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents);
    this._level = this.level[0];
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }

  //Logs pickup policy to the console
  showPickupPolicy() {
    console.log(`${this.name}'s pickup policy is: ${this.pickupPolicy}`);
  }
}

//MiddleSchool Class
class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents);
    this._level = this.level[1];
  }
}

//HighSchool Class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, numberOfStudents);
    this._level = this.level[2];
    this._sportsTeams = sportsTeams
  }

  get sportsTeams() {
    return this._sportsTeams;
  }

  addSportsTeam(newSportsTeam) {
    return this.sportsTeams.push(newSportsTeam);
  }

  removeSportsTeam(oldSportsTeam) {
    var index = this.sportsTeams.indexOf(oldSportsTeam);
    if (index > -1) { //only splice when item found
      return this.sportsTeams.splice(index, 1);
    }
  }
}

//Lorraine Hansbury Primary
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts(); //Logs school facts to console
lorraineHansbury.showPickupPolicy();

//console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

//Al E. Smith High School
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track & Field']);
console.log(alSmith.sportsTeams);
alSmith.addSportsTeam('Football');
alSmith.removeSportsTeam('Track & Field');
console.log(alSmith.sportsTeams)