var arr1 = [1,2,3,"4"];
var arr2 = new Array(5);
console.log(arr2);//(5) [empty × 5]


var arr22 = [];
for(var i = 0;i<5;i++){
    document.onclick = function(){
        arr22[i] = i;
    }
}//异步执行


var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);//两个都变成了空对象


var a3 = [1,2,3];
var a4 = a3;
a4 = [];//指向的不是同一个空间
console.log(a3,a4);//a3是原来的，a4是空的


var i = 2,b = [];
b[i]=3;
b[i+1]="HY";
b[b[i]] = b[0];
console.log(b);//(4) [empty × 2, 3, undefined]


//以非负整数作为属性名时数字会自动维护其length属性，作为数组的元素而不是数组对象的属性
function f(){
    console.log(arguments);
}
f(1,2,3,"x");//arguments

//稀疏数组，包含从0开始的不连续索引的数组
//length值大于实际定义的元素的个数
var a3 = [,,];
console.log(a3.length);//2

var a2 = new Array(3);
console.log(a2.length);//3


//稀疏数组遍历不到

var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);//(5) [Array(5), Array(5), Array(5), Array(5), Array(5)]
//product:8

console.log(Array.isArray(arr1));//静态方法

function f(){
    console.log(Array.isArray(arguments));
}
f(1,2,3,"x");//false,公用的，属于类的方法


var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//结果是否是预计结果,如何解决
//(4) [-1, -20, 50, 7]
//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序
//(4) [-20, -1, 7, 50]

//如果想让arr2按第二个字母排序，怎么写？
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);// ["banana", "pear", "apple", "orange"]







