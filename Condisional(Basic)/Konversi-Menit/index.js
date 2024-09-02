let detik = 110;

// code here

/*
Diberikan sebuah variabel `detik` yang bertipe number.

Buatlah program yang akan menghasilkan String waktu dalam format menit:detik

---

```js
Contoh 1:
let detik = 88

maka output adalah 1:28

Contoh 2:
let detik = 44

maka output adalah 0:44

Contoh 3:
let detik = 61

maka output adalah 1:01
```
*/
let sisa = detik % 60
if (detik >= 60 && detik < 120) {
    if (detik >= 60 && sisa < 10) {
        console.log("1" + ":" + 0 + sisa)
    } else if (detik >= 60 && sisa >= 10) {
        console.log("1" + ":" + sisa)
    }
}
else if (detik < 60) {
    if (detik < 60 && sisa < 10) {
        console.log(0 + ":" + 0 + sisa)
    } else if (detik < 60 && sisa >= 10) {
        console.log(0 + ":" + sisa)
    }
}
else if (detik >= 120 && detik < 180) {
    if (detik >= 120 && sisa < 10) {
        console.log(2 + ":" + 0 + sisa)
    } else if (detik >= 120 && sisa >= 10) {
        console.log(2 + ":" + sisa)
    }
} else if (detik >= 180) {
    if (detik >= 180 && sisa < 10) {
        console.log(3 + ":" + 0 + sisa)
    } else if (detik >= 180 && sisa >= 10) {
        console.log(3 + ":" + sisa)
    }
};
