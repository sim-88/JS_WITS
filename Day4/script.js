// const cars=["a","b","c","d"]

const newarr=[];
newarr.length=5;
newarr.push('1','2')
console.log(newarr)

const obj={};

obj.prop=[1,2,3,4,5]
console.log(obj);

const arr1=new Array(5); //5=size of array

const arr2=Array.of(9.3);
//if u want to create only 1 element
console.log(arr2);

const arr3=[];
arr3[9.3]="Oranges";
console.log(arr3);

//length 
const cats=[];
cats[30]=["Oranges"]
console.log(cats,cats.length);

//Iterating an Array
const colors=['red','green','blue'];
colors.forEach((color)=>{
    console.log(color);
    
})


console.log(colors.join(''));

console.log(colors.join('-'));

const myarr=["1","2","3"];
myarr.push("b");
console.log(myarr);

let c=["a","b","c","d","e"];
let d=c.slice(2,4);
console.log(d);

console.log(c.slice(-4,-1));


//Array Mutation in Splice replacing and removing elements
c.splice(3,1,"g");
console.log(c);

c.splice(2,1,"g","h","i")
console.log(c);

c.reverse();
console.log(c);

const numbers = [3, 2, 4, 1, 5];
// [...numbers] creates a shallow copy, so reverse() does not mutate the original
const reverted = [...numbers].reverse();
console.log(reverted);

console.log([1, , 3].reverse()); // [3, empty, 1]

let arr4=["a","b","c","d","e"]
arr4.splice(1,4);
console.log(arr4);


const arr5 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr5.flat());

const arr6=["wind","Rain","Fire","RAIN"];
arr6.sort()
console.log(arr6);


console.log(arr6.indexOf("Rain"));


//finding occurences of an element
// const indices=[];
// const arr7=["a","b","a","c","a","d"];
// const elem="a";
// //let indx=arr7.indexOf(elem);

// for(let i=0;i<arr7.length;i++){
//     if(arr7[i]==elem){
//         indices.push(i);
//     }
    
// }
// console.log(indices);

const indices = [];
const array = ["a", "b", "a", "c", "a", "a"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]







 

















