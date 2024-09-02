let angka1 = 5;
let angka2 = 3;

// Code here

/*
Diberikan dua variabel angka bertipe number yaitu angka1 dan angka2.

Buatlah program yang membandingkan kedua angka tersebut, jika angka2 lebih besar dari angka1 maka tampilkan nilai true, dan false jika sebaliknya. Jika kedua angka bernilai sama, maka tampilkan -1.

```
Contoh 1: let angka1 = 5 let angka2 = 3

maka output adalah false

Contoh 2: let angka1 = 5 let angka2 = 5

maka output adalah -1
*/

if (angka2 > angka1) {
    console.log(true)
} else if (angka2 === angka1) {
    console.log(-1)
} else {
    console.log(false)
}