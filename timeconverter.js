let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSecondsEl = document.getElementById("timeInSeconds");


convertBtnEl.addEventListener("click", function() {
    let hoursInput = hoursInputEl.value;
    let minutesInput = minutesInputEl.value;
    let seconds = 0;
    if (hoursInput === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours.";
    } else if (minutesInput === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes.";
    } else if (hoursInput === "" && minutesInput === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours.";
    } else {
        seconds = (parseInt(hoursInput)) * (60 * 60) + (parseInt(minutesInput) * (60));
        timeInSecondsEl.textContent = seconds + "s";
        timeInSecondsEl.classList.add("timeInSecondscls");
    }
})