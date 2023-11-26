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
