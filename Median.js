//计算中位数Median
import { bubbleSort } from "./bubblesort.js"
export function Median(arr) {
    let sortedArr=bubbleSort(arr)
    if(sortedArr.length % 2==0){
        return ( (sortedArr[sortedArr.length/2]+sortedArr[(sortedArr.length/2)-1])/2)
    }else{
       return (sortedArr[(sortedArr.length-1)/2])
    }
}