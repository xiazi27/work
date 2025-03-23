// 计算百分位数
import { bubbleSort } from "./bubblesort.js";
export function Percentile(arr, percentile) {
    let sortedArr = bubbleSort(arr)
    let index = (percentile / 100) * (sortedArr.length - 1);
    if (index % 1 === 0) {
        return sortedArr[index];
    } else {
        const a = Math.floor(index);
        const b = Math.ceil(index);
        return (sortedArr[a] + sortedArr[b]) / 2;
    }
}
