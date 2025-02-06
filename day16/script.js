// const obj={
//     name:"John",
//     greet:function(){
//         console.log(this.name); //Refers to obj 
//     }
// }
// obj.greet();
// function show(){
//     console.log(this);  //window or global object
// }
// show()
// const obj1={
//     name:"Simar",
//     greet:()=>{
//         console.log(this.name);     
//     }
// }
// obj1.greet()
// const obj={
//     name:"Alice",
//     greet:function(){
//         const inner=()=>{
//             console.log(this.name);
//         }
//         inner()
//     }
// }
// obj.greet()
// Call() Method
// The Call() Method calls the function directly 
// and sets this to the first argument passed to the call 
// method and if any other sequences of arguments preceding 
// the first argument are passed to the call method then
//  they are passed as an argument to the function.
// const newObj={
//     name:"Simar"
// }
// const newObj1={
//     name:"WITS",
//     greet:function(age:number){
//         console.log(`${this.name} has age ${age}`);
//     }
// }
// newObj1.greet.call(newObj,21)
// The Apply() Method calls the function directly 
// and sets this to the first argument passed to the apply 
// method and if any other arguments provided as an array
//  are passed to the call method then they are passed as 
//  an argument to the function.
// const nameObj={
//     name:"John"
// }
// const obj2={
//     name:"WITS",
//     greet:function(age){
//         console.log(`${this.name} has age ${age}`)
//     }
// }
// obj2.greet.apply(nameObj,[22])
// The Bind() Method creates a new function and when that 
// new function is called it set this keyword to the first 
// argument which is passed to the bind method, and if 
// any other sequences of arguments preceding the first 
// argument are passed to the bind method then they are 
// passed as an argument to the new function when the 
// new function is called.
var nameObj = {
    name: "Simar"
};
var newObj1 = {
    name: "WITS",
    greet: function (age) {
        console.log("".concat(this.name, " has age ").concat(age));
    }
};
var newFunc = newObj1.greet.bind(nameObj, 23);
newFunc();
