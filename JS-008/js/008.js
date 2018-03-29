var a = new Array(5);
console.log(a);//length 5

var a = new Array("5");
console.log(a);//["5"]

console.log(typeof new Function());// function    函数对象
console.log(typeof new Array());	 //object   对象
console.log(typeof new Date());	 //object  对象

console.log(typeof new new Function());//object;

console.log(typeof new new new Function());//报错

//构造函数可以实体化出来对象


console.log(Function instanceof Function);//true 是对象
console.log(Array instanceof Function);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Array instanceof Object);//true
console.log(Function instanceof Object);//true
console.log(Math instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true   JSON表示文本互转
//实体化对象


function foo(x,y,z){}
console.log(foo.length);//3,实参数量


//prototype  构造函数的属性 ，指向对应的原型
var a = [];//{}_proto_:Array
var o = {};
o._proto_===Object.prototype;//true
var arr = {};
o.__proto__===Array.prototype;//true
Object.__proto__===Function.prototype;//true,两个下划线



function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//去function中找，找不到sayhi，在原型对应的属性中找到并调用
console.log(li.sex);//M

Man.prototype.isStrong = true;
console.log(li.isStrong);//true


var x = 45;
var obj = {
    x:23,
    test:function(){
        function foo(){
            console.log(this.x);
        }
        var fee = foo.bind(this);
        fee();//23
        foo();//45
    }
}
obj.test();


//高阶函数
z=2*(x+1)-3*y*y;
c=2*a*a-3*(b-1);
k= 2*(i+1)-3(j-1);


function foo(x,y,c1,c2){
    return 2*c1(x)-3*c2(y);
}
function f1(x){
    return x+1;
}
function f2(x){
    return x-1;
}
function f3(x){
    return x*x;
}
foo(1,1,f1,f3);//1
foo(1,1,f3,f2);//2
foo(1,1,f1,f2);//4


function pow(x){
    return x*x;
}
var arr = [1,2,3,4,5,6,7,8,9]
arr.map(pow);//[1, 4, 9, 16, 25, 36, 49, 64, 81]


//filter 数组过滤 ，返回为false的将被过滤掉
