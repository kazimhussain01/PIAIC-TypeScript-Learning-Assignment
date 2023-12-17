//Array Simple Concept
let K = ["kazim", "ali", "fareed", "zain", "tayyab"];
console.log(K);

//Array Simple Concept with Index Number
let L1 = ['kazim', 'ali', 'fareed', 'Zain', 'tayyab'];
console.log(L1[3])

//Array with pop method
let s = ['hamza', 'ali', 'abdullah', 'abubakar'];
console.log(s);
s.pop();
console.log(s);

//Array with push method
s.push('Kazim');
console.log(s);
 
//Array with Shift Method
let km = ['PIAIC1', 'PIAIC2', 'PIAIC3', 'PIAIC4', 'PIAIC5'];
console.log(km);
km.shift();
console.log(km);

//Array with UnShift Method
let panaverse = ['PANAVERSE1', 'PANAVERSE2', 'PANAVERSE3'.toLowerCase()];
console.log(panaverse);
panaverse.unshift('PANAVERSE0');
console.log(panaverse);

//Array with Slice Method 
let hussain = ["hussain1", "hussain2", "hussain3", "hussain4", "hussain5"]
console.log(hussain);
hussain.slice(2,4)
console.log(hussain);

//Array with Splice Method
let tech = ['TECH1', 'TECH2', 'TECH3'];
console.log(tech);
tech.splice(2,1 , "TECH0", "Kazim".toLowerCase()) 
console.log(tech);