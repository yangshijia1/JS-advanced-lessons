var obj1 = {x:1};
var obj2 = Object.create(obj1);
obj2.y = 2;

var obj3 = function(){
    this.z = 3;
}
var obj4 = new obj3();
console.log(obj1,obj2,obj3);//{x: 1} {y: 2} ƒ (){this.z = 3;}



var objProto = {
    z:3,
    m:function(){}
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
for(var k in obj){
    console.log(k,obj[k]);//x 1 y 2 z 3 m ƒ (){}
}


Object.defineProperty(obj,"x",{enumerable:false});//defineProperty方法  参数值：对象，属性，特性配置
for(var k in obj){
    console.log(k,obj[k]);
}



var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike  
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike

/*改成ture后*/

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:true,
    configurable:true,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Lucy
delete person.name;
console.log(person.name);//undefined



var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}


//改变访问器属性特性 注意添加访问器和修改访问器特性的写法的区别
var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);//Lucy_hihi
obj2.name="jack";
console.log(obj2.name);//jack_haha_hihi


//属性特性描述符是一个用来查看对象属性的特性的对象
//该对象包含4个属性，对应4个特性，通过getOwnPropertyDescriptor方法获得
//参数：对象，要查看的属性
var obj = {x:1};
Object.defineProperty(obj,"y",{value:2,writable:false});
var xDes = Object.getOwnPropertyDescriptor(obj,"x");
var yDes = Object.getOwnPropertyDescriptor(obj,"y");
console.log(xDes,yDes);


