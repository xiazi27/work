// 计算四分位数
import { bubbleSort } from "./bubblesort.js";
import { Median } from "./Median.js";
export function Quartile(arr) {
    let sortedArr = bubbleSort(arr); 
    let Q2 = Median(sortedArr);
    let mid = Math.floor(sortedArr.length / 2);
    let qian = sortedArr.slice(0, mid); 
    let hou
    if(sortedArr.length % 2 === 0){
        hou = sortedArr.slice(mid)
    } else{
        hou = sortedArr.slice(mid + 1);
      } 
    let Q1 = Median(qian);
    let Q3 = Median(hou);
    return {Q1,Q2,Q3};
}