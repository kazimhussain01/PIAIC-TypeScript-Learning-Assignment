"use strict";
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
var matchFound = "no";
for (var i = 0; i <= 4; i++) {
    if ("Islamabad" === cleanestCities[i]) {
        matchFound = "yes";
        console.log("It's one of the cleanest cities");
    }
}
// *Find Vowel & not Vowel Word
let a = "i";
if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
    console.log("its a Vowel Word");
}
else {
    console.log("its not a vowel word");
}
//* Rest Operator...
function sum(name, ...value) {
    console.log(`Hello ${name} : `);
    let sum = 0;
    for (let i in value) {
        sum += value[i];
    }
    console.log(sum);
}
sum("Kazim Hussain", 20, 30, 50);
//* Rest Operator One More Example...
function num1(...args) {
    let total = 0;
    for (let arg in args) {
        total += args[total];
    }
    console.log(total);
}
num1(1, 1);
