/* variables */


/* Listeners */

// add on refresh

// save button clicked
$(document).on("click", ".lockBtnStyle", function () {
    var iHourPos = $(this).attr("id");
    console.log($("#hour-p-" + iHourPos).text());

    // saveHourItem();
});

// text to edit clicked
$(document).on("click", ".hour-item", function () {
    var text = $(this)
        .text()
        .trim();
    var textClass = $(this).attr("class");
    var textId = $(this).attr("id");

    var textInput = $("<textarea>")
        .attr("class", textClass)
        .attr("id", textId)
        .text(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// editable field was un-focused
$(document).on("blur", "textarea", ".row", function () {
    var text = $(this).val();
    // recreate p element
    var textClass = $(this).attr("class");
    var textId = $(this).attr("id");

    var hourP = $("<p>")
        .attr("class", textClass)
        .attr("id", textId)
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(hourP);
});
/* End Listeners */

/* Functions */

//add load local storage

//add saveHour item

// format hour
var fFormatCurHour = function (inHour) {
    // receive hour of display row; return format for selected color
    var curHour = moment().format("HH");

    //********Test Code
    curHour = 10;
    //*************Test Code
    
    // var std24hr = moment(hour).format("HH");
    if (inHour < curHour) {
        return "past";
    } else if (inHour == curHour) {
        return "present";
    };
    return "future"
};
/* End Functions */

/* Begin main logic */
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

// Load hour rows
for (i = 8; i < 18; i++) {
    var hourDiv = $("<div>")
        .addClass("row m-1")
        .attr("id", "hour-row-" + i);

    $("#hour-list").append(hourDiv);

    var hourCol = $("<div>")
        .addClass("col-1")
        .attr("id", "hour-div-" + i)
        .addClass("hourDiv p-0 pr-1 align-middle");

    $("#hour-row-" + i).append(hourCol);

    var amPm = "am";
    var iHour = i;
    if (i > 11) { amPm = "pm" };
    if (i > 12) { iHour = i - 12 };
    var hourItem = $("<p>")
        .addClass("mt-4 text-right")
        .text(iHour + " " + amPm);

    $("#hour-div-" + i).append(hourItem);

    var rColor = fFormatCurHour(i);

    var hourItem = $("<p>")
        .addClass("col-10 mb-0 hour-item")
        .addClass(rColor)
        .attr("id", "hour-p-" + i)
        .text("");

    $("#hour-row-" + i).append(hourItem);

    var hourItem = $("<div>")
        .addClass("col-1 saveBtn")
        .attr("id", "hour-btn-" + i);

    $("#hour-row-" + i).append(hourItem);

    var hourItem = $("<button>")
        .addClass("lockBtnStyle oi oi-lock-locked mt-4")
        .attr("id", i);

    $("#hour-btn-" + i).append(hourItem);
}