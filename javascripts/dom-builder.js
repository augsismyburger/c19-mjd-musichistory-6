"use strict";

function writeMusic(data) {
    for (var i in data) {
        console.log("write music data", data[i]);

        $('#song-list').append(`<div><li id='js-song'>${data[i].title}</li><li class='js-info'>${data[i].artist}</li><li class='js-info'>|</li><li class='js-info'>${data[i].album}</li>|<li class='js-info'>${data[i].genre}</li><button class='toDelete'>Delete</button></div>`);
    }
}

function writeNewSong(data) {
    $('#song-list').append(`<div><li id='js-song'>${data.title}</li><li class='js-info'>${data.artist}</li><li class='js-info'>|</li><li class='js-info'>${data.album}</li>|<li class='js-info'>${data.genre}</li><button class='toDelete'>Delete</button></div>`);
}

function getNewSong() {
    // GRABBING NEW SONGS FROM DOM INPUT
    function MakeMusic(title, artist, album, genre) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.genre = genre;
    }

    console.log("inputs", newSong.val());
    let song = new MakeMusic($('#new-song').val(), $('#new-artist').val(), $('#new-album').val(), $('#new-genre').val());

    $('#new-song').val('');
    $('#new-artist').val('');
    $('#new-album').val('');
    $('#new-genre').val('');

    $('#main-content').removeClass('hidden');
    $('#add-music-div').addClass('hidden');
    return song;
}

module.exports = {writeMusic, getNewSong, writeNewSong};
