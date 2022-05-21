var date = new Date();

// today's date appears in header
$("#currentDay").text(date.toLocaleDateString());

var today = moment().format("dddd, MMMM Do");
var now = moment().format("H A");
var rows = $(".time-block");
var currentHour = date.getHours();


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

//event listener
$(".saveBtn").on("click", saveTask)

//save tasks to storage

function saveTask() {

    var index = $(".saveBtn").index(this);
    console.log(index)

    localStorage.setItem("textarea" + String(index), $("textarea")[index].value);

}

//persisting tasks

function readLocalStorage() {
    for (index = 0; index < 9; index++) {
        $("textarea")[index].value =
            localStorage.getItem("textarea" + String(index), $("textarea")[index].value);
    }
}

readLocalStorage();