// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// Create a Map

// Passing an Array to new Map()

const fruits1=new Map([
    ["apples",500],["bananas",300],["oranges",200]
]);
console.log(fruits1);

const fruits2 = new Map();

//usecase of maps:store metadata, function description
function addition(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

const functionDescriptinMap=new Map();

functionDescriptinMap.set(addition,"Addition function");
functionDescriptinMap.set(sub,"Subtraction function");

// keys() function 
// The keys() method of Map instances returns a 
// new map iterator object that contains the keys for each element in this map in insertion order.


const iterator=functionDescriptinMap.keys();
console.log(iterator.next().value);
console.log(iterator.next().value);

// Set Map Values
fruits2.set("apples", 500);
fruits2.set("kiwi", 300);
fruits2.set("bananas", 200);

console.log(fruits2);

console.log(fruits2.entries());

//The entries() method of Map instances returns a new map iterator 
// object that contains the [key, value] pairs for each element in this map in insertion order.
const iterator1=fruits2.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);


fruits2.forEach((value,key,map)=>{
    console.log(`map ${key}=${value}`);
    
})



// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// The values can be of any type, primitive values or objects.


const letters1=new Set(["a","b","c"])

// Create a Set
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);

// If you add equal elements, only the first will be saved:

// entries()	Returns an Iterator with the [value,value] pairs from a Set

const myIterator=letters.entries();

for(const letter of myIterator){
    console.log(letter);
    
}

// The delete() method removes a specified value from a set.

letters.delete("c")
console.log(letters);


//garbage collection

// A WeakMap is similar to a Map, but the keys are weakly held. 
// This means that if there are no other references to the key object, it can be garbage-collected.

let weakmap=new WeakMap();
let obj={};
weakmap.set(obj,37);

console.log(weakmap.get(obj));

// Remove reference to obj1
obj1 = null;  // obj1 can now be garbage-collected

// Since obj1 is no longer referenced, its entry in the weakMap is automatically removed
// weakMap.get(obj1) would return undefined as the key is no longer available