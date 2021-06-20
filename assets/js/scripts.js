$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
console.log($('#currentDay').val());
console.log(moment().format('dddd, MMMM Do, YYYY hh:mm:ss a'));
// task text was clicked
$(".hour-item").on("click", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();
    // console.log(text)  ;
    // replace p element with a new textarea element
    // var textInput = $("<textarea>").addClass("form-control").val(text);
    var textInput = $("<textarea>")
        .val(text)
        .addClass("col-10")
        .addClass("hour-item")
        .addClass("future");

    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
});

// editable field was un-focused
$(".hour-item").on("blur", "textarea", function () {
    // get current value of textarea
    var text = $(this).val();

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