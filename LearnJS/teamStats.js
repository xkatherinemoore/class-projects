/* Create an object to track players and game stats */
/* This example adds in information for Clemson's 2022 football team and season */
const team = {
  _players: [],
  _games: [],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

//Method to add new player data
  addPlayer(newTeamNumber, newFirstName, newLastName, newPosition, newYear) {
    var player = {
        number: newTeamNumber,
        firstName: newFirstName, 
        lastName: newLastName, 
        position: newPosition,
        year: newYear
    };

    this.players.push(player);
  },

//Method to add new game data
  addGame(weekNumber, newOpponent, newTeamPoints, newOpponentPoints) {
    var game = { 
      week: weekNumber,
      opponent: newOpponent, 
      teamPoints: newTeamPoints, 
      opponentPoints: newOpponentPoints };

    this.games.push(game);
  }
};

//Clemson Football 2022 Roster
team.addPlayer(0, 'Antonio', 'Williams', 'WR', 'Fr');
team.addPlayer(0, 'Barrett', 'Carter', 'LB', 'Soph');
team.addPlayer(1, 'Will', 'Shipley', 'RB', 'Soph');
team.addPlayer(1, 'Andrew', 'Mukuba', 'S', 'Soph');
team.addPlayer(2, 'Cade', 'Klubnik', 'QB', 'Fr');
team.addPlayer(2, 'Fred', 'Davis II', 'CB', 'Jr');
team.addPlayer(3, 'Xavier', 'Thomas', 'DE', 'Sr+');
team.addPlayer(5, 'K.J.', 'Henry', 'DE', 'Sr+');
team.addPlayer(5, 'DJ', 'Uiagalelei', 'QB', 'Jr');
team.addPlayer(6, 'Sheridan', 'Jones', 'CB', 'Sr');
team.addPlayer(6, 'E.J.', 'Williams', 'WR', 'Jr');
team.addPlayer(7, 'Kobe', 'Pace', 'RB', 'Jr');
team.addPlayer(7, 'Justin', 'Mascoll', 'DE', 'Sr');
team.addPlayer(8, 'Tre', 'Williams', 'DT', 'Soph');
team.addPlayer(8, 'Adam', 'Randall', 'WR', 'Fr');
team.addPlayer(9, 'R.J.', 'Mickens', 'S', 'Jr');
team.addPlayer(9, 'Jake', 'Briningstool', 'TE', 'Soph');
team.addPlayer(10, 'Joseph', 'Ngata', 'WR', 'Sr');
team.addPlayer(10, 'Jeadyn', 'Lukus', 'CB', 'Fr');
team.addPlayer(11, 'Sage', 'Ennis', 'TE', 'Soph');
team.addPlayer(11, 'Bryan', 'Bresee', 'DT', 'Soph');
team.addPlayer(12, 'Sherrod', 'Covil Jr.', 'S', 'Fr');
team.addPlayer(12, 'Hunter', 'Johnson', 'QB', 'Sr+');
team.addPlayer(13, 'Tyler', 'Davis', 'DT', 'Sr');
team.addPlayer(13, 'Brannon', 'Spector', 'WR', 'Jr');
team.addPlayer(14, 'Trent', 'Pearman', 'QB', 'Fr');
team.addPlayer(14, 'Kevin', 'Swint', 'DE', 'Jr');
team.addPlayer(15, 'Jahiem', 'Lawson', 'DE', 'Fr');
team.addPlayer(15, 'Troy', 'Stellato', 'WR', 'Fr');
team.addPlayer(16, 'Myles', 'Oliver', 'CB', 'Fr');
team.addPlayer(16, 'Will', 'Taylor', 'WR', 'Soph');
team.addPlayer(17, 'Wade', 'Woodaz', 'LB', 'Fr');
team.addPlayer(17, 'Billy', 'Wiles', 'QB', 'Fr');
team.addPlayer(18, 'Kylon', 'Griffin', 'S', 'Fr');
team.addPlayer(18, 'Hunter', 'Helms', 'QB', 'Soph');
team.addPlayer(19, 'Demonte', 'Capehart', 'DT', 'Soph');
team.addPlayer(19, 'Keith', 'Adams Jr', 'RB', 'Soph');
team.addPlayer(20, 'Domonique', 'Thomas', 'RB', 'Soph');
team.addPlayer(20, 'Nate', 'Wiggins', 'CB', 'Soph');
team.addPlayer(21, 'Malcolm', 'Greene', 'CB', 'Jr');
team.addPlayer(22, 'Trenton', 'Simpson', 'LB', 'Jr');
team.addPlayer(22, 'Cole', 'Turner', 'WR', 'Fr');
team.addPlayer(23, 'Davian', 'Sullivan', 'WR', 'Jr');
team.addPlayer(23, 'Toriano', 'Pride Jr.', 'CB', 'Fr');
team.addPlayer(24, 'Tyler', 'Venables', 'S', 'Jr');
team.addPlayer(24, 'Hamp', 'Greene', 'WR', 'Jr');
team.addPlayer(25, 'Blackmon', 'Huckabee Jr.', 'WR', 'Soph');
team.addPlayer(25, 'Jalyn', 'Phillips', 'S', 'Sr');
team.addPlayer(26, 'Phil', 'Mafah', 'RB', 'Soph');
team.addPlayer(26, 'T.J.', 'Dudley', 'LB', 'Fr');
team.addPlayer(27, 'Carson', 'Donnelly', 'S', 'Sr');
team.addPlayer(29, 'Fletcher', 'Cothran', 'LB', 'Fr');
team.addPlayer(29, 'B.T.', 'Potter', 'PK/P', 'Sr+');
team.addPlayer(30, 'Keith', 'Maguire', 'LB', 'Jr');
team.addPlayer(31, 'Kobe', 'McCloud', 'LB', 'Fr');
team.addPlayer(31, 'Tristen', 'Rigby', 'RB', 'Fr');
team.addPlayer(32, 'Etinosa', 'Reuben', 'LB', 'Jr');
team.addPlayer(32, 'Wise', 'Segars Jr.', 'RB', 'Fr');
team.addPlayer(33, 'Griffin', 'Batt', 'TE', 'Fr');
team.addPlayer(33, 'Ruke', 'Orhorhoro', 'DT', 'Jr');
team.addPlayer(34, 'Armon', 'Mason', 'DE', 'Fr');
team.addPlayer(34, 'Kevin', 'McNeal', 'RB', 'Fr');
team.addPlayer(35, 'Elijah', 'Rodgers', 'CB', 'Sr');
team.addPlayer(36, 'Jaden', 'Kinard', 'S', 'Fr');
team.addPlayer(36, 'Quinn', 'Castner', 'PK', 'Soph');
team.addPlayer(37, 'Liam', 'Boyd', 'PK', 'Fr');
team.addPlayer(37, 'Jacob', 'Hendricks', 'S', 'Fr');
team.addPlayer(38, 'Peter', 'Nearn', 'S', 'Fr');
team.addPlayer(38, 'Robert', 'Gunn III', 'PK', 'Fr');
team.addPlayer(39, 'Aidan', 'Swanson', 'P/PK', 'Jr');
team.addPlayer(39, 'Bubba', 'McAtee', 'S', 'Soph');
team.addPlayer(40, 'Brodey', 'Conn', 'S/P', 'Fr');
team.addPlayer(40, 'Luke', 'Price', 'TE', 'Sr+');
team.addPlayer(41, 'Jonathan', 'Weitz', 'PK', 'Jr');
team.addPlayer(41, 'Caleb', 'Nix', 'S', 'Fr');
team.addPlayer(42, 'Lavonta', 'Bentley', 'LB', 'Jr');
team.addPlayer(43, 'Riggs', 'Faulkenberry', 'LB', 'Fr');
team.addPlayer(43, 'Will', 'Blackston', 'TE', 'Soph');
team.addPlayer(44, 'Cade', 'Denhoff', 'DE', 'Fr');
team.addPlayer(44, 'Banks', 'Pope', 'TE', 'Fr');
team.addPlayer(45, 'Philip', 'Florenzo', 'LS', 'Soph');
team.addPlayer(46, 'Jesiah', 'Carlton', 'LB', 'Sr+');
team.addPlayer(47, 'Hogan', 'Morton', 'PK', 'Fr');
team.addPlayer(47, 'Boston', 'Miller', 'S', 'Fr');
team.addPlayer(48, 'David', 'Cote', 'LB', 'Jr');
team.addPlayer(49, 'Matthew', 'Maloney', 'LB', 'Jr');
team.addPlayer(50, 'Collin', 'Sadler', 'OL', 'Fr');
team.addPlayer(51, 'Peyton', 'Pitts', 'OL', 'Fr');
team.addPlayer(51, 'Colby', 'Doolittle', 'LB', 'Fr');
team.addPlayer(52, 'Joey', 'Eddis', 'LB', 'Soph');
team.addPlayer(53, 'Ryan', 'Linthicum', 'C', 'Fr');
team.addPlayer(54, 'Jeremiah', 'Trotter Jr.', 'LB', 'Soph');
team.addPlayer(54, 'Mason', 'Trotter', 'OL', 'Jr');
team.addPlayer(55, 'Payton', 'Page', 'DT', 'Soph');
team.addPlayer(56, 'Reed', 'Morrissey', 'LB', 'Fr');
team.addPlayer(56, 'Will', 'Putnam', 'OL', 'Sr');
team.addPlayer(58, 'Holden', 'Caspersen', 'LS', 'Fr');
team.addPlayer(58, 'Evan', 'McCutchen', 'DE', 'Soph');
team.addPlayer(59, 'Dietrick', 'Pennington', 'OL', 'Fr');
team.addPlayer(60, 'Mac', 'Cranford', 'OL', 'Jr');
team.addPlayer(62, 'Connor', 'Graham', 'OL', 'Soph');
team.addPlayer(64, 'Walker', 'Parks', 'OL', 'Jr');
team.addPlayer(65, 'Chapman', 'Pendergrass', 'OL', 'Fr');
team.addPlayer(67, 'Nathan', 'Brooks', 'OL', 'Fr');
team.addPlayer(68, 'Will', 'Boggs', 'OL', 'Soph');
team.addPlayer(69, 'Sam', 'Judy', 'OL', 'Fr');
team.addPlayer(70, 'Tristan', 'Leigh', 'OL', 'Fr');
team.addPlayer(71, 'Jordan', 'McFadden', 'OL', 'Sr');
team.addPlayer(72, 'Mason', 'Johnstone', 'OL', 'Fr');
team.addPlayer(73, 'Bryn', 'Tucker', 'OL', 'Soph');
team.addPlayer(74, 'Marcus', 'Tate', 'OL', 'Soph');
team.addPlayer(75, 'Trent', 'Howard', 'OL', 'Soph');
team.addPlayer(76, 'John', 'Williams', 'OL', 'Soph');
team.addPlayer(77, 'Mitchell', 'Mayes', 'OL', 'Jr');
team.addPlayer(78, 'Blake', 'Miller', 'OL', 'Fr');
team.addPlayer(80, 'Beaux', 'Collins', 'WR', 'Soph');
team.addPlayer(81, 'Drew', 'Swinney', 'WR', 'Sr');
team.addPlayer(82, 'Jackson', 'Crosby', 'WR', 'Fr');
team.addPlayer(83, 'Hampton', 'Earle', 'WR', 'Jr');
team.addPlayer(84, 'Davis', 'Allen', 'WR', 'Sr');
team.addPlayer(85, 'Josh', 'Sapp', 'TE', 'Fr');
team.addPlayer(86, 'Tye', 'Herbstreit', 'WR', 'Jr');
team.addPlayer(87, 'Michael', 'Mankaka', 'WR', 'Fr');
team.addPlayer(88, 'Clay', 'Swinney', 'WR', 'Fr');
team.addPlayer(89, 'Zach', 'Jackson', 'WR', 'Fr');
team.addPlayer(89, 'Jack', 'Smith', 'P', 'Fr');
team.addPlayer(90, 'Jabriel', 'Robinson', 'DT', 'Sr+');
team.addPlayer(91, 'Zaire', 'Patterson', 'DE', 'Fr');
team.addPlayer(92, 'Levi', 'Matthews', 'DE', 'Fr');
team.addPlayer(93, 'Caden', 'Story', 'DT', 'Fr');
team.addPlayer(97, 'Andrew', 'Roberts', 'DE', 'Sr');
team.addPlayer(98, 'Myles', 'Murphey', 'DE', 'Jr');
team.addPlayer(99, 'Greg', 'Williams', 'DE', 'Jr');

//Game Record for Clemson Football 2022
team.addGame(1, 'Georgia Tech', 41, 10);
team.addGame(2, 'Furman', 35, 12);
team.addGame(3, 'LA Tech', 48, 20);
team.addGame(4, 'Wake Forest', 51, 45);
team.addGame(5, 'NC State', 30, 20);
team.addGame(6, 'Boston College', 31, 3);
team.addGame(7, 'Florida State', 34, 28);
team.addGame(8, 'Syracuse', 27, 21);
team.addGame(10, 'Notre Dame',);
team.addGame(11, 'Louisville', );
team.addGame(12, 'Miami FL', );
team.addGame(13, 'S Carolina', );
