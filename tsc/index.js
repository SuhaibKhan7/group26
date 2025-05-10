"use strict";
const myGroup = 26;
const details1 = {
    id: "blabal",
    name: "john",
    email: "suhaib@gmail.com",
    age: 20,
    getDetails: (title) => {
        return `welcome ${title} ${details1.name}`;
    },
};
const details2 = {
    id: "blabal",
    name: "suhaib",
    email: "suhaib@gmail.com",
    age: 20,
    getDetails: (title) => {
        return `welcome ${title} ${details2.name}`;
    },
};
const showObject = (det) => {
    console.log(det.age);
};
showObject(details1);
console.log(details1.getDetails("Mr"));
// type User={
//   readonly _id:string,
//   Uname:string
//   address?:string
// }
// const U:User={_id:"33",Uname:"suhaib"}
// function createUser({_id,Uname}:User){
// console.log(_id,Uname)
// }
// createUser(U);
// //Array
// const Students:number[]=[]
// Students.push(1)
// const marks:Array<number>=[]
// //tuple
// const User:(string|number)[]=[1,"suhaib"]
// //tuple declare
// let TUser:[number,string,boolean]
// TUser=[1,"abc",true]
// //Enums
// enum weakned{
//   Monday="holiday",
//   Tuesday=1,
//   wednesday
// }
// const day=weakned.Monday
// console.log(day)
// //interface
// interface Signup{
//  readonly _id:number,
//   email:string,
//   password:string
//   getDetails:()=>string
//   //or
//   //getmessage():string
// }
// interface Account extends Signup{
//   accountno:number
// }
// const user1:Account={_id:383,email:"abc",password:"234",accountno:3823,
//   getDetails:()=>{
//     return "Singup successfull"
//   }
// }
// // const printObject = (obj: typeof details) => {
// //   console.log(obj.id);
// // };
// // printObject(details);
