# Asterix in the Box

## DIRECTION

Buatlah sebuah program dengan satu buah variable `row` yang akan mewakilkan jumlah baris yang akan kita buat. Setiap baris yang dibuat akan memiliki 5 buah `col`.

Buatlah sebuah output '#' dengan jumlah maksimum yang bisa di capai dari informasi `row` dan `col` yang diberikan.

Tambah kan 1 buak asterix ('\*') sesuai dengan koordinat yang berada di variabel coordinate dimana:

-   karakter pertama menunjukkan baris (row)
-   karakter kedua menunjukkann kolom (col)

### Contoh:

```js
let row = 3;
let coordinate = "23";
// output
//
// # # # # #
// # # * # #  (baris ke 2 , kolom ke 3)
// # # # # #
```

```js
let row = 5;
let coordinate = "45";
// # # # # #
// # # # # #
// # # # # #
// # # # # *  (baris ke 4, kolom ke 5)
// # # # # #
```

```js
let row = 1;
let coordinate = "11";
// output
// * # # # #
```

## RULES:

-   Tidak diperbolehkan menggunakan built-in function:
    .map .filter .reduce .split .join .indexOf .findIndex .substring

## NOTES

-   Diasumsikan input koordinat selalu benar
