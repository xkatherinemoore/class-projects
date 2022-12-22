/* Build a Libray Project from Codecademy's Learn Intermediate JavaScript Curriculum 

Problem: The library carries 3 different types of media: books, CDs, and movies. Create a way to easily catalog the media using classes and subclasses */

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = []
  }

  //Getters
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings
  }

  //Setters
  set isCheckedOut(newCheckedOut) {
    if (newCheckedOut === true || newCheckedOut === false) {
      return this._isCheckedOut = newCheckedOut;
    }
  }

  //Finds the average rating of ratings array
  getAverageRating() {
    //uses .reduce() to sum all ratings and divides by rating.length()
    var averageRating = this.ratings.reduce( (previousValue, currentValue) => previousValue + currentValue, 0) / this.ratings.length;
    return averageRating;
  }

  //toggles isCheckedOut between true and false
  toggleCheckOutStatus() {
    if(this.isCheckedOut === false) {
      return this.isCheckedOut = true;
    } else {
      return this.isCheckedOut = false;
    }
  }

  //Adds a new rating to end of ratings array  
  addRating(newRating) {
    if (newRating >= 1 && newRating <= 5) {
      return this.ratings.push(newRating);
    }
  }
}

//Book class
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

//Getters
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

//Movie class
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  //Getters
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

//CD class
class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  //Getters
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }

  //Looks up the Title of a song with track number input
  getSongTitle(trackNumber) {
    if (trackNumber >= 1 && trackNumber <= this.songs.length) {
      return this.songs[trackNumber - 1];
    } else {
      console.log('Track number is not valid')
    }
  }
}


//Updating the library 
//Book: History of Everything
const historyOfEverything = new Book('Billy Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
historyOfEverything.toggleCheckOutStatus();

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//console.log(historyOfEverything);
//console.log(historyOfEverything.getAverageRating());

//Movie: Speed
const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

//console.log(speed);
//console.log(speed.getAverageRating());

//CD: Midnights
const midnights = new CD('Taylor Swift', 'Midnights', ['Lavender Haze', 'Maroon', 'Anti-Hero', 'Snow on the Beach', 'You\'re On Your Own, Kid', 'Midnight Rain', 'Question...?', 'Vigilante Shit', 'Bejeweled', 'Labyrinth', 'Karma', 'Sweet Nothing', 'Mastermind']);

midnights.addRating(5);
midnights.addRating(5);
midnights.addRating(5);
midnights.addRating(5);
midnights.addRating(4);

midnights.toggleCheckOutStatus();

//console.log(midnights);
//console.log(midnights.getSongTitle(10));
//console.log(midnights.getAverageRating());
