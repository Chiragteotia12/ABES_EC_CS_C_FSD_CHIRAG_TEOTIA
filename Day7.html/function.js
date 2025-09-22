// function isODD(a) {
//     if (a % 2 !== 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// function isODDUsingTernary(a) {
//     return a % 2 !== 0 ? "Value is odd:" : "value is even";
// }

// console.log(isODD(3));
// console.log(isODDUsingTernary(3));

// let funAsExpression = function isODD(a) {
//     return a % 2 !== 0 ? "Value is odd:" : "value is even";
// }
const arrowFun = (a) => a % 2 !== 0 ? "Value is odd:" : "value is even";
console.log("output from arrowFun(4):", arrowFun(4));

(function iifeFun() {
    console.log("Inside IIFE Function");
})();