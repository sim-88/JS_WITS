// console.log("This is promises");


// let prom1=new Promise((res,rej)=>{
//     let a=Math.random()
//     if(a<0.5){
//         rej(`${a} is greater than 0.5`)
//     }
//     else{
//         setTimeout(()=>{
//             console.log('I am done');
//             res("Simmiii")
//         },3000)
//     }

// })


// prom1.then((a)=>{
// console.log(a);
// }).catch((err)=>{
//     console.log(err);

// })


// async function getData() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(4)
//         }, 3000)
//     })
// }

// console.log("Loading Modules");

// console.log("Do something else");

// console.log("load data");

// async function main() {
//         let data = await getData()
//         console.log("process data");
//         console.log("operations on data");
//         // getData.then((a)=>{
//         //     console.log(a);
            
//         // })
//         console.log(data);

// }

// main()
// getData().then((a) => {
    
//     // console.log(data);
// })


// using fetch

// async function getData(){
//     let data=await fetch("https://jsonplaceholder.typicode.com/todos/1").then((res)=>res.json()).then(data=>console.log(data))
// }
//  We use res.json() inside the then() method to parse the response.
//  Once the data is parsed, it is passed to the next .then() and logged.
// getData()