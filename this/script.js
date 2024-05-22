//Strict mode in JavaScript is a way to opt into a restricted variant of the language, which can help catch common coding errors and "unsafe" actions, such as assigning values to undeclared variables. 
'use strict';
// This is a runtime binding
class Person {
    constructor(name){
        this.name = name;
        console.log(this);

    }

    speak(){
        console.log("Hello I am " + this.name);
    }
}

const me = new Person("Alex");


function logThis (){
    console.log(this);
}

const obj = {
    num:10
};

logThis();
// .bind() is used to create a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. It's a powerful way to ensure that functions are executed in the desired context.
const boundLogThis = logThis.bind(obj);

// .call()  allows you to invoke a function with a specific this value and arguments, enhancing the flexibility and reusability of your code.
logThis.call()
boundLogThis();

//The primary use of .apply() is to set the this value explicitly and pass arguments as an array. This can be particularly useful when you have a variable number of arguments to pass to a function.


/*
const button = document.querySelector('button');

button.addEventListener('click', logThis);

//console.log(this);

const obj = {
    num:10,
    logThis 
}

obj.logThis();
*/ 

//
[1,2,3].forEach(function(arrNum) {
    console.log(this);
    console.log(arrNum);
}, {arrNum: 10});