//正则：正则表达式是对字符串和特殊字符操作的一种逻辑公式，是对字符串执行模式匹配的工具
//正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本
//JS中正则表达式是一个描述字符模式的对象，可以通过字面量、RegExp构造器来生成
var str = "a fAt bat,a faT cat"
var reg2 = new RegExp(/fat/,"gi");//g,i,是否关注大小写
str.replace(reg2,"XX");

