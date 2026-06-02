// Functions - It is a set of instruction that performs a specific task.

function login(email:string, password:string){
    // fill the username
    // fill the password
    // click on the login button
}



// 100 - login(email, password)

// 100 test cases - 300 lines of code - 195 

// Duplication - Solve the problem of duplication
// Maintenance - 100 Test cases to fix the issue - 99 steps
// Reusability - We can reuse the code whenever we want


// 1. Named function - Function declaration - If you want to reuse the function multiple time
// 2. Anonymous function - Function expression
// 3. Arrow function - ES6(2015) - Lambda function
// 4. Constructor function - Class


// 1. Named function - Function declaration - A function which will be declared 
// along with the name is known as function declaration.

// Syntax:
/*
function functionName(parameters) // defining the function
{
    // block of code to be executed
    return
}

functionName(arguments) // Calling the function


TS:

function functionName(parameters:datatype): returnType(Optional) // defining the function
{
    // block of code to be executed
    return
    // void - no return type
}


*/

// reutrn - para

// 1. Non-parametrised and non-returning function

function greet(){
    console.log("Hello, Welcome to TypeScript")
}

greet()

// 2. Non-parametrised and returning function

function greetings()
{
    return "Welcome to TypeScript" // return keyword should be the last statement of the function   
}

let result = greetings()
console.log(result);

// console.log(greetings());


function print(){
    console.log(result + " PW");
}

print()

// 3. Parametrised and non-returning function


function add(a:number, b:number){
    console.log(a+b)
}

add(10,30)
add(50,50)
add(90,34545)

// 4. Parametrised and returning function

function addition(a:number, b:number){ // a, b - parameters
    return a+b
}


let sum = addition(50,50) // 50, 50 - arguments
console.log(addition(1000,30000))

let sum1 = addition(sum,200)
console.log("Line # 102: "+sum1)

// What is parameter and argument?
// Parameter - It is a variable in the declaration of function. 
// It is used to receive the value when the function is called. 

// Argument - It is a value that is passed to the function when it is called. 


// let i = Function


// 2. Anonymous function - Function Expression - A function which will not have any name.
// A function which is declared without any name that function will be stored inside a varaible
// The variable where we stored the function becomes the name of the function


// Call back function - A function which will be utilised as a paramter of another function
// is known as call back function.

/*
function adds(fun:Function){
    fun()

}

adds(function aa(){
    console.log("This is a call back function"); 
})

*/


// Syntax:
/*

let functionName = function(param:datatype):returntype{
   // code to be executed
   return
}

functionName(argument)


*/

let message = function(name:string, age:number){
    console.log(`Your name is ${name} and age is ${age}`);  
}

message("Rahul", 25)
message("John", 35)


// 3. Arrow Function - Function Expression (=>) - Lambda Function - ES 6 - 2015

// 1. This is also a part of anonymous function and will not have any name
// 2. This function will be declared by using (=>) arrow symbol after the paranthesis
// 3. Arrow function use to shorten the number of lines of code
// 4. If there is only one line of the code inside the function then we can skip the curly
// braces inside the arrow function.

// Syntax:

/*

let variable = (param:datatype)=>{
  // code 
}

variable()

*/

let message1 = 
(name:string, age:number)=> console.log(`Your name is ${name} and age is ${age}`)  


message1("Joe",28)


// Default parameter and Optional parameter


function sum2(a:number=100, b:number=50){
    console.log(a+b); 
}

sum2()
sum2(10,49)

// Default Parameter - A parameter which has a default value

// Method overloading is a process where you can declare the same method name with different parameter


// Optional Paramter (p?) -  A parameter which may or may not be provided with the value during
// the function call

function display(name: string, age?:number){
    console.log(name, age); 
}
display("Aarushi")
display("Adarsh", 5)


// Assignment - Complete the display function by writing the logic to print only
// name if age parameter has not given any value and print both name and age 
// if age value has also been given at the time calling the function.
function display1(name: string, age?: number) {
    console.log(age === undefined ? name : `${name} ${age}`);
}