var a = [10,20,30,40];

var [...prem]=a;

a[3]= 45;

console.log(a)
console.log(prem)


let data1 =[10,45,"ram", "ritik"];
let[...data2]=data1
data1[2]="rohit"
console.log(data1);
console.log(data2);

var demo =[15,12,154,454,154];
var[a,b,...c]=demo;
console.log(a)
console.log(b)
console.log(c)

