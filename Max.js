//计算最大值Max
 export function Max(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length;i++) {
         if(arr[i] >= max){
            max = arr[i]
         }
    }
    return max
}