const arr1=[1,2,3,4,8]

const sumwithInitial=arr1.reduce((accumulator,currentValue)=>{return accumulator+currentValue},0);

console.log(sumwithInitial);


function getMax(a,b){
    return Math.max(a,b);
}

console.log([1,100].reduce(getMax,50));




const arr2=['a','b','c'];
for(const i of arr2){
    console.log(i);
    
}

const products=[
    {name:"sports car"},
    {name:"laptop"},
    {name:"phone"}
];

const prodWithPrice=products.map((product)=>{
 return {...product,price:100}
})
console.log(prodWithPrice);
 
const isBelow= (currVal)=>{return currVal<40;}
const arr3=[1,30,39,29,10,13];
console.log(arr3.every(isBelow));


//every
function isSubset(arr1,arr2){
    return arr2.every((elem)=>arr1.includes(elem));

}

console.log(isSubset([1,2,3,4,5,6,7,8,9],[5,7,6]));




