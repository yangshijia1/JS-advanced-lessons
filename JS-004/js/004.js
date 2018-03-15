function foo(){
    //var a,b = 3;
    var a = 3;
    b=3;
}
foo();
console.log("b:",b);
console.log("a:",a);


//if(false){}
if(true){
    var a = 2;
}
console.log("输出:"+a);



for(var i = 0;i<5;i++){
    console.log("in for",i);
}//0 1 2 3 4
console.log("out of for ",i);//不报错   5



"use strict"//全局使用
function foo() {
    "use strict"//函数内部使用
}


//'use strict'  baocuo
function  sloppyFunc() {
    'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//baocuo


function foo(){
    //"use strict"  undefined
    console.log(this);
}
foo();//this 指向全局变量  true

//'use strict'
function isstrictmode(){
    return this==undefined?true:false;
}
function isstrictmode()


function f(a){
    "use strict";
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);
console.log(pair[0]);//42
console.log(pair[1]);//17



var i = 65;
switch(new Boolean(true)){
    case i>=60:
        console.log('及格');
        break;
    case i<60;
        console.log('不及格');
        break;
    defaulet:
       console.log('defaulet');
}//default


var i = 65;
switch(new Boolean(true)){
    case (new Boolean(i>=60)
        onsole.log('及格');
        break;
    case (new Boolean(i<60)
        console.log('不及格');
        break;
    defaulet:
       console.log('defaulet');
}//default


// var j = 23;   111
// var j = "23";     222
// var j = new String("23");   333
var j = new Number(23);
switch (j){
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}//default


var year = 2017,
    month = 5,
    date = 20,
    sum = 0;
switch(month-1){
    case 11:
        sum += 30;
    case 10:
        sum += 31;
    case 9:
        sum += 30;
    case 8:
        sum += 31;
    case 7:
        sum += 31;
    case 6:
        sum += 30;
    case 5:
        sum += 31;
    case 4:
        sum += 30;
    case 3:
        sum += 31;
    case 2:
        sum += year%4==0&&year%100!=0||year%400==0?29:28;
    case 1:
        sum += 31;
    default:
        sum += date;
}
console.log(sum);//140

