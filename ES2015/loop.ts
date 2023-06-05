//for(let i=1;i<=5;i++)
//{
//    setTimeout(function(){console.log(i);},1000);
//}

//var getRegValue=function(){
  //  return 10;
//}
//console.log(getRegValue());
//const getArrowValue = (m,bonus) => 10*m+bonus
//console.log(getArrowValue(5,50));
//console.log(typeof getArrowValue)

//var employee={
  //  id: 1,
    //greet:function()
    //{
        
    //    setTimeout(()=> {console.log(this.id)},1000);
    //}
//};
//employee.greet()

//let getValue = function(value=10,bonus=value*0.1){
  //  console.log(value+bonus)
//}
//getValue();
//getValue(20);
//getValue(30,50);
//getValue(undefined,30);
//let displaycolors=function(message , ...colors)
//{
  //console.log(message);
  //console.log(colors);
  //console.log(arguments.length);
  //for(let i in colors)
 // {
  //    console.log(colors[i]);
  //}
//}
//let message="List of Colors";
//displaycolors(message,"Red");
//displaycolors(message,"Red","Blue");
//displaycolors(message,"Red","Blue","Green");
//let firstname="Chandler";
//let lastname="Bing";
//let person={
//  firstname,
  //lastname
//}
//console.log(person.firstname);
//console.log(person.lastname);
//function createperson(firstname,lastname)
//{
  //let fullname=firstname+" "+lastname;
  //return{firstname,lastname,fullname};
//}
//let p=createperson("Ross","Geller");
//console.log(p.firstname);
//console.log(p.lastname);
//console.log(p.fullname);
//function createperson(firstname,lastname,age)
//{
//let fullname=firstname+" "+lastname;
//return{firstname,
 // lastname,
  //fullname,
  //isSenior()
  //{
   // return age>60;
  //}
//};
//}
//let p=createperson("Ross","Geller",32);
//console.log(p.firstname);
//console.log(p.lastname);
//console.log(p.fullname);
//console.log(p.isSenior());
//let employee=["Chandler","Bing","Male"];
//let [fname,...elements]=employee;
//console.log(fname);
//console.log(elements);
//console.log(gender);
//let employee={
//fname:"Chandler",
//lname:"Bing",
//gender:"Male"
//};
//let {
  //fname,
  //lname,
  //gender
//}=employee;
//console.log(fname);
//console.log(lname);
//console.log(gender);
//let user="Chandler";
//let greet=`Welcome to the Show ${user} "Bing"
//India Welcomes You
//We are glad to have you 
//and so on...............
//`;
//console.log(greet);
//let colors=['Red','Blue','Green'];
//for(let index in colors)
//{
//  console.log(colors[index]);
//}
//console.log("")
//for(let color of colors)/
//{
//  console.log(color)
//}
class person
{
  constructor(name)
  {
    console.log(name +" Person Constructor");
  }
  getID()
  {
    return 10;
  }
}
class employee extends person{
  constructor(name)
  {
    super(name);
    console.log(name+" Employee Constructor");
  }
}
let e=new employee("Chandler");
console.log(e.getID());