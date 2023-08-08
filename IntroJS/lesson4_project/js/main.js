/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 6/17/2023
*/

//Example: 
//A candy store has 6 boxes of chocolates. Each box has 500 pieces. How many pieces are there altogether in the 6 boxes?

function getChoc() {
    var boxChoc = 6;
    return boxChoc * 500;
  }
  
  example.textContent = getChoc() + ' pieces of chocolate';
  
  
  
  ///////// Complete problems 1 - 7 below /////////
  /* README: To save myself the trouble of commenting all the functions:
  - All functions follow the same format of:
    - Declare variables given in the problem
    - Declare variable for result and calculate the result
    - Return the calculated variable
  - Results are displayed in HTML using id.textContent method
  */
  
  //1. The Ferris wheel in Paradise Park has 14 seats. Each seat can hold 6 people. How many people can ride the Ferris wheel at the same time?
  function wheelCapacity() {
    var numSeats = 14; 
    var seatCapacity = 6;
    var totalCapacity = numSeats * seatCapacity;
    return totalCapacity;
  }

  prob1.textContent = 'The Ferris Wheel has a max capacity of ' + wheelCapacity() + ' people.';
  
  //2. A garden has 52 rows and 15 columns of bean plants. How many plants are there in all?
  function numPlants() {
    var rows = 52;
    var columns = 15;
    var totalPlants = rows * columns;
    return totalPlants;
  }

  prob2.textContent = 'The garden has ' + numPlants() + ' bean plants.';

  //3. Julian is writing a comic book. His story has 143 frames in all. If he wants to put exactly 11 frames on each page, how many pages would he have?
  function numPages() {
    var frames = 143;
    var framesPerPage = 11;
    var pages = frames / framesPerPage;
    return pages;
  }

  prob3.textContent = 'Julian\'s comic book will have ' + numPages() + ' pages.';
  
  //4. It takes 4 feet of cotton to make a tee-shirt. How many tee-shirts can be made with 60 feet of material?
  function numShirts() {
    var cottonAmount = 60;
    var cottonPerShirt = 4;
    var totalShirts = cottonAmount / cottonPerShirt;
    return [cottonAmount, totalShirts];
  }
  
  prob4.textContent = 'A total of ' + numShirts()[1] + ' t-shirts can be made with ' + numShirts()[0] + ' feet of cotton.';

  //5. The Razorback T-shirt Shop makes $9 dollars off each t-shirt sold. During the Arkansas and Texas Tech game they sold 200 t-shirts. How much money did they make from selling the t-shirts?
  function shirtProfit() {
    var numShirts = 200;
    var shirtPrice = 9;
    var totalProfit = numShirts * shirtPrice;
    return totalProfit
  }

  prob5.textContent = 'The Razorback T-shirt Shop made $' + shirtProfit() + ' on t-shirts.';
  
  //6. Warren has 248 guests coming to his party. Each table will hold 4 guests. How many tables will he need? If each table has 2 candles, how many candles will he need?
  function partySupplies() {
    var numGuests = 248;
    var tableCapacity = 4;
    var totalTables = numGuests / tableCapacity;
    var totalCandles = totalTables * 2;
    return [totalTables, totalCandles];
  }
  
  prob6.textContent = 'Warren will need a total of ' + partySupplies()[0] + ' tables and ' + partySupplies()[1] + ' candles.';

  //7. Beth has 4 packs of crayons. Each pack has 10 crayons in it. She also has 6 extra crayons. How many crayons does Beth have altogether?
  function totalCrayons() {
    var crayonPacks = 4;
    var crayonsPerPack = 10;
    var extraCrayons = 6;
    var totalCrayons = crayonPacks * crayonsPerPack + extraCrayons;
    return totalCrayons;
  }

  prob7.textContent = 'Beth has a total of ' + totalCrayons() + ' crayons.';