//正则：正则表达式是对字符串和特殊字符操作的一种逻辑公式，是对字符串执行模式匹配的工具
//正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本
//JS中正则表达式是一个描述字符模式的对象，可以通过字面量、RegExp构造器来生成
var str = "a fAt bat,a faT cat"
var reg2 = new RegExp(/fat/,"gi");//g,i,是否关注大小写
str.replace(reg2,"XX");

var str = "xx-hy-xx";
var a = str.split("-");
console.log(a);//["xx","hy","xx"]

var str = "xx-h*y-xx";
var a = str.split(/[-*]/gi);
console.log(a);//["xx", "h", "y", "xx"]

"hyhyhyhyhy".replace("h","y");//
//数字\d、\D、  字符\w、\W、 空格\s、\S、  \b、\B
"a4d6".replace("/\d/gi","X");//"aXdX";
"a4d6".replace("/\D/gi","X");//"X4X6";
"a4d6".replace("/\w/gi","X");//"XXXX";
"a4d6".replace("/\W/gi","X");//"a4d6";
"a4 d6".replace("/\s/gi","X");//"a4d6";
"a4d6".replace("/\S/gi","X");//"a4d6";

//匹配一个非单词边界 \B 他匹配一个前后字符都是相同类型的位置：都是单词或者都不是单词。
//一个字符串的开始和结尾都被认为是非单词。
console.log(/oo\B/.test("moon"));
console.log(/oon\B/.test("moon"));
console.log(/oo\B/.test("moon"));
console.log(/\Boo\B/.test("moon"));

console.log("moon".match(/oo\B/));//["oo", index: 1, input: "moon"]
console.log("moonoonxoo".match(/oo\B/));//["oo", index: 1, input: "moonoonxoo"]
console.log("moon".match(/oon\B/));//null
console.log("moo".match(/\Boo\B/));//null

"noonday".replace(/\Boo/,"xx");//"nxxnday"
"noonday".search(/\Boo/);//1

var str = "test22314234244dgfqeqe232qe13ed";
var newStr = str.search(/\dqe/);//replace
console.log(newStr);//24
str.replace(/\dqe/,11223344);
console.log(str);//test22314234244dgfqeqe232qe13ed


//匹配一个非单词边界  /\B../匹配"noonday"中得'oo', 而/y\B./匹配"possibly yesterday"中得’ye‘
console.log("noonday".match(/\B../));//["oo", index: 1, input: "noonday", groups: undefined]
console.log(/\B../.test("noonday"));//. 代表任何一个字符   true

//使用小括号来进行分组 ，如：/(Name){3}/g
"abcdefghijk".replace(/abcde|fghijk/g,"X");
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");

//反向引用
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");

//String.prototype.search 注意search忽略 全局g
console.log("a1b2c3d4".search(/1/));//返回index 1
console.log("a1b2c3d4".search(/f/));//返回index -1 没找到
console.log("a1b2c3d4".search(/\d/g));//返回index 1 忽略全局
console.log("a1b2c3d4".search(/\d\w/g));//返回index 1 忽略全局



