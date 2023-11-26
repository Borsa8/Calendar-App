$(document).ready(function () {

  // Display current day
  const currentDayElement = document.getElementById("currentDay");
  const today = dayjs().format("dddd, MMMM D, YYYY");
  currentDayElement.textContent = today;

  // Get the current day
  const currentHour = dayjs().hour();

// Clear content
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

// Check each if it is in the past, present, or future
  $(".time-div").each(function () {

// Split and convert to numerical values
    var timeDiv = parseInt($(this).attr("id").split("-")[1]);
});

// Compare the current time with the event time
if (currentHour == timeDiv) {

// If it is a match, set present
  $(this).addClass("present");
  $(this).children(".description").addClass("white-text");
} else if (currentHour < timeDiv) {

// If it is prior, set future
  $(this).removeClass("present");
  $(this).addClass("future");
} else if (currentHour > timeDiv) {

  // If it is after, set past
  $(this).removeClass("future");
  $(this).addClass("past");
}

});
