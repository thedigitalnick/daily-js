console.log("5" == 5); //true
console.log("5" === 5); //false
console.log(typeof "5"); // "string"
console.log(typeof 5); //"number"

const input = "";
if (input) {
    console.log("has value");
} else {
    console.log("empty"); // runs because "" is falsy
}