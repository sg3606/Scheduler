// Use jQuary Selector
var containEl = $('.container');
// create an array of business hours
var hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];

// based on the style.css, for each business hour, 
// create a time-block contains hour, description, and saveBtn
for (var i = 0; i < hours.length; i++) {
    var divEl1 = $('<div>');
    var divEl2 = $('<div>');
    var eventEl = $('<textarea>');
    var btnEl = $('<button>');

    divEl1.attr('class', 'time-block row');
    divEl2.attr('class', 'hour col-md-1');
    eventEl.attr('class', 'description col-md-10')
    btnEl.attr('class', 'saveBtn col-md-1')
    // eventEl.text(localStorage.getItem('events'))
    divEl2.text(hours[i])

    containEl.append(divEl1);
    divEl1.append(divEl2);
    divEl1.append(eventEl);
    divEl1.append(btnEl);
}

// https://momentjs.com
var now = $('#currentDay');
var date = moment().format('dddd, MMMM Do YYYY');
now.text(date);

// check the momentjs
// console.log(moment().format('h'))

// find the types of hour output, string
// console.log(typeof(moment().format('h')))

// save text into localstorage
var btnSave = $('.saveBtn');
function handleFormSubmit(event) {
    event.preventDefault();

    var eventlist = $('.description').val();
    localStorage.setItem('events',eventlist)
}

btnSave.on('click', handleFormSubmit);


