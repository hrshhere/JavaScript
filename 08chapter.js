                                                    // PROTOTYPE //

// Understanding Prototype 
// What Does It Contains?      

// [[ProtoType]] contains many helper properties and method we can use to complete our task, let's say 
                                                    // we create an array and we want to know length of it,what do we do, we use .length property on array, did we created .length on that array, no! but it still contains .length, the question is how?

                                                    // the answer is, many properties and methods are already available to use built by javascript creators inside property of every object. 



                                                    // PROTOTYPE INHERITANCE 

// prototype is basically passing parent's feature or properties to their childrens, to do the same thing in javascript with the help of prototype (one extra property always given by javascript to every object) is called prototypal inheritance.

// Examples :- 
/*            

            var human = {
                canFly: false,
                canTalk: true,
                canWalk: true,
                haveEmotions: true,
                hasFourLegs: false
            }

            var harsh = {
                canMakeAmazingWebsite: true,
                canMakeAwesomeAnimations: true,
                candMakeWorldClassAwardedWebsites: true
            }

            harsh.__proto__ = human;

*/