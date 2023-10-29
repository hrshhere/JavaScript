// Hoisting in JavaScript = Variable and functions are hoisted which means then declaration is moved on the top of code...

// how hoisting works ...?

/*
console.log(a)

var a = 12  
(output = undefined...)

b'coz in java script...

var a = 12   //are equals to

var a  //declariation
a = 12  //initialization

so tha declaration goes to the top like ...

var a 

console.log(a)
 
a = 12   //and whole process works like that, it is the hoisting...
*/

// in other language not any kind of hoisting process... so their becomes errors... and in JavaScript becomes undefined...




// Types in JavaScript... 

// Primitives and Reference...

// Primitives = which haven't any type of brackets... examples = !(), !{}, ![] etc... 

// Reference = which have brackets...examples = ( ), { }, [ ] etc ... 


// ==>> Aisi koi bhi value jisko copy krne par real copy nhi hota, balki usmei value ka refrence  pass ho jata hai, use hum refrence value kahte hai, aur jiska copy krne par real copy ho jaaye wo vo var;ue primative value hoti h ... 


// ---> How to copy refrence value ? 

var a = [1,2,3,4,5,6]
var b = [...a]      //there ("...a") is spread operator which used to copy refrence value...
b.pop()
console.log(a,b)


// same thing use for object also ... (spread operator)