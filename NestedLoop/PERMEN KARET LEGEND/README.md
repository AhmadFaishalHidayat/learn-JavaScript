# PERMEN KARET LEGEND

## Restrictions

-   Hanya gunakan built in function yang diperbolehkan saat briefing (baca readme)
-   Tidak boleh menggunakan regex

<br>

## Objectives

-   Mampu menyelesaikan masalah yang diberikan.
-   Mengerti konsep dan cara penggunaan `looping`, `nested loop` dan `conditional`.

<br>

## Directions

<br>

Perusahaan permen karet 'LEGEND' mengadakan acara undian untuk pelanggannya dengan peraturan sebagai berikut:

-   Setiap pembelian satu permen karet akan mendapatkan satu tiket dengan kode tertentu. Masing - masing kode akan memberikan kamu point dengan ketentuan berikut :

```
> Huruf YOMAN = 20 point
> Karakter spesial !@#$%^&* = 1 point
> Huruf selain YOMAN = 0 point
```

-   Satu buah permen karet harganya **`1000`** rupiah.

<br>

Ketentuan hadiah yang didapatkan adalah sebagai berikut

1. Total point lebih lebih dari 100 akan mendapatkan **`hadiah utama`**
2. Total point pada rentang 50 sampai 100 akan mendapatkan **`pleystetion5`**
3. Total point kurang dari 50 akan mendapatkan **`souvenir permen karet`**

<br>

Buatlah program untuk menentukan berapa `total uang` yang dipakai untuk membeli permen karet serta `hadiah` yang didapat berdasarkan `total point`.

-   Diberikan dua buah variabel `randomTickets` dan `money`.
-   Variabel `randomTickets` bertipe data string dan berisi kombinasi huruf dan karakter spesial.
-   Variabel `money` bertipe data number dan digunakan untuk mencatat berapa banyak uang yang kamu habiskan untuk membeli permen karet.

<br>

## Examples

<br>

```js
// Contoh 1:
let randomTickets = "YO!#QWEMAN&&ZB";
let money = 0;

Output: "Kamu menghabiskan uang sejumlah 14000 dan kamu mendapat hadiah utama!";

// Contoh 2:
let randomTickets = "@^&ABCXYZOPQ*";
let money = 0;

Output: "Kamu menghabiskan uang sejumlah 13000 dan kamu mendapat pleystetion5!";

// Contoh 3:
let randomTickets = "XVP#QAN!!";
let money = 0;

Output: "Kamu menghabiskan uang sejumlah 9000 dan kamu mendapat souvenir permen karet!";

// Contoh 4:
let randomTickets = "TDKHKI";
let money = 0;

Output: "Kamu menghabiskan uang sejumlah 6000 dan kamu mendapat souvenir permen karet!";
```

## Notes

<br>

-   Kemungkinan tiket yang dapat muncul adalah huruf `A-Z` dan karakter spesial `!@#$%^&*` saja!
-   Apabila tidak menggunakan nested loop maka akan ada pengurangan nilai

## RULES:

-   Hanya gunakan built in function yang diperbolehkan saat briefing (baca readme)
-   Tidak boleh menggunakan regex.
