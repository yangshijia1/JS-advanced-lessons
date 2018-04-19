var me = {
    age:233,
    name:"ysj",
    show:function(){
        console.log("i am"+this.name+"今年"+this.age);//+ 字符串拼接
    }
}
me.show();//i amysj今年233


Person = function(m){
    this.name = name;
}
var p = new Person("unknown");
p instanceof Person;//ƒ (m){
   // this.name = name;
//}


console.log(typeof Array);//function
console.log(typeof Math);//object
console.log(typeof Date);//function
console.log(typeof Function);//function


var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");//都是对象


String instanceof Object;//true
String instanceof Function;//true,构造函数也是对象
Math instanceof Function;//False
Math instanceof Object;//true


console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true
console.log(Boolean instanceof Function);//true
console.log(Boolean instanceof Object);//true
console.log(String instanceof Function);//true
console.log(String instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
console.log(Array instanceof Function);//t
console.log(Array instanceof Object);//t
console.log(Date instanceof Function);//t
console.log(Date instanceof Object);//t
console.log(Math instanceof Function);//f
console.log(Math instanceof Object);//t
console.log(JSON instanceof Function);//f
console.log(JSON instanceof Object);//t

console.log(Function instanceof Function);//t
console.log(Function instanceof Object);//t

console.log(new Function() instanceof Function);//true
console.log(new(new Function()) instanceof Function);//false
console.log(new(new Function()) instanceof Object);//true
/*构造器充当的是类的角色*/


var o = {
    _x:1.0,//下划线
    get x(){//访问器方法：
        return this._x;
    },
    set x(val){
        this._x = val;
    }
}//如果只有getter方法那么是只读属性，如果只有setter方法，则是一个只写属性，读取时返回undefined 
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2

var o = {
    x:1.0,//如果都写成x会怎样
    get x(){
        return this.x;//如果都写成x会怎样
    },
    set x(val){
        this.x = val;//如果都写成x会怎样
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x,o._x);//报错，有二义性


var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//1 1


var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);//23


var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};//创建自变量的方法


