var x = "1";
console.log(++x); //2 
var x = "1";
console.log(x+1);//11


console.log(3===3);//true
console.log(3==="3");//false
console.log(3=="3");//true
console.log(3==new String(3));//true
console.log(3===new String(3));//false


var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);//false
console.log(obj1 == obj2);//false
console.log(obj1 === obj2);//false
console.log(obj1 == new String("xyz"));//false


var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);//false
console.log(obj1 !== obj2);//true
console.log(obj1 != obj2);//true
console.log(obj1 != new String("xyz"));//true


console.log(2 == 2);//true
console.log(new Number(2) == new Number(2));//false
console.log(2 == new Number(2));//true 


var obj1 = {x:2,y:[1],z:false};
var obj2 = {x:2,y:[1],z:new Boolean(true)};
console.log(obj1.x === obj2.x);//t
console.log(obj1.y === obj2.y);//f
console.log(obj1.z === obj2.z);//f
console.log(obj1.x == obj2.x);//t
console.log(obj1.y == obj2.y);//f
console.log(obj1.z == obj2.z);//f


var obj1 = {x:2,y:[1],z:false};
var obj2 = {x:2,y:[1],z:new Boolean(false)};
console.log(obj1.z ==obj2.z);//t


console.log(2>1&&4<5);//t
console.log(true&&(!2));//f
console.log(false&&("2" == 2));//f
console.log(false&&false);//f


console.log(2>1||4<5);//t
console.log(true||(!2));//t
console.log(false||("2" == 2));//t
console.log(false||false);//f



console.log(2&&4);//4
console.log(0&&4);//0
console.log({x:2}&&{name:"Jack"});//{name:"Jack"}
console.log(null&&"hello");//null
console.log({}&&"world");//world


var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
}
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10




