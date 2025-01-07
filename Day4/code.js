// let string='convert-to_camel';
// let b=string.split("-");
// // let c=b.split("_");
// console.log(b);


// let r=string.split(/[-_]/)
// console.log(r);
const str = "convert-to_camel"
function toCamel(a){
    const newStr = a.replace("-",'_').split("_")
    const d = newStr.shift()
    console.log(d);
    console.log(newStr);
    
    
    const f = newStr.map(e=>e.slice(0,1).toUpperCase() + e.slice(1)).join("")
    console.log(f);
    
    const i = `${d}${f}`
    return i
}
console.log(toCamel(str))
