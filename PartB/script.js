// Onclick function to display Lotto date
var myFunction = function () {
  var currentDate = new Date(document.getElementById("currentDate").value),
    currentTime = document.getElementById("currentTime").value,
    arr = currentTime.split(":"),
    first = arr.shift(),
    last = arr.pop();
  currentDate.setHours(first);
  currentDate.setMinutes(last);

  var lottoDate = new Date(currentDate.getTime());
  lottoDate.setHours(20);
  lottoDate.setMinutes(0);
  //days are 1-7 where  monday starts with 1
  if (currentDate.getHours() >= 20) {
    if (currentDate.getDay() >= 6 || currentDate.getDay() < 3) {
      lottoDate.setDate(
        lottoDate.getDate() + ((3 + 7 - lottoDate.getDay()) % 7)
      );
    } else if (currentDate.getDay() >= 3 || currentDate.getDay() <= 5) {
      lottoDate.setDate(
        lottoDate.getDate() + ((6 + 7 - lottoDate.getDay()) % 7)
      );
    }
  } else if (currentDate.getHours() < 20) {
    if (currentDate.getDay() <= 6 && currentDate.getDay() >= 4) {
      lottoDate.setDate(
        lottoDate.getDate() + ((6 + 7 - lottoDate.getDay()) % 7)
      );
    } else if (currentDate.getDay() > 6 || currentDate.getDay() <= 3) {
      lottoDate.setDate(
        lottoDate.getDate() + ((3 + 7 - lottoDate.getDay()) % 7)
      );
    }
  }
  document.getElementById("message").innerHTML = lottoDate.toUTCString();
};

document.getElementById("btnclick").addEventListener("click", myFunction); // trigger on click events

/* To set min  current date as today */
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = yyyy + "-" + mm + "-" + dd;
document.getElementById("currentDate").setAttribute("min", today);
/* 
To set min  current date as today ends
*/

/* 
To set default  current date and time starts 
*/
// Function which returns a minimum of two digits in case the value is less than 10
const getTwoDigits = (value) => (value < 10 ? `0${value}` : value);
const formatDate = (date) => {
  const day = getTwoDigits(date.getDate());
  const month = getTwoDigits(date.getMonth() + 1); // add 1 since getMonth returns 0-11 for the months
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};
const formatTime = (date) => {
  const hours = getTwoDigits(date.getHours());
  const mins = getTwoDigits(date.getMinutes());

  return `${hours}:${mins}`;
};
const date = new Date();
document.getElementById("currentDate").value = formatDate(date);
document.getElementById("currentTime").value = formatTime(date);
/* 
To set default  current date and time ends
 */
