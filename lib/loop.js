"use strict";
//For Loop with Continue Statment
for (let k = 0; k <= 10; k++) {
    if (k == 4) {
        console.log("Hey Number");
        continue;
    }
    console.log("Number : " + k);
}
console.log("For Loop with Break Statment");
//For Loop with Break Statment
for (let k = 1; k <= 5; k++) {
    if (k == 4) {
        console.log("Hey Number");
        break;
    }
    console.log("Number : " + k);
}
console.log("Find Even Number");
//Find Even Number
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("its even number : " + i);
    }
}
console.log("Find Odd Number");
//Find Odd Number
for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log("its Odd number : " + i);
    }
}
console.log("Nested Loop");
//Nested Loop
for (let a = 1; a <= 5; a++) {
    for (let b = 1; b <= a; b++) {
        console.log(b + " ");
    }
}
