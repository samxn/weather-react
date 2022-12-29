export default function Time() {
  /* Days of week from today */
  function dayTime() {
    let now = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wedensday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[now.getDay()];
    let hour = now.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12; // without this 12 becomes 0

    let element = document.getElementById("dayTime");
    document.getElementById("dayTime");
    element.innerHTML = `${day}, ${hour}:${minutes} ${ampm}`;
    return element;
  }
  dayTime();
}
