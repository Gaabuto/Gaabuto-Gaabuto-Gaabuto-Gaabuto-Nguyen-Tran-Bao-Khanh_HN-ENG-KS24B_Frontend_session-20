let a =0;
let b = prompt("Mời bạn nhập 1 chuỗi bất kỳ");
let c = prompt("Mời bạn nhập ký tự cần tìm");
let len = b.length;
for ( let i = 0; i <= len; i ++ ){
    if (b[i] = c){
        a ++;
    }
}
if(a = 0){
    console.log("Không tồn tại từ cần tìm kiếm");
}else{
    console.log("Tồn tại từ cần tìm kiếm");   
}