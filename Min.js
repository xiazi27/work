//计算最小值min
export function Min(arr){
    let min = arr[0]
    for (let i = 0; i < arr.length;i++) {
         if(arr[i] < min){
            min = arr[i]
         }
    }
    return min
}