let a = 0;
let b = +prompt("Mời bạn nhập 1 số bất kỳ");
if(b < 0 || b / 1 == NaN){
    console.log("du lieu nhap vao k hop le");
}
for ( let i = 0; i <= b; i++){
    a += i;
}
console.log(a);

