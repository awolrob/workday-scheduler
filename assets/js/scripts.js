$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

// format hour
var fFormatCurHour = function (inHour) {
    // receive hour of display row; return format for selected color
    var curHour = moment().format("HH");
    // var std24hr = moment(hour).format("HH");
    console.log(curHour, inHour);
// debugger;
    if (inHour < curHour) {
        return "past";
    } else if (inHour == curHour) {
        return "present";
    };
    return "future"

};


// Load hour rows
for (i = 8; i < 25; i++) {
    var hourDiv = $("<div>")
        .addClass("row m-1")
        .attr("id", "hour-row-" + i);

    $("#hour-list").append(hourDiv);

    var hourCol = $("<div>")
        .addClass("col-1")
        .addClass("hourDiv p-0 pr-1 align-middle")
        .attr("id", "hour-" + i);

    $("#hour-row-" + i).append(hourCol);

    var amPm = "am";
    var iHour = i;
    if (i > 11) { amPm = "pm" };
    if (i > 12) { iHour = i - 12 };
    var hourItem = $("<p>")
        .addClass("mt-4 text-right")
        .text(iHour + amPm);

    $("#hour-" + i).append(hourItem);
    // debugger;
    var rColor = fFormatCurHour(i);

    var hourItem = $("<p>")
        .addClass("col-10 mb-0 hour-item")
        .addClass(rColor)
        .text("Test Area " + i);
    $("#hour-row-" + i).append(hourItem);

    var hourItem = $("<div>")
        .addClass("col-1 saveBtn")
        .attr("id", "hour-btn-" + i);

    $("#hour-row-" + i).append(hourItem);

    var hourItem = $("<button>")
        .addClass("lockBtnStyle oi oi-lock-locked mt-4");

    $("#hour-btn-" + i).append(hourItem);

}

// task text was clicked
$(".hour-item").on("click", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("col-10")
        .addClass("mb-0")
        .addClass("hour-item")
        .val(text)
        .text(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// editable field was un-focused

$(".row").on("blur", "textarea", function () {
    var text = $(this).val();
    console.log(text);

    // update task in array and re-save to localstorage
    // tasks[status][index].text = text;
    // saveTasks();

    // recreate p element
    var hourP = $("<p>")
        .addClass("col-10")
        .addClass("mb-0")
        .addClass("hour-item")
        .val(text)
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(hourP);

});