"use strict";

const x = 1;

let weekDay = ""
let day = new Date().getDay()

switch (day) {
    case 6:
        weekDay = "Saturday";          // if (day == 6)
        break;
    case 0:
        weekDay = "Sunday";            // if (day == 0)
        break;
    default:
        weekDay = "Whatever"           // else
}
console.log(day)                       // 6 or whatever the day is
console.log(weekDay)                   // "Saturday"