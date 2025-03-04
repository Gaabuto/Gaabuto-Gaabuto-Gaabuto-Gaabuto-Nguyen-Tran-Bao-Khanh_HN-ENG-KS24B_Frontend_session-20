let key =0;
let n = prompt("Mời bạn nhập số số fibonacci");
if(n < 0 || isNaN(n)){
    console.log("du lieu nhap vao k hop le");
}else{
let a = 1;
let b = 1;
for ( let i = 1; i <= n/2; i ++){
    console.log(a = a + b);
    console.log(b = a + b);  
}
if(n % 2 != 0){
    console.log(a = a + b);
}
}
