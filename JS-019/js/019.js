var arr1 = [2,5,8];
var arr2 = [1,7,9];
arr1.forEach(function (a) {
    console.log(a,this);
},arr2);
console.log(arr1);//[179]*3,[258]


var arr1 = [2,5,8];
var arr2 = [1,7,9];
var arr3 = [];
arr1.forEach(function (a) {
    //console.log(a,this);
    arr3[i]=a>arr2[i]?a:arr2[i];
},arr2);
console.log(arr);//(3)[2,6,8]

//Date
console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算） 静态方法
console.log((new Date()).getTime());//得到当前时间  
//最后得到毫秒值，从1970年00h00m00s开始计时

console.log(Date.UTC(2018,5,7));//将给定的日期转换成毫秒,解释为UTC 协调世界时间

var today = new Date();
today.setMonth(6);
console.log(today);//得到的是比这个数大一的月份
console.log(today.getDay());//6


console.log(Date.parse("2010-01-01 11:12:23.111"));
console.log(new Date("2010-01-01 11:12:23.111"));
console.log(new Date().toISOString());

console.log(Date.parse("2010-01-01T11:12:23.111Z"));
console.log(new Date("2010-01-01T11:12:23.111Z"));
console.log(new Date().toISOString());//写Z和不写的区别：时区


var today = new Date();
today.getTime();
today+3600*24;//"Mon May 07 2018 15:02:03 GMT+0800 (中国标准时间)86400"

var today = new Date();
var newDate = new Date(today.getTime()+1000*3600*24*50);
console.log(newDate);//Tue Jun 26 2018 15:06:55 GMT+0800 (中国标准时间)

//可以转成数字类型，可以进行相应的运算