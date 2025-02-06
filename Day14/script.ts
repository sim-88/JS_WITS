// function myAdd(x:number,y:number):number{
// return x+y;
// }

// const res=myAdd(4,5);
// console.log(res);


enum ROLE{
    "ADMIN"="admin",
    "USER"="user",
    "SUPERADMIN"="superadmin"
}

interface USER{
    name:string,
    id:string,
    email:string,
    role:ROLE,
    readonly isActive:boolean
}

const user1:USER={
    name:"Simar",
    id:"052cd",
    email:".com",
    role:ROLE.ADMIN,
    isActive:true
}
// readonly properties can be initialized when the object is first created.
// After initialization, readonly properties cannot be reassigned

console.log(user1);

//diff bw any and unknown

const data1:string="Hello";
const data2=data1 as unknown as string


//any no type checking, code is unsafe
let a:any;
a=10;
a="hi";
a={"name":"simar"}

console.log(a);

let num:number=3; //Can be freely assigned to and from any type without restrictions.
num=a;

let u:unknown;
u="2";
u=2;

// num=u; wrong
//Type 'unknown' is not assignable to type 'number'
//Suitable for external API data

if(typeof(u)==="number"){
    num=u       // ✅ Safe after type check
}