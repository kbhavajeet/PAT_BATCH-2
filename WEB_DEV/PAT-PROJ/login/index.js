// console.log("1st task");
// console.log("2nd task");
// console.log("3rd task");
// console.log("4th task");

// setTimeout(function(){},1000)
// console.log("1st task");
// setTimeout(function(
    
// ){console.log("2nd task");},5000)
// setTimeout(function(
    
//     ){console.log("3rd task")},3000)
// console.log("4th task");   

// const prm=new Promise(function(resolve,reject){
//     console.log("fetching data from database")
//     setTimeout(()=>{
//         resolve("got the data from database")
//         //reject("failed to get the data")
//     },3000)
// })
// prm.then(function(result){
//     console.log("in then method")
//     console.log(result)

// })
// prm.catch(function(err){
//     console.log("in catch method")
//     console.log(err)

// })

// function getUserData(){
//     const data=fetch("");
//     console.log(data);
//     data.then(function(resolve){
//         // console.log(res)
//         const result=resolve.json()
//         result.then(function(userData){
//             console.log(userData)

//         })
//     })
//     data.catch(function(err){
//         console.log(err)
//     })
// }

async function getUserData_v2(){
    const data=await fetch("");
    console.log(data);//returns response
    var result=await data.json();
    console.log(result);//returns object
};
getUserData_v2();