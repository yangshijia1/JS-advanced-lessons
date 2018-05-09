//原型继承:对象-对象的继承
//存在原型共享
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;//若此行写为subObj_First.x = 5;结果又是如何？
console.log(subObj_Second.x);//5


var superObj = {
    show:function(){console.log(this.x,this.y);}
};
var subObj_First = Object.create(superObj);
subObj_First.x = 1;
subObj_First.y = 1;
subObj_First.show();//1 1



var superObj = {
    x:3,
    y:4,
    show:function(){console.log(this.x,this.y);}
};
var subObj_First = Object.create(superObj);
subObj_First.show();//3 4



//模拟类 类继承的形式
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,001);
var s2 = new Student("www",21,002);


function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);//123 
// console.log(a.privateId);  
a.getId();//123 456


function Foo() {}
var f = new Foo();
console.log(f.constructor.name);//foo


function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);//Constr {name: "Mike"}
console.log(y instanceof Constr);//true

//没法解释  函数创建的函数
Function.__proto__ === Function.prototype;//true
