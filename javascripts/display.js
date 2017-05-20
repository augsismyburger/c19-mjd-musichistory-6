"use strict";

// SPA SWITCHERONI FUNCTION
function spaSwitch () {

    $('#add-music').click( () => {
        console.log(event);
        $('#main-content').addClass('hidden');
        $('#add-music-div').removeClass('hidden');
    });
    $('#view-music').click(() => {
        console.log(event);
        $('#main-content').removeClass('hidden');
        $('#add-music-div').addClass('hidden');
    });
}

module.exports = {spaSwitch};

