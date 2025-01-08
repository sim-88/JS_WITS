const arr1=['atry5y5','b6u6u','cut6u6','d7i7i7i','ea'];

const b=arr1.filter((letter)=>[...letter].includes('a'))
console.log(b);


const arr=[{id:15},{id:-1},{id:0},{id:3},{id:12.2},{},{id:null},{id:NaN},{id:"undefined"}];

let invalidEntries=0;

function filterByID(item){
    if(Number.isFinite(item.id) && item.id!==0){
        return true;
    }
    invalidEntries++;
    return false;
}

const newarr=arr.filter(filterByID);

console.log("Filtered Array",newarr);

console.log("No. of invalid entries",invalidEntries);


//Searching in Array
function filterItems(arr,query){
    return arr.filter((e)=>e.toLowerCase().includes(query.toLowerCase()))
}



const arr2=[1,4,9,16];

const map1=arr2.map((x)=>x*2);
console.log(map1);


const arr3=[1,2,3,4];

// arr3.reduce((accumulator,currentValue)=>{

// })


const arr4=["Apple","Kiwi","dragonFruit","Guava"];

arr4.forEach((value,i,OGarr)=>{
    let newarr=OGarr.slice(i);
    console.log("Element",value,newarr);
    
})

// arr4.forEach((value,i,OGarr)=>{
//     let newarr=OGarr.splice(i,1);
//     console.log(newarr,OGarr);
    
// })
//splice overwrites the original array


console.log("Filter Method");

arr4.forEach((val,i,OGarr)=>{
    let arr5=arr4.filter((val,index)=>{
        return index!==i;
    })
    console.log(arr5);
    
})

console.log("Splice Method");

arr4.forEach((val,i,OGarr)=>{
    let arr5=arr4.toSpliced(i,1);
    console.log(arr5);
    
})