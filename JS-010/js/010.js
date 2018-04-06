var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    function bar() {
        var a = 500,
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();//500 20 200 600


var scope = "globle";
function checkscope(){
    var scope = "local";
    return function(){
        return scope;
    };
}
console.log(checkscope()());//local


var scope = "globle";
function checkscope(){
    var scope = "local";
    return new Function("return scope")
}
console.log(checkscope()());//globle;


(function(){
    if(true){
        userID = 233;
    }
}());//封装，不会提升，防止变量污染



