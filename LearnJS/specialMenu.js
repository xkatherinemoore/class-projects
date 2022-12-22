/* Part of Codecademy's Learn JavaScript cirriculum, the goal is to create a function that allows a restaurant to set a meal and price for the Daily Special */

var menu = {
  _meal: '',
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
    return this._meal = mealToCheck;
    } else {
      console.log('Error: The meal entered is not a string variable'); 
    }
  }, //Data validation of _meal entry (string)

  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
     } else { 
       console.log('Error: The price entered should be a number only') 
     }
  }, //Data validation of _price entry (number)

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for \$${this._price}!`
    } else {
      return 'Today\'s Special has not been set correctly.'
    }
  }
};

