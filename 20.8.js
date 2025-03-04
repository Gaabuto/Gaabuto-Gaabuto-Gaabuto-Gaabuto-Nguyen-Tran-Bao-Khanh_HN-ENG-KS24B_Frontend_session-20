let a =0;
let b = +prompt("Mời bạn nhập số nguyên tố sẽ hiển thị");
if(b < 0 || isNaN(b)){
    console.log("du lieu nhap vao k hop le");
}else{
    for( let i = 0; i <= b; i ++){
        for ( let j = 0; j <= b; j ++){
            if(b % j == 0){
                a ++;
            }
        }
        if(a == 2){
            console.log(b + ", ");
        }
    }
}