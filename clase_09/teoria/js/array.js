let arr = ["aaa", "bbb", "ccc", "ddd"];

//console.log(arr[0] + " " + arr[1] + " " + arr[2]);
let tt = "";

arr.forEach(function(valor, index){
    //tt = tt + valor; 
    tt += valor + " ";  
    console.log(tt);
});
console.log(tt);
