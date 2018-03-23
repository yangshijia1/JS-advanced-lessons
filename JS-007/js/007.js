var max = new Function("a","b","return a>b?a:b");
max(2,3);//3


var str = "return a<b?a:b";
var min = new Function("a","b",str);
min(2,3);//2


function foo(){
    console.log("foo");
}
foo === window.foo;//true


var x = 45;
var test = function (){
    console.log(this.x); 
}
var obj = {
    x:23
};
obj.test = test;
obj.test();//23
test();//45


var x = 45;
var obj = {
    x:23,
    test:function(){
        function foo(){
            console.log(this.x);
        }
        foo();
    }
};
obj.test();//45


objA = {name:"aa"};
objB = {name:"bb"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//aa
objA.foo.call(objB);//bb
objA.foo.apply(objB);//bb



var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("im"+this.name+"icanfly",m,n);
    }
};
var me = {
    name:"ABC"
};
bird.fly.apply(me,[7,8]);


function test() {
    console.log(arguments);
    console.log(test.arguments==arguments,arguments);
    console.log(arguments.length);
	console.log(typeof arguments);
	console.log(arguments instanceof Array);
	console.log(arguments instanceof Object);
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"