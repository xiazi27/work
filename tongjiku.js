import { Max } from "./Max.js"
import { Min } from "./Min.js";
import { Mean } from "./Mean.js";
import { Median } from "./Median.js";
import { Quartile } from "./Quartile.js";
import { StandardDeviation } from "./StandardDeviation.js";
import { Variance } from "./Variance.js";
import { Percentile } from "./Percentile.js";
let myArray = [1 ,2 ,3 ,4 ,5]
console.log("最大值为:",Max(myArray));
console.log("最小值为:",Min(myArray));
console.log("平均数为:",Mean(myArray));
console.log("中位数为:",Median(myArray));
console.log("标准差为:",StandardDeviation(myArray));
console.log("方差为:",Variance(myArray));
const quartile = Quartile(myArray);
console.log("上四分位数:", quartile.Q1);
console.log("中位数:", quartile.Q2);
console.log("下四分位数:", quartile.Q3);
console.log("百分位数:",Percentile(myArray,20));