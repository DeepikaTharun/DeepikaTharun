//Arrays
let arr = [10]
console.log(typeof arr)
/*array is a dynamic in nature and in its size, also it is collection of data and can store different types data
stored in a ordered collection, meaning can also access the element from the array by using the position (index)
index starts with 0 in a array*/

 let array =[10,20,"java",true,null,34.9]
 console.log(array)
 console.log(array[0])
 console.log(array[6])

 //Declaration of array
//1.using array literal -[]
//2.using array constructor - new array()


//let arrayName :datatype[] = [value1,value2,...]
let arr1:(number|string|boolean)[] = [10,"java",true]
let Arr1 = [10,20,"java",true,null,undefined,34.90]
console.log(arr1)
console.log(Arr1)
console.log(arr1.length)
console.log(Arr1.length)

//Traditional for loop
for(let i=0;i<Arr1.length;i++){
    console.log(Arr1[i])
}
//for of loop

let arr7 = [10,20,30,40,50,"pink","orange","TS"]
for (let ele of arr7){
    console.log(ele)
}
//splice() slice() indexof() last 

console.log("*************Methods of array*************")
let array4 = [10,20,30,40]

for(let ele of array4){
    console.log(ele)
}
1.//push - adds the element at the end of the array.
let arr2 =[10,20,"apple","blue"]
//syntax
//arrayName.push(ele3,ele4)
arr2.push(30,"green")
console.log("push()",arr2);
2.//pop - removes the last element from the array
//syntax
//arrayName.pop()
arr2.pop("green")
console.log("pop()",arr2);
//what is difference btwn push and unshift
3.//unshift - add the element in the beginning of the array
arr2.unshift(100,"green")
console.log("unshift()",arr2);
4.//shift - removes the first element from the array
arr2.shift(100)
console.log("shift()",arr2);

//what is difference btw slice(),splice()
5.//slice(StartIndex?,EndIndex?)//Return the portion of an array from the startindex to endindex-1
//syntax
//aarayName.slice(startIndex,EndIndex(Exclusive())
//startindex - the position where you want to start the slice
//endindex - the position where you want to end the slice
console.log(arr2.slice(0,2))
console.log(arr2.slice(3,7))
//start index should be less than end index
6.//splice(StartIndex, Deletecount? , ele1,ele2,ele3)
//Adds/removes the elements at any position of the array
//StartIndex - this is the position where you will add or remove the element

let arr3 =[10,20,30,40,50,60]
arr3.splice(0,2,)
console.log("splice()",arr3);

//index of
//includes()
//join()
//toString()