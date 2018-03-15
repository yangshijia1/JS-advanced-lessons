var arr = [1,2,3,2,3,4,7,1,5,8];
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            for(var k=j+1;k<arr.length;k++)
            arr[k-1]=arr[k];
            arr.length--;
        }
    }
}
for(var i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
       var t = arr[i+1];
       arr[i+1]=arr [i];
       arr[i]=t;
    }
}
for(var m=0;m<arr.length;m++){
    console.log(arr[m]);
}