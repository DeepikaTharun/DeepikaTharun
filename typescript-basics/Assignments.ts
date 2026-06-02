/*1.⁠ ⁠Find sum of first 25 number
2.⁠ ⁠Count digit in a number. Example - 12345 output - 5
3.⁠ ⁠Generate a multiplication table for 5, like 5 *1 =5, 5 *2 = 10,.....
4.⁠ ⁠Print the star pyramid:*/

let total = 0
for (let i=0;i<=25;i++){
    total = total + i ;
}
    console.log("The sum is:", total );

//2.⁠ ⁠Count digit in a number. Example - 12345 output - 5


//3.⁠ ⁠Generate a multiplication table for 5, like 5 *1 =5, 5 *2 = 10,.....
const table = 5;
const upto = 10;
for (let i=1; i<=upto; i++)
{
const answer = table * i ;
console.log("Multiplication table of 5:" , answer);
}

//4.⁠ ⁠Print the star pyramid:*/
const height = 5; // how many rows
for (let row = 1; row <= height; row++) {
  let line = "";
  for (let star = 1; star <= row; star++) {
    line = line + "*";
  }
  console.log(line);
}
