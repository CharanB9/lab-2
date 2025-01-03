//var keyword
variable()//function hoisting
function variable(){
var a = 10;
console.log(a);
var b = 20;//variable redeclarationgh
console.log(b);
for(var i=0;i<10;i++){}
console.log(i);//i is accesable after for loop
var a = 10;
if(true){
    var b = 20;
    console.log(b);
}
console.log(b);//accessible throughout the function scope
a = 20;
console.log(a)//var allows declaration hoisting
var a;
}