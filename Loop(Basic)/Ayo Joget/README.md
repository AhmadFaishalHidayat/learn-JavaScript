# Ayo Joget

Terdapat permainan ayo joget, dimana user memasukan input berupa arah sesuai dengan exercise yang ada, untuk setiap arah pada userInput yang sesuai dengan exercise, maka score akan bertambah 10. Program juga akan menampilkan kategori berdasarkan persentase:

-   100 % - Perfect
-   80 % - 99% - Great
-   60 % - 79 % - Good
-   0 - 59 % - Bad

### Notes

-   Persentase didapat dari poin dibagi total poin yang bisa didapat dikali 100, pembulatan kebawah
-   Jika panjang variable `exercise` dan `userInput` berbeda maka tampilkan ` Input yang anda masukkan tidak lengkap!`

### Example

```
EXAMPLE:
var exercise = '<>^v>>>'
var userInput = '<>^^>><'

Output:
Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good
```

**Proses**

1. Kita akan melakukan compare terhadap setiap karakter
    1. `<` adalah karakter pertama di variable exercise akan di compare dengan `<` karakter pertama di variable userInput. <br /> Karena keduanya adalah arah yang **sama** maka user mendapatkan 10 point
    2. `>` adalah karakter kedua di variable exercise akan di compare dengan `>` karakter kedua di variable userInput. <br />Karena keduanya adalah arah yang **sama** maka user mendapatkan 10 point
    3. `^` adalah karakter ketiga di variable exercise akan di compare dengan `^` karakter ketiga di variable userInput. <br />Karena keduanya adalah arah yang **sama** maka user mendapatkan 10 point
    4. `V` adalah karakter keempat di variable exercise akan di compare dengan `^` karakter kempat di variable userInput. <br />Karena keduanya adalah arah yang **tidak sama** maka user tidak mendapatkan point.
2. Setelah di check keseluruhan inputnya, didapatkan 2 output yang tidak sesuai, dan 5 output yang sesuai.
3. Oleh karena itu output yang diharapkan adalah `Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good`
    1. `50/70` didapatkan karena kita mendapatkan 50 point dari 70 point yang tersedia.
    2. `71%` adalah persentase kesamaan dari setiap karakter pada variable `userInput` dan `exercise` ( 50 / 70 \* 100 %)
    3. `Good` didapatkan sesuai kategori persentase yang didapatkan.

## RULES:

-   Hanya boleh menggunakan built in function yang diperbolehkan pada readme

## Test Case

```js
let exercise = "<>^v>>>";
let userInput = "<>^^>><";

// Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good
```

```js
let exercise = "<>^v";
let userInput = "<>^v";

// Anda mendapatkan score 40 / 40. Persentase: 100%, Kategori : Perfect
```

```js
var exercise = "<>^v";
var userInput = "<";

// Input yang anda masukkan tidak lengkap!
```
