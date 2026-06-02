//if statement
let text="Login"
if (text=="login")
{
    console.log("the text value is matching");
}
//if else statement
let role = "admin"
if (role == "normal")
{
    console.log("Admin user navigation");
}
else 
{
    console.log("Normal user navigation");
}
//if else if statement - it will validate multiple conditions.Depending on the result of the condition
// the specific block of code will be executed
let browser = "firefox"
 
if (browser == "chrome"){      
    console.log("chrome browser is launching")
}
else if (browser == "safari"){      
    console.log("safari browser is launching")
}
else if (browser == "firefox"){      
    console.log("firefox browser is launching")
}
else {      
    console.log("invalid broser")
}
// switch statement
let browserName="xyz"
switch(browserName)
{
    case "chrome":
        console.log("launch the chrome browser");
        break
    case "firefox":
        console.log("launch the firefox browser");
        break
    case "safari" :
        console.log("launch the safari browser");
        break
    case "edge" :
        console.log("launch the edge browser");
        break
    default:
         console.log("Invalid browser");
        break
}
//ternary statement
//inline
let age = 30
let result = (age>=18)? "you are elgibe for voting " :"you are not eligible for voting"
console.log(result);

// Assignment:
// Write a program to display the grade of a student:
// >90 - A
// >80 && <90- B
// >70 && <80 - C
// >50 && <70 -D
// <50 - Failed

let grade = 60
let results = (grade>=90)? "You are A grade holder" : "you are B grade holder"
console.log(results);

let grade1 = 30
 
if (grade1 >= 90){      
    console.log("You are an A grade holder")
}
else if (grade1 >=80 && grade1 <90){      
    console.log("You are a B grade holder")
}
else if (grade1 >=70 && grade1 <80){      
    console.log("You are a C grade holder")
}
else if (grade1 >=50 && grade1 <70){
    console.log("You are a D grade holder")
}
else {      
    console.log("Fail Student")
}
