//utility types

interface Project{
    name:string,
    desc:string,
    budget:number
    invoice?:string
}



interface Project{
    clientId:string,
}


//all the properties become optional
let alpha1:Partial<Project>={

}

alpha1.desc="this is desc of aplha"
console.log(alpha1)
// function createproject(project:Project):void{
//     console.log(project);
// }

// const proj1:Project={
//     name:"Alpha",
//     desc:"this is regarding space.",
//     budget:45000
// }

// createproject(proj1)

