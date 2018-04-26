/*生成对象三种方式：直接生成，Object静态方法，构造函数  */
var obj1 = {x:1};
var obj2 = Object.create(obj1);
obj2.y = 2;

var Obj3 = function(){
}
var Obj3 = new Obj3;


function Person(age,name){
    this.age = age;
    this.name = name;
}
Person.prototype.sayhi = function(){
    console.log("hi "+this.name);
}
var p1 = new Person(20,"hy");
p1.sayhi();//hi hy



var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);//{y:2,x:1}
console.log(obj2.hasOwnProperty("x"));//true
for(var k in obj2){
    console.log(k,obj2[k]);
}//y,2



var a = {};//空对象
a.__proto__;
a.__proto__ === Object.prototype;//true
var b = new Object();
b.__proto__ === Object.prototype;//true



var proobj = {
    z:3
};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x);
console.log(obj.y);
console.log(obj.z);
console.log("z" in obj);
console.log(obj.hasOwnProperty("z"));

obj.z = 5;
console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);
obj.z = 8;
console.log(obj.z);
delete obj.z;
console.log(obj.z);



function Person(){
    this.name = "hy";
    console.log("hi");
}
var p = new Person();
console.log(p);
//new认为是一个构造函数，充当类的角色，但是没有类
//一切都是对象


function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayhi = function(){//方法可以共享，将共性的东西提取出来可以节省内存
    console.log(this.name,this.age);
}
var p = new Person("hy",22);
p.sayhi();//hy 22
//验证原型：
p.__proto__ === Person.prototype;//true
Person.__proto__ === Function.prototype;//true,是一个函数，原型指向functionprototype
Function.__proto__ === Object.prototype;
Object.__proto__//NULL



var arr = new Array();
arr.__proto__ === Array.prototype;//true
Array.__proto__ === Object.prototype;//true

//实例原型--构造函数：constructor

//删除原型上的属性：
delete obj.__proto__.z;//delete obj.prototype.z;
console.log(obj.z);


