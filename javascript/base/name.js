var arr = ['小红','小明','大军','阿黄'];
console.log('欢迎');
arr.sort();
for(let i = 0; i < arr.length; i++){
    if(i == arr.length - 1){
        console.log(arr[arr.length-1])
    }else{
        console.log(arr[i]+',');
    }
    
}
console.log('同学!');