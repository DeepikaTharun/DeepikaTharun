//operators
/*Types of Operators
1.Arthimethic Operators(additon+,subtraction-,multiplication*,division/,Modulus%,exponentatio**,increment++,decrement--)
2.Comparsion Opeators(=,<=,>=,!=,==,===,!==)
3. Logical(&&,||,!)
4.Assignment operators
5.Ternary Operators
=    "assign the values to a variable eg a=1" 
==   "comparing and checking the two values are equal or not"  
===  "checking the values is equal along with the datatypes" it is called as strict equal to 

// Type Coercion - Implicit conversion of one data type into other datatype 
// Type Conversion - Explicitly conversion of one data type into other datatype
*/

    let number1 = 10
    let number2 = 3

    // 1. Addition (+) - Addition or concatenation
    console.log(number1+number2)

    // 2. Substration (-)
    console.log(number1 - number2);

    // 3. Multiplication (*)
    console.log(number1 * number2);

    // 4. Division (/)
    console.log(number1 / number2); // 10/3 = 3.333333

    // 5. Modulus (%) - Remainder after the division
    console.log(number1 % number2); // 10 % 3 = 1

    // 6. Exponential (**) - Power
    console.log(number1 ** number2); // 10 ** 4 = 10*10*10*4

    // 7. Increment (++) - Increases the value of the variable by 1

    let num3 = 10

    // a. Pre-increment (++num3) - First the value of the variable will get increment 
    // and then the action will be performed

    console.log(++num3) // 1 +10 = 11
    console.log(num3); // 11
    

    // b. Post-increment (num3++) - First the action will be performed 
    // and then the value will be incremented.

    let num4 = 5
    console.log(num4++) // 5 // print - num4 - 5++ = 5+1=6
    console.log(num4)  // 6

    // 8. Decrement (--) - Decreses the value by 1

    // Pre-decrement (--varName) - First the value of the variable will get decremented 
    // and then the action will be performed

    let num5 = 10
    console.log(--num5) //9
    

    // Post-decrement (varName--) - First the action will be performed 
    // and then the value will be decremented.

    let num6 = 7
    console.log(num6--) // 7-- = 7-1 = 6
    console.log(num6) // 6

    // Loops - for , while, do-while

    console.log("*************************************")

   // 2. Comparison Operators - Used to comapare the two value and return the result
    // in the form of boolean (true/false)
    
         // 1. Equal to (==)
         // 2. Not Equal to (!=)
         // 3. Strict Equal to (===)
         // 4. Strict Not Equal to (!==)
         // 5. Greater than (>)
         // 6. Greter than or Equal (>=)
         // 7. Less than (<)
         // 8. Less than or Equal (<=)


         // What is diff between =, == and ===?
         // Type conversion and Type coercion?

         // 1. Equal to (==) - Checks if the two VALUES are same or not

         let num9 = 10
         let num10 = 10 // NaN
         

         console.log(num9 == num10) // 10 == 10

// Type Coercion - Implicit conversion of one data type into other datatype 
// Type Conversion - Explicitly conversion of one data type into other datatype

        // 2. Not Equal to (!=)
        console.log(num9 != num10);
        
        // 3. Strict Equal to (===) - Checks if the two VALUES along with the DATATYPES
        // of the variable are same or not

        console.log(num9 === num10);

        // 4. Strict not Equal to (!==) 
        console.log(num9 !== num10);

        // Try 5-8 as assignment

        console.log(num9 >num10);


console.log("*****************************************");

// 3. Logical Operation - Used to combine multiple consitions to get he final result. 
 // It will compare 2 expressions and return us the result in the form of boolean.

    // 1. AND (&&) - Both are conditions are true then only it will return us true
    // 2. OR (||) - Either of the condition is true - it will reuturn us true
    // 3. Logical NOT (!) - It will reverse the result from true to false and vice-versa


    // 1. AND (&&)

    // true && true - true
    // true && false - false
    // false && true - false
    // false && false - false

    console.log("AND (&&)", (10>6) && (10>5)) // true
    console.log("AND (&&)", (10>6) && (10>50)) // false
    console.log("AND (&&)", (10>60) && (100>50)) // false
    console.log("AND (&&)", (10>60) && (10>50)) // false
    

    // 1. OR (||)

    // true || true - true
    // true || false - true
    // false || true - true
    // false || false - false

    console.log("OR (||)", (10>6) || (10>5)) // true
    console.log("OR (||)", (10>6) || (10>50)) // true
    console.log("OR (||)", (10>60) || (100>50)) // true
    console.log("OR (||)", (10>60) || (10>50)) // false
         

  // NOT (!) - Reverse the result

  console.log(!(23> 12)) // !true - false


// 4. Assignment Operator (=) - Assign the value to a variable

let m = 10
  

let num=6
console.log(num++)
console.log(num)

let num1=2
console.log(--num1)
console.log(num1--)

let a=12
let b=123
console.log(a==b)

let c=5
let d=5
console.log(c<d)
console.log(c<=d)
console.log(c>d)
console.log(c>=d)
