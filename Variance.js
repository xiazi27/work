//计算方差（Variance）
import { Mean } from "./Mean.js"
export function Variance(arr) {
    let mean = Mean(arr)
    let he = 0
    for (let i = 0;i < arr.length;i++){
        he += (arr[i] - mean) ** 2
    }
    return he / arr.length
}