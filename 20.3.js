let a =0;
let b = prompt("Mời bạn nhập 1 số bất kỳ");
let len = b.length;
if(b < 0 || isNaN(b)){
    console.log("du lieu nhap vao k hop le");
}else{
    for( let i = 0; i < len/2; i++){
        if(b[i] !== b[len - 1 - i]){
            a = a + 1;
            break;
        }
    }
    if(a == 0){
        console.log("là số đối xứng");
    }else{
        console.log("không phải số đối xứng");
        
    }
}