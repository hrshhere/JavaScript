//  Currently JS version is ES13 (ECMAScript 2022)[1)Top-level await, 2)New class elements, 3)Static block inside classes]
// ES.Next (Dynamic name for upcoming versions)



//--->  Word vs Keyword

// Word = is not meaningful in JavaScript... 
            // (Example:= Dhabu, Chacha, Babaji..etc)


// Keyword = having the some meaning in JavaScript... 
            // (Example := for, if, let, var..etc)


// new keyword :- Jab bhi new lagta hei hamesa ek blank object apne mn mei bna lo..

                                            // or 

// It's a basically blank object for the construcor function, which is getting called just after new keyword. 



//---> Variables, Let and Constants 

// Variables = Code mei koi bhi data store krne ke liye or use bdmei change krne k liye jiska use hota hai use hota hai use kahte hai variables (var)... 

// Constants = Code mei kisi ko fix value store krani h ya kisi k value change nhi krni h toh uske liye constant (const) ka use hota hai....

// --->
// var old js mein tha...
// var function scoped hota hai => var apne parent function mei kbhi bhi use ho sakta hei ...
// var adds itself to the window object ...


// let const new js mei hai ... 
// let const braces scoped hota hai ... 
// let const doesn't adds in window ... 



//---> Browser context api .. 

// window = browser related features (for check:- run window in console..)
// stack = It's a way . ...
// Heap Memory = Jitne bhi variables ya data hum baanaate hei unhe store kahi to karna pdta hei uske liye hota hei heap memory ... 


// ---> Execution context-- it means jab bhi function chalayenge function apna ek khudka imaginary container bna lega jismein uski teen chije hogi ...  
                                                
                                                // or

// Execution context is a container where the function's code is executed and it's created wheanever a function is called, it contains 3 things, variables, function and lexical environment... 

// ye jo imaginary container hei,ise hi hum execution context kahte hei... 

// 1) Variables 
// 2) Function inside that parent function 
// 3) Lexical environment of that function 

// ---> Lexical Enivronment:- Lexical environment hota hei ek chart jismei ye likha hota hei apka particular function kin chijo ko access kar sakta hei kinko nahi, matlab ki it holds it's scope and scope chain ...  
