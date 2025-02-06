// function myAdd(x:number,y:number):number{
// return x+y;
// }
// const res=myAdd(4,5);
// console.log(res);
var ROLE;
(function (ROLE) {
    ROLE["ADMIN"] = "admin";
    ROLE["USER"] = "user";
    ROLE["SUPERADMIN"] = "superadmin";
})(ROLE || (ROLE = {}));
var user1 = {
    name: "Simar",
    id: "052cd",
    email: ".com",
    role: ROLE.ADMIN,
    isActive: true
};
// readonly properties can be initialized when the object is first created.
// After initialization, readonly properties cannot be reassigned
console.log(user1);
//diff bw any and unknown
var data1 = "Hello";
var data2 = data1;
//any no type checking, code is unsafe
var a;
a = 10;
a = "hi";
a = { "name": "simar" };
console.log(a);
var num = 3; //Can be freely assigned to and from any type without restrictions.
num = a;
var u;
u = "2";
u = 2;
// num=u; wrong
//Type 'unknown' is not assignable to type 'number'
//Suitable for external API data
if (typeof (u) === "number") {
    num = u; // ✅ Safe after type check
}
