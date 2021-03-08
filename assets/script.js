// Use jQuary Selector
// create an array of business hours
// based on the style.css, for each business hour, 
// create a time-block contains hour, description, and saveBtn
var containEl = $('.container');
var hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
var btnID = ['A','B','C','D','E','F','G','H','I'];
for (var i = 0; i < hours.length; i++) {
    var divEl1 = $('<div>');
    var divEl2 = $('<div>');
    var eventEl = $('<textarea>');
    var btnEl = $('<button>');
    var findstringId = [];
    findstringId = "#" + i;

    divEl1.attr('class', 'time-block row');
    divEl2.attr('class', 'hour col-md-1');
    eventEl.attr('class', 'description col-md-10');
    btnEl.attr('class', 'saveBtn col-md-1');
    eventEl.attr('id', i);
    btnEl.attr('id', btnID[i]);
    eventEl.text(localStorage.getItem(findstringId))
    divEl2.text(hours[i]);

    containEl.append(divEl1);
    divEl1.append(divEl2);
    divEl1.append(eventEl);
    divEl1.append(btnEl);
}

// https://momentjs.com
// check current hour and set the background of event blocks
var now = $('#currentDay');
var date = moment().format('dddd, MMMM Do YYYY');
now.text(date);
var currentHour = moment().format('hA');


// check the momentjs
// console.log(moment().format('h'))
// find the types of hour output, string
// console.log(typeof(moment().format('h')))

// save text into localstorage
// when click the function, first find the id of the clicked button
// then determine the position of clicked button in the btnID list, and find its corresponding textarea input
// convert the id number into #id, then we can use in the jQuary selector
// Based on the stringID, save each text into its corresponding localstorage
var btnSave = $('.saveBtn');
function recordEvent(event) {
    event.preventDefault();

    var findId = this.id;
    var eventId = btnID.indexOf(findId);
    var stringId = [];
    stringId = "#" + eventId;
    var eventlist = $(stringId).val();
    localStorage.setItem(stringId,eventlist);
}

btnSave.on('click', recordEvent);


