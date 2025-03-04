let a =0;
let b = +prompt("Mời bạn nhập 1 số bất kỳ");
if(b < 0 || isNaN(b)){
    console.log("du lieu nhap vao k hop le");
}else{
    for ( let i = 1; i <= b; i ++){
        if(i % 5 == 0){
            a += i + ", ";
        }
    }
    console.log(` số chia hết cho 5 từ 1 đến ${b} là: ${a}`);
}

