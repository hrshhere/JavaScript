// ?functions.....

// function ka matlab aap kuch code ko likh kar koi naam de skte ho and baadmei usey use kar skte ho with that name as many times. 
// function = code ko naam dena.


// Functions mainly teen kaam k liye use hota hei... 

// 1 -> Jab Apka code aap turant nahi chlana chaahte future mein chlana chahte ho ...
// 2 -> Jab apka code ap reuse krna chate ho ... 
// 3 -> Jab aap code chalana chate ho har baar with different data ... 


// Arguments:- Real value jo hum dete h function chlate vkt... 
// Perameter:- Variables jinme value store hoti h arguments wali... 


//--> callback function ... 

// jab bhi koi aisa code jo baad mei chalta hai aap likhoge, kyuki wo code baad mei chlta hei S ko ye pata nahi hota ke wo complete hua ya nahi, aise code ke completion pr JS ko btaya jata hai ke wo complete hogya aur aap use chla sakte ho, ye batane ka kaam call back ka hei.. 

                                            // OR 

// Aisa code jo badmei chlta hei use hum ek function dete hei ke bhaiya jab complete hojana to ye function chla dena, aur wo function jo hum dete hei wo ek normal function hota hei aur use kahte hei callback function ... 


// --> First class function 
// JS mei ek concept hei jiska matlab hota hai ki aap fnc ko use kar sakte ho as a value ...

                                        // OR 

// A Language is said to have First Class Function when the function in that language are treated as normal values ot like variables, you can save them, you can pass them as Arguments to Another Function ...

/*

function abcd (a) {
    a();
}

abcd(function(){console.log("Hello");})

*/


// --> Higher Order Function 

// Aisa function jo accept karle ek aur function ya fir wo return krde ek or function ... (Higher Order Function  are the funtion which accept a  function in a parameter or return a function or both ...  )

// And ForEach Method always takes another function inside it, so ForEach is a Higher Order Function ...
/*
// Example :- 1]                                                    // Example :- 2]

    function abcd(val){                                            function abcd({
                                                                        return function(){}
                                                                    })
    }                                                               
    abcd(function(){})                                              abcd()

    */

// Important Tips--> forEach function is also Higher Order function ...

/*

var arr = [1,2,3,4,5];

arr.forEach(function(){})

*/


// --> Constructor Function

// Jab apke paas esa koi bhi mauka ho ke aapko ek jesi properties waale bhut sare elements banane hai us wqt app constructor function use kar skte ho ... 
                                            // OR 

// A Function which whenever invoked(call) with "New" Keyword Returns An Object, If we use "This" Keyword inside That Function, It Returns An Object With All of the Properties And Methods Mentioned inside that Function, such function is called constructor function. 

/*

function circularButtonBanao(color){
    this.radius = 2;
    this.color = color;
    this.icon = false;
    this.pressable = true;
}
var redbtn = new circularButtonBanao("red");
var greenbtn = new circularButtonBanao("green");
var bluebtn = new circularButtonBanao("blue");

*/


// -->> iife function :-  immediately invoked function expression
// iife hei function ko turant chalane ki kala, isi trike se hum log koi private value bana paaye..  

/*

var ans = (function(){
    var privateval = 12;

    return {
        getter: function(){
            console.log(privateval);
        },
        setter: function(val){
            privateval = val;
        }
    }
})()
*/