var a = 20;
let b = 30;
const pi = 3.14
console.log("Global scope");
console.log("Value of a in global scope:", a);
console.log("Value of b in global scope:", b);
console.log("Value of c in global scope:", c);
function callValues(a, b, c) {
    console.log("Value of a in function scope:", a);
    console.log("Value of b in function scope:", b);
    console.log("Value of c in function scope:", c);
}
callValues(a,b,pi);