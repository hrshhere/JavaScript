// loops---

// loop ka matlab repeat----

// ?for and while-----------


//foreach loop sirf array pe chlta hei matlab ki jab bhi tumhare paas ek array ho, tab use mei kaun ata hei foreach loop

/*

var a = [1,2,3,25,52,34,22,9,8,7];

a.forEach(function(val){
    console.log(val+2)
})

*/

// foreach kbhi bhi by default apke array mein change nahi krta wo apko changes krke deta hei array ki temporary copy par jiske wajah se array humesha same rhta hei ... 

/*

var a = [1,2,3,4,5];

a.forEach(function(val){
    val+2;
});

*/


// forin loop, object par loop karne k liye hota hei ... 


/*

var obj = {
    name : "Harsh",
    age : 24,
    city :  "Jhalwar"
}

for (var key in obj) {
    console.log(key, obj[key]);
}
*/


// do while loop ... 

/*

var a = 12;
// var a = 120;
do {
    console.log("hey");
    a++;
}
while (a < 15)

*/