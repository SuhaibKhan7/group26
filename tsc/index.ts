





//functions

function abc():number|string
{
  return 10;
}
abc()

//arrays

const rollnumber:(string|number)[]=[1,"heelo"]

//objects
// const Person1:{
//   _id:string,
//   name:string,
//   age:number,
//   gender:string
// }={
//   _id:"123",
//   name:"John",
//   age:20,
//   gender:"male"
// }

// const Person2: {
//   _id: string;
//   name: string;
//   age: number;
//   gender: string;
// } = {
//   _id: "123",
//   name: "John",
//   age: 20,
//   gender: "male",
// };

//types
type Person = {
  _id: string;
  name: string;
  age: number;
  gender: string;
  getdetails(): string;
  //or
 // getdetails:()=>string
};
const person1:Person= {
  _id: "123",
  name: "John",
  age: 20,
  gender: "male",
  getdetails(): string {
    return "this is person 1";
  },
};
function getDetails(person: Person) {
  console.log(person._id);
  console.log(person.name);
  console.log(person.age);
  console.log(person.gender);
  console.log(person.getdetails());
}
getDetails(person1);