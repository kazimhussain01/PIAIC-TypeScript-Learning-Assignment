let obj = {
    firstName : "Kazim",
    LastName : "Hussain",
    Age : 18,
    Country : "Pakistan",
}

for (let key in obj){
    console.log(key +" : "+obj[key])
}

let fruit = {
    fruit1 : "Mango",
    fruit2 : "Banana",
    fruit3 : "Pineapple",
}

for (let fruits in fruit){
    console.log(fruits +"  :  "+fruit[fruits])
}