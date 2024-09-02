let rows1 = 5;
let star1 = "";
// do loops using rows1 variable to display asterisks in the console.
// insert your code here
for (let i = 1; i <= rows1; i++) {
    star1 += "*";
    star1 += "\n";
}
console.log(star1);

let rows2 = 5;
// do loops using rows2 variable to display asterisks in the console.
// insert your code here
let star2 = "";
for (let i = 0; i < rows2; i++) {
    for (let j = 0; j < rows2; j++) {
        star2 += "*";

    }
    star2 += "\n";
};
console.log(star2);

let rows3 = 5;
// do loops using rows3 variable to display asterisks in the console.
// insert your code here
let star3 = ""
for (let i = 0; i < rows3; i++) {
    for (let j = 0; j <= i; j++) {
        star3 += "*";
    }
    star3 += "\n";
};
console.log(star3);

let rows4 = 5;
// do loops using rows4 variable to display asterisks in the console.
// insert your code here
let star4 = "";
for (let i = 0; i < rows4; i++) {
    for (let j = 0; j < rows4 - i; j++) {
        star4 += "*";
    }
    star4 += "\n";
};
console.log(star4);
