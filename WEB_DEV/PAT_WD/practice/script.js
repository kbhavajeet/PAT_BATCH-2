//js conditional statements
/* 
if(condition){
    statements
}
else{
    statements
}
SWITCH_CASE

var day=1
switch(day){
    case 1:console.log("MONDAY");break;
    case 2:console.log("tuesday");break;
    case 'a':console.log("some");break;
    case 3:console.log("wednesday");break;
    default:console.log("MONDAY");break;
}



alert("got it!!")

var student={
    name:'john',
    place:'hyd',
    age:12,
    ph_no:6785790876,
    sub:['eng','math','phy']
};
console.log(student.name);
------------------------------------
looping statements;
1) for
2) while
3) do-while  atleast once to run
4) for-of
5) for-in

for(var i=0;i<10;i++) {
    console.log(i);
}
console.log("loop completed",i);
0
script.js:48
1
script.js:48
2
script.js:48
3
script.js:48
4
script.js:48
5
script.js:48
6
script.js:48
7
script.js:48
8
script.js:48
9
script.js:48
loop completed 10


if given let:
0
script.js:48
1
script.js:48
2
script.js:48
3
script.js:48
4
script.js:48
5
script.js:48
6
script.js:48
7
script.js:48
8
script.js:48
9
script.js:48
Uncaught ReferenceError ReferenceError: i is not defined

for-of example:

var arr=[10,20,"hello","world"]
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
for(var value of arr){
    console.log(value);
}

var student={
    name:"harshitha",
    age:21,
    roll:27,
    address:{
        city:"hyd",
        state:"telangana",
        pincode: 500056
    }
}
for(const key in student){
    if (key=="address"){
        for(const value in student[key]){
            console.log(value,student[key][value])
        }

    }
    else{
        console.log(key);
    }
    
}


var arr=[2,7,6,8,5,1];
var arr1=[]
for(var k of arr){
    if(k%2==0){
        console.log(k)
    }
};
for(var i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}
for(var k of arr){
    if(k%2==0){
        arr1.push(k);
    }
};
console.log(arr1);

var arr=[1,2,3,4,5,6,7,8,9,10]
var ans=arr.filter(function(value){
    return value%2==0
})
console.log(ans);

arr.map()
arr.filter()
arr.reduce()
*/
var arr=[1,2,3,4,5,6,7,8,9,10]
arr.map(function(element){
    console.log("printing the element",element)
})
var sum=arr.reduce(function(acc,element){
    return acc+element
})
console.log(sum)
