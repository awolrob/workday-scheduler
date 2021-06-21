$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

// Load hour rows
// debugger;
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

    var hourItem = $("<textarea>")
        .addClass("col-10 hour-item future")
        .text("Test Area " + i);
    $("#hour-row-" + i).append(hourItem);

    var hourItem = $("<div>")
        .addClass("col-1 saveBtn")
        // ?.text("Test Area 1");
        .attr("id", "hour-btn-" + i);

    $("#hour-row-" + i).append(hourItem);

    var hourItem = $("<button>")
        .addClass("lockBtnStyle oi oi-lock-locked mt-4");
    // ?.text("Test Area 1");

    $("#hour-btn-" + i).append(hourItem);

}

// task text was clicked
$(".hour-item").on("click", function () {
    // get current text of element

    var text = $(this)
        .text()
        .trim();
    console.log(text);
    // replace p element with a new textarea element
    // var textInput = $("<textarea>").addClass("form-control").val(text);
    var textInput = $("<textarea>")
        .val(text)
        .addClass("col-10")
        .addClass("hour-item")
        .addClass("past");
    console.log(textInput);

    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
    // console.log(textInput);
    // console.log($(this).replaceWith(textInput));
});

// editable field was un-focused
$(".hour-item").on("blur", "p", function () {
    // get current value of textarea
    var text = $(this).val();
    console.log(text);
    // get status type and position in the list
    // var status = $(this)
    //   .closest(".list-group")
    //   .attr("id")
    //   .replace("list-", "");
    // var index = $(this)
    //   .closest(".list-group-item")
    //   .index();

    // update task in array and re-save to localstorage
    // tasks[status][index].text = text;
    // saveTasks();

    // recreate p element
    var taskP = $("<span>")
        //   .addClass("m-1")
        .addClass("col-10")
        .addClass("hour-item")
        .addClass("future")
        .text(text);

    // replace textarea with new content
    $(this).replaceWith(taskP);
});