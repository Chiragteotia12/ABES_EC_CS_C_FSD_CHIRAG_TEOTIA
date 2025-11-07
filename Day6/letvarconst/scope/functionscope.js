function fun() {
    var a = 20;
    let b = 30;
    const pi = 3.14;
    console.log("Global scope");
    console.log("Value of a in global scope:", a);
    console.log("Value of b in global scope:", b);
    console.log("Value of c in global scope:", c);
}
fun();
console.log("Global scope");
console.log("Value of a outside the function scope:", a);
console.log("Value of b outside the function scope:", b);
console.log("Value of c outside the function scope:", c);