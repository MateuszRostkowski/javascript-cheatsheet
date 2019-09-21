"use strict";

const x = 1;

let i = 0;
for (i; i <= 10; i++) {
    if (i === 5) {
        console.log("i is: " + i + " and loop skips when i == 5");
        continue;
    }
    console.log(i);
}