"use strict";

let db = require('./db-interaction');
let disp = require('./display');
let list = require('./user')

disp.spaSwitch();
db.pullSongs();
$('#new-song-button').click(db.addSong);
list.addListeners();

