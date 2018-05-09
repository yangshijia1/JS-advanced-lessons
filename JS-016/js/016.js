var a = 1;
function f1(){
    var b = 2;
    function f2(){
        console.log(a,b);
    }
    f2();
}
f1();//1,2  变量正常进行作用域传递



var a = 233,b = 433;
function hy (){
    this.a = 2333;
    delete this.b;
    this.c = 4555;
}
hy();
console.log(a,c);//2333 4555

//严格模式下this为undefined



var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {//移动到, 
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);//this绑定到当前对象，即point对象上(移动到)
console.log(point);//{x: 1, y: 1, moveTo: ƒ}


function Person(age){
    this.age = age;
    console.log("hy");
}
Person();//hy



var Person = function(name,age){
    this.name = name;
    this.age = age;
    this.showme = function(){
        console.log(this.name,this.age);
    }
}
var p1 = new Person("hy",22);
var p2 = new Person("sj",20);
p1.showme();//hy 22
p2.showme();//sj 20



objA = {name:"aa",x:1};
objB = {name:"bb",x:5};
function test(){
    console.log(this.name,this.x);
}
objA.fun = test;
objA.fun();//aa 1
objA.fun.call(objB);//bb 5



var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        //var that = this;
        function moveToX() {
            this.x = x;//this作为一般函数，不进行作用域传递，最终指向全局对象，没有改point
        }//由于嵌套，this指偏了
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了window上
        }
        moveToX();//moveToX.call(this);通过间接调用来解决
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//{x: 0, y: 0, moveTo: ƒ}


//软绑定
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);


//call apply
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了哪里？
        }
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX.call(this);//->this.moveToX()->point.MoveToX()
        moveToY();
    }
};
point.moveTo(2,2);console.log(point);//2,0


//使用function.prototype.bind 
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了哪里？
        }
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX.bind(point)();
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point);//{x: 2, y: 2, moveTo: ƒ}

//构造函数中的this同样存在函数嵌套缺陷
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:2,y:3}没有移动

//
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        var that = this;//此处that为实例化出来的p对象
        function moveX(x) {
            that.x+=x;//this改为that
        }
        function moveY(y) {
            that.y+=y;//this改为that
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:3,y:4}，移动了(1,1)





