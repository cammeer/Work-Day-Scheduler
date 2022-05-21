var date = new Date();

// today's date appears in header
$("#currentDay").text(date.toLocaleDateString());

var today = moment().format("dddd, MMMM Do");
var now = moment().format("H A");
var rows = $(".time-block");
var currentHour = date.getHours();

// var data = getData();

let foundcurrenthour = false;

$.each(rows, function(i, row) {
    if (row.id === "Hour" + currentHour) {
        //highlight present hours in red
        $(row).find("textarea").addClass("present");
        foundcurrenthour = true;
    } else {
        //if statement to highlight future hours in green
        if (foundcurrenthour) {
            $(row).find("textarea").addClass("future");
            //else if statement to highlight past hours in grey
        } else {
            $(row).find("textarea").addClass("past");
        }
    }
})

//click  save button for that time block


//text for that event is saved in local storage


//refresh the page, the saved events persist