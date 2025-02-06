// // A Map holds key-value pairs where the keys can be any datatype.

// // A Map remembers the original insertion order of the keys.

// // Create a Map

// // Passing an Array to new Map()

// const fruits1=new Map([
//     ["apples",500],["bananas",300],["oranges",200]
// ]);
// console.log(fruits1);

// const fruits2 = new Map();

// //usecase of maps:store metadata, function description
// function addition(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

// const functionDescriptinMap=new Map();

// functionDescriptinMap.set(addition,"Addition function");
// functionDescriptinMap.set(sub,"Subtraction function");

// // keys() function 
// // The keys() method of Map instances returns a 
// // new map iterator object that contains the keys for each element in this map in insertion order.


// const iterator=functionDescriptinMap.keys();
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// // Set Map Values
// fruits2.set("apples", 500);
// fruits2.set("kiwi", 300);
// fruits2.set("bananas", 200);

// console.log(fruits2);

// console.log(fruits2.entries());

// //The entries() method of Map instances returns a new map iterator 
// // object that contains the [key, value] pairs for each element in this map in insertion order.
// const iterator1=fruits2.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);


// fruits2.forEach((value,key,map)=>{
//     console.log(`map ${key}=${value}`);
    
// })



// // A JavaScript Set is a collection of unique values.

// // Each value can only occur once in a Set.

// // The values can be of any type, primitive values or objects.


// const letters1=new Set(["a","b","c"])

// // Create a Set
// const letters = new Set();

// letters.add("a");
// letters.add("b");
// letters.add("c");

// console.log(letters);

// // If you add equal elements, only the first will be saved:

// // entries()	Returns an Iterator with the [value,value] pairs from a Set

// const myIterator=letters.entries();

// for(const letter of myIterator){
//     console.log(letter);
    
// }

// // The delete() method removes a specified value from a set.

// letters.delete("c")
// console.log(letters);


// //garbage collection

// // A WeakMap is similar to a Map, but the keys are weakly held. 
// // This means that if there are no other references to the key object, it can be garbage-collected.

// let weakmap=new WeakMap();
// let obj={};
// weakmap.set(obj,37);

// console.log(weakmap.get(obj));

// // Remove reference to obj1
// obj1 = null;  // obj1 can now be garbage-collected

// // Since obj1 is no longer referenced, its entry in the weakMap is automatically removed
// // weakMap.get(obj1) would return undefined as the key is no longer available

// // A shallow copy of an object is a copy whose properties share the same references 
// // (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the 
// // source or the copy, you may also cause the other object to change too.


// const List=["noodles",{"list":["eggs","flour","water"]}];
// const ListCopy=Array.from(List);

// ListCopy[1].list=["rice flour","water"]; //copy changes,list also changes
// console.log(List);

// const user={
//     "name":"WITS",
//     "place":"Kharar",
// }

// const user2=user;  //shallow copy directly referenced

// user2.name="Wits innovation";
// console.log(user);


// //Shallow Copy in Arrays

// let student="Shubh";
// let student2=student;

// student2="simar"

// console.log("student",student);
// console.log("student2",student2);  //Deep copy in Strings


// // A deep copy of an object is a copy whose properties do not share the same references (
// //     point to the same underlying values) as those of the source object from which the copy 
// // was made. As a result, when you change either the source or the copy, you can be assured 
// // you're not causing the other object to change too.

// const List2=["noodles",{list:["eggs","flour","water"]}]
// const ListDeepcopy=JSON.parse(JSON.stringify(List2));

// ListDeepcopy[1].list=["rice2","water"];

// console.log("List2",List2);
// console.log("deep copy list",ListDeepcopy);



// //2nd method
// //structuredClone
// const newuser={
//     "name":"Simarpreet",
//     "assets":"laptop,mouse,monitor"
// }

// const newuser2=structuredClone(newuser);
// newuser.name="SimarpreetKaur"
// console.log("newuser: ",newuser);
// console.log("newuser2: ",newuser2);



// //3rd method
// //Spread Operator
// const user1={
//     "name":"WITS",
//     "place":"Kharar"
// };

// const user3={...user1}
// user3.name="abc";

// console.log("user1",user1);
// console.log("user3",user3);


const fruits=new Map([
    ["apples",4],
    ["bananas",5],
    ["cherries",3]
])



fruits.set("kiwi",5)

// fruits.forEach((val,key)=>{
//     console.log(key);
    
// })

// console.log(fruits.size);

// console.log(fruits.has(fruits.get("kiwi")));

// for(let x of fruits.entries()){
//     console.log(x);
    
// }


const letters=new Set(['a','b','c','a'])


letters.add('d')
console.log(letters);

letters.forEach((val,val2)=>{
    console.log(val+val2);
    
})
