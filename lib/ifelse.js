"use strict";
//Simple if Statment 
let name1 = 'kazim';
let country = "Pakistan";
if (country == "Pakistan") {
    console.log("Hello Mr." + name1 + ' ' + 'Do you live in Pakistan');
    console.log("     'Yes I am Live in Pakistan'     ");
}
//if else Statment 
let name2 = "KAZIM_HUSSAIN";
let gender = "Male";
if (gender == "Male") {
    console.log("Welcome Mr. " + name2 + ' ' + "in Console.log");
}
else {
    console.log('Warring!');
}
//if else Statment
let name3 = "KAZIM_HUSSAIN";
let gender1 = "Male";
if (gender1 == "FeMale") {
    console.log("Welcome Mr. " + name3 + ' ' + "in Console.log");
}
else {
    console.log('Mr.Kazim Your if Statment is Wrong!');
}
//is else if Mulitiply Statment
let percentage = 93;
if (percentage >= 90 && percentage <= 100) {
    console.log('Mr.Kazim You are Merit');
}
else if (percentage >= 70 && percentage < 80) {
    console.log('You are 1st Division');
}
else if (percentage >= 60 && percentage < 70) {
    console.log('You are 2nd Division');
}
else if (percentage >= 45 && percentage < 60) {
    console.log('You are 3rd Division');
}
else if (percentage < 33) {
    console.log('You are Fail');
}
else {
    console.log('Please Enter the Valid Percentage');
}
//Nested if Statment 
// Ticketing system
let country1 = "Where do you live?";
// Number() function is used to convert the string to number
let age3 = 20;
if (country1 === "Where do you live?") {
    if (age3 >= 18) {
        console.log("Here is your ticket");
    }
    else {
        console.log("Age restriction");
    }
}
else {
    console.log("Invalid country");
}
