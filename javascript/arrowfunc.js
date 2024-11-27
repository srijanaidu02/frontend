// function displayInfo()
// {
//     console.log("hi this is display function ");
// }
// displayInfo(); //function calling 


// arrow displayInfo=()=>
// {
//     console.log("hi this is arrow function");
// }
// displayInfo(); arrow function executes very faster than simple function or normal function 


// function with parameters ( operators)
// const displayInfo=(a,b)=>
// {
//     console.log("sum of two numbers is = "+ (a+b));
// }
// displayInfo(10,20);

// const displayInfo=(a,b=20)=>
//     {
//         console.log("sum of two numbers is = "+ (a+b));
//     }
//     displayInfo(10);

// REST OPERATORS 
// function add(x,y) 
// {
//     console.log("addition is ="+(x+y));
// }
// add(10,20,30,40,50,60);

// function rest(...args)
// {
//     let result = 0;
//     for ( let arg of args)
//     {
//         result = result + arg;
//     }
//     console.log("the final output is "+result);
// }
// rest(10,239,23,53,635,23);

//SPREAD OPERATOR
// const arr=["one","two","three"];
// const newarr=["four",...arr];
// console.log(newarr);

// synchronous
// console.log("this is the first line of the code ");

// const myFunction=()=>
// {
//     let sum = 0;
//     for(let i=1; i<= 1000; i++){
//         sum=sum + i;
//     }
//     console.log(sum);
// }
// myFunction();

// console.log("this is second line of the code ")

// asynchronous
// console.log("this is the first line of the code ");

// const myFunction=()=>
// {
//     let sum = 0;
//     for(let i=1; i<= 1000; i++){
//         sum=sum + i;
//     }
    
//     setTimeout(()=>{
//         console.log(sum);

//     },5000)

    
// }
// myFunction();

// console.log("this is second line of the code ")

//call back function
// function greet(name , callback){
//     console.log(name)
//     callback();
// }
// function welcome(){
//     console.log("this is call back function");
// }
// greet("srija",welcome);


//asynchronous
async function displayInfo()
{
    x=await 10 + 20;
    return x;

}
let result=displayInfo();
result.then((data)=>{
    console.log(data)
})
result.catch((error)=>{
    console.log(error)
})