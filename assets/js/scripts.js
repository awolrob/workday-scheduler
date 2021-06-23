/* Listeners */

// save button clicked
$(document).on("click", ".lockBtnStyle", function () {
    console.log($(".lockBtnStyle").attr("id")," - in button click");
    console.log($(".lockBtnStyle").parents()," - in button click");
    // console.log($(".lockBtnStyle").attr("class")," - in button click");

    // saveHourItem();
});

// text to edit clicked
$(document).on("click", ".hour-item", function () {
    var text = $(this)
        .text()
        .trim();
    var textClass = $(this).attr("class");

    console.log(text," - in click");
    
    var textInput = $("<textarea>")
        .attr("class", textClass)
        .text(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// editable field was un-focused
$(document).on("blur", "textarea", ".row", function () {
    var text = $(this).val();
    console.log(text," - in blur");
    // recreate p element
    var textClass = $(this).attr("class");

    var hourP = $("<p>")
        .attr("class", textClass)
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(hourP);
});
/* End Listeners */

/* Functions */
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
/* End Functions */

/* Begin Code */
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

// Load hour rows
for (i = 1; i < 25; i++) {
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
        .text(iHour + " " + amPm);

    $("#hour-" + i).append(hourItem);
    
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
        .addClass("lockBtnStyle oi oi-lock-locked mt-4")
        .attr("id","btnId-"+i);

    $("#hour-btn-" + i).append(hourItem);
}