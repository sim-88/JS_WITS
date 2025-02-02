setTimeout(()=>{
console.log("Rohan is a hecker");

},3000)

console.log("Simar is a hacker");

fn=()=>{
    console.log('This is fn');
    
}

callback=(arg,fn)=>{
console.log(arg);
fn()
}
const loadScript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Simmi",fn);
    document.head.append(sc);    
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)