$(document).ready(function () {

  // Display current day
  const currentDayElement = document.getElementById("currentDay");
  const today = dayjs().format("dddd, MMMM D, YYYY");
  currentDayElement.textContent = today;

  // Get the current day
  const currentHour = dayjs().hour();

 
});
