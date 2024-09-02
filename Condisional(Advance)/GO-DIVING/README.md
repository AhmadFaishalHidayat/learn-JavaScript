## **GO-DIVING 🤿🏊‍♂️**

<br>

## Restrictions

-   Build-in function yang dibolehkan mengikuti aturan umum saat briefing.

## Objectives

-   Mampu menyelesaikan masalah yang diberikan.
-   Mengerti konsep dan cara penggunaan `conditional` dan `data primitive`.

## Directions

Jakarta Panas ya ? Diving yuk !!. Demi keselamatan kamu dalam melakukan diving/snorkling buatlah program yang akan menentukan
bagaimana kamu dalam melakukan diving/snorkling. Program tersebut akan menerima beberapa informasi tentang dirimu yaitu dalam variabel:

-   age : dengan tipe data number
-   canSwim: dengan tipe data boolean
-   haveLicense: dengan tipe data boolean

Syarat dan ketentuan seseorang agar dapat melakukan diving/snorkling adalah :

-   Harus bisa berenang
-   Harus berumur 10 tahun keatas agar bisa snorkling
-   Harus berumur di atas 15 tahun dan mempunyai license agar bisa diving
-   Jika berumur diatas 15 tahun namun **tidak** mempunyai license, maka diving harus di temani oleh buddy.

## Examples

```js
1;

let age = 9;
let canSwim = false;
let haveLicense = false;

output: "Mohon maaf, kamu belum cukup umur!";
```

```js
2;

let age = 10;
let canSwim = false;
let haveLicense = false;

output: "Mohon maaf, kamu tidak bisa berenang!";
```

```js
3;

let age = 16;
let canSwim = false;
let haveLicense = false;

output: "Mohon maaf, kamu tidak bisa berenang!";
```

```js
4;

let age = 11;
let canSwim = true;
let haveLicense = false;

output: "Selamat dengan umur 11 tahun, Kamu sudah bisa menikmati keindahan laut dengan snorkling";
```

```js
5;

let age = 19;
let canSwim = true;
let haveLicense = false;

output: "Selamat dengan umur 19 tahun, Kamu sudah bisa menikmati keindahan laut dengan diving, dan ditemani oleh buddy";
```

```js
6;

let age = 19;
let canSwim = true;
let haveLicense = true;

output: "Selamat dengan umur 19 tahun, Kamu sudah bisa menikmati keindahan laut dengan diving";
```
