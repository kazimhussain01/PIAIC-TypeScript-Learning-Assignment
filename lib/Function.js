"use strict";
//Simple Function 
function sum() {
    console.log("KAZIM");
    console.log('HUSSAIN');
}
//Calling Function
sum(); //KAZIM 
// HUSSAIN
//Funtion with Default Parameters 
function piaic(fName = "zain", LName = "Ali") {
    console.log("HELLO" + ' ' + fName, LName);
}
//Calling Function
piaic("KAZIM", "HUSSAIN"); //HELLO KAZIM HUSSAIN
//Function with Default Parameters in Adition 
function addition(add1 = 11, add2 = 1) {
    console.log(add1 * add2);
}
//Calling Function
addition(6, 6); //36
//Function with Return Value Default Parameter
function fn(fname = 'zain', sname = 'ali') {
    var x = fname + '_' + sname;
    return x;
}
//Calling Function
var v = fn();
console.log(v); //zain_ali
//Function with Return Value Default Parameter
function mem(math = 90, eng = 90, cp = 90) {
    var s = math + eng + cp;
    return s;
}
var tt = mem(60, 70, 40);
console.log(tt); //170
//Simple Arrow Function
let welcome = (name = "kazim", age = "12") => `Hello & Welcome ${name} - ${age}`;
console.log(welcome("Kazim Hussian"));
