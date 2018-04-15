true && function(a,b){
    return a>b?a:b;
}(5,9);//9


({})&& function(a,b){  //0 && function(a,b){
    return a>b?a:b;
}(5,9);//遵从短路原则，如果是false返回原始左操作数


!function(x,y){
    return x==y?true:false;
}("5",5)//false


!function(){
    return 2;
}//不加；会报错
!function (){
    return 0;
}


function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//都是10


