/* 1. let */
let a = 10;
var b = 1;
console.log(a+10);
console.log(b);

/* 2.const */
const  z = 5;
console.log(z+2);

/*3.starting methods 
 i.startsWith
 ii.endsWith
 iii.includes
 iv.repeat */

 let name = new String("G srija naidu");
 console.log(name.toUpperCase());
 console.log(name.startsWith("G"));
 console.log(name.endsWith("naidu"));
 console.log(name.includes("srija"));
 console.log(name.repeat(2));

 /*4. Template String*/

 /*5. class*/
 class Employee
{
    id=564;
    ename="srija naidu";
    displayInfo()
    {
        console.log(this.id+" "+this.ename);
    }
}
let emp=new Employee();
emp.displayInfo();

/* 6. each loop */
x=[10,20,30,40];
for(let i of x)
{
    console.log(i);
}
