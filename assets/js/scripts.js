/* variables */
// If there is nothing in hourSave set hourSave to an empty array
var aHourSave = JSON.parse(localStorage.getItem('hourSave')) || [];

/* Listeners */
// save button clicked
$(document).on("click", ".lockBtnStyle", function () {
    saveHour($(this).attr("id"), $("#hour-p-" + $(this).attr("id")).text());
});

// text to edit clicked
$(document).on("click", "p.hour-item", function () {
    var textInput = $("<textarea>")
        .attr("class", $(this).attr("class"))
        .attr("id", $(this).attr("id"))
        .text($(this)
            .text()
            .trim()
        );
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// editable field was un-focused - change back to p
$(document).on("blur", "textarea", ".row", function () {
    var hourP = $("<p>")
        .attr("class", $(this).attr("class"))
        .attr("id", $(this).attr("id"))
        .text($(this).val());

    $(this).replaceWith(hourP);
});
/* End Listeners */

/* Functions */

//save to local storage
var saveHour = function (hourIndex, inText) {
    aHourSave[hourIndex] = inText;
    localStorage.setItem("hourSave", JSON.stringify(aHourSave));
}

// format hour
var fFormatCurHour = function (inHour) {
    // receive hour of display row; return format for selected color
    if (inHour < moment().format("HH")) { return "past" };
    if (inHour == moment().format("HH")) { return "present" };
    return "future"
};
/* End Functions */

/* Begin main logic */
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

// Load hour rows
for (i = 7; i < 18; i++) {
    //<div class="row m-1" id="hour-row-8">
    $("#hour-list").append($("<div>")
        .addClass("row m-1")
        .attr("id", "hour-row-" + i)
    );
    //<div class="col-1 hourDiv p-0 pr-1 align-middle" id="hour-div-8">
    $("#hour-row-" + i).append($("<div>")
        .addClass("col-1")
        .attr("id", "hour-div-" + i)
        .addClass("hourDiv p-0 pr-1 align-middle")
    );

    var amPm = " am";
    var iHour = i;
    if (i > 11) { amPm = " pm" };
    if (i > 12) { iHour = i - 12 };
    //<p class="mt-4 text-right">8 am</p>
    $("#hour-div-" + i).append($("<p>")
        .addClass("mt-4 text-right")
        .text(iHour + amPm)
    );
    //<p class="col-10 mb-0 hour-item past" id="hour-p-8">item text</p>
    $("#hour-row-" + i).append($("<p>")
        .addClass("col-10 mb-0 hour-item")
        .addClass(fFormatCurHour(i))
        .attr("id", "hour-p-" + i)
        .text(aHourSave[i])
    );
    //<div class="col-1 saveBtn" id="hour-btn-8">
    $("#hour-row-" + i).append($("<div>")
        .addClass("col-1 saveBtn")
        .attr("id", "hour-btn-" + i)
    );
    //<button class="lockBtnStyle oi oi-lock-locked mt-4" id="8"></button>
    $("#hour-btn-" + i).append($("<button>")
        .addClass("lockBtnStyle oi oi-lock-locked mt-4")
        .attr("id", i)
    );
}