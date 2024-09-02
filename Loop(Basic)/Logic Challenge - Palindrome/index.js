let kata = "katak";
// code here
let palindrome = "";
let result = true;

for (let i = kata.length - 1; i >= 0; i--) {
    let perHuruf = kata[i];
    palindrome += perHuruf;
}
if (kata !== palindrome) {
    result = false;
}
console.log(palindrome);
console.log(result);
