let a = +prompt("Mời bạn nhập 1 số bất kỳ");
let b = +prompt("Mời bạn nhập 1 số bất kỳ");
let c = 1;
if( isNaN(a) || isNaN(b)){
    console.log("du lieu nhap vao k hop le");
}else{
    for ( let i = 1; i <= b; i++){
        c *= a;
    }
    console.log(c);
    
}