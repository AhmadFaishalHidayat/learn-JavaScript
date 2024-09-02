## **SEKTE RAHASIA**

## Restrictions

-   Mengikuti aturan umum saat briefing

## Objectives

-   Mampu menyelesaikan masalah yang diberikan
-   Mampu menggabungkan string menggunakan operator penambahan ataupun string literal
-   Mengerti konsep dan cara penggunaan `conditional`
-   Mengerti konsep dan cara penggunaan `looping`

## Directions

Sebuah sekte rahasia Klumisonry mengadakan pertemuan rahasia tahunan. Untuk dapat memasuki tempat pertemuan para anggotanya diharuskan memperlihatkan id mereka.
Setiap id ini memiliki informasi yang menunjukan status anggota tersebut di sekte. Informasi ini dapat dilihat dari 2 huruf khusus yang terdapat pada id.

Penentuan status dan years didapatkan dari id anggota dengan ketentuan:

-   Penempatan code status dalam string id anggota ditempatkan secara acak,
-   Apabila dalam string id anggota terdapat huruf `R`, maka status adalah `anggota biasa`,
-   Apabila dalam string id anggota terdapat huruf `S`, maka status adalah `pengurus sekte`,
-   Jumlah huruf kapital (S atau R) pada id menunjukan berapa tahun seseorang itu berada pada statusnya saat ini
-   Untuk `anggota biasa` yang sudah menjalani keanggotaan selama 5 tahun ke atas, berhak mendapatkan medali `gold`
-   Untuk `pengurus sekte` yang sudah menjalani keanggotaan selama 3 tahun ke atas, berhak mendapatkan medali `platinum`
-   contoh 1:
    ```js
    id = "s0opAssRvc"
    karena dalam string id terdapat huruf `R`, maka status = `anggota biasa`
    karena huruf `R` dalam string id berjumlah 1, maka years = 1
    karena years = 1, maka belum berhak mendapatkan medali
    ```
-   contoh 2:
    ```js
    id = "S0opASSrvc"
    karena dalam string id terdapat huruf `S`, maka status = `pengurus sekte`
    karena huruf `S` dalam string id berjumlah 3, maka years = 3
    karena years = 3, maka berhak mendapatkan medali `platinum`
    ```

# EXAMPLE

Contoh 1

```js
Input:
let name = "Misk Spasela"
let id = "Si021rTSz"

Output:
"Misk Spasela sudah menjadi pengurus sekte selama 2 tahun."

Penjelasan:
- huruf khusus yang terdapat pada id adalah S maka statusnya adalah pengurus sekte
- huruf S ada 2 maka lama sebagai pengurus sekte adalah 2 tahun
- r pada id bukanlah huruf kapital sehingga tidak dianggap sebagai huruf khusus
```

Contoh 2

```js
Input:
let name = "Michael"
let id = "RgB133RTORRR"

Output:
"Michael sudah menjadi anggota biasa selama 5 tahun dan berhak mendapatkan medali gold"

Penjelasan:
- huruf khusus yang terdapat pada id adalah R maka statusnya adalah anggota biasa
- huruf R ada 5 maka lama sebagai anggota biasa adalah 5 tahun
- karena sudah menjadi anggota selama 5 tahun, maka berhak mendapatkan medali gold
```

Contoh 3

```js
Input:
let name = "Basil"
let id = "S0opASSrvc"

Output:
"Basil sudah menjadi pengurus sekte selama 3 tahun dan berhak mendapatkan medali platinum"

Penjelasan:
- huruf khusus yang terdapat pada id adalah S maka statusnya adalah pengurus sekte
- huruf S ada 3 maka lama sebagai pengurus sekte adalah 3 tahun
- karena sudah menjadi pengurus sekte selama 3 tahun, maka berhak mendapatkan medali platinum
```
