let nama = "Fajrin";
let tinggi = 180;
let umur = 20;
let uang = 80000;
// write your code
/*
if (umur < 18 ){ //Kondisi no 1
    console.log("/Maaf " + nama + ", kamu tidak dapat memasuki kawasan ini!")
} else if (uang < 50000 && tinggi < 166){ // Kondisi no 2
    console.log("Tinggi kamu kurang " + [166-tinggi] + "cm dan kamu kurang uang sebanyak " + [50000-uang] + " untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!")
} else if (uang < 50000 && tinggi > 166){ // Kondisi no 3
    console.log("/Kamu kurang uang sebanyak " + [50000-uang] + " untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!/i")
} else if (uang > 50000 && tinggi < 166){ // Kondisi no 4
    console.log("Tinggi kamu kurang " + [166-tinggi] + "cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!")
} else if(uang > 50000 && tinggi > 166){ // Kondisi no 5
    console.log("Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!")
} else {
    console.log("Kamu tidak memenuhi syarat")
}
*/

if (umur < 18) { //Kondisi 1
    console.log("/Maaf " + nama + ", kamu tidak dapat memasuki kawasan ini!")
} else if (umur >= 18) {
    if (uang < 50000 && tinggi < 166) { //Kondisi 2
        console.log("Tinggi kamu kurang " + [166 - tinggi] + "cm dan kamu kurang uang sebanyak " + [50000 - uang] + " untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!")
    } else if (uang < 50000 && tinggi >= 166) { //Kondisi 3
        console.log("/Kamu kurang uang sebanyak " + [50000 - uang] + " untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!/i")
    } else if (uang >= 50000 && tinggi < 166) { //Kondisi 4
        console.log("Tinggi kamu kurang " + [166 - tinggi] + "cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!")
    } else if (uang >= 50000 && tinggi >= 166) { //Kondisi 5
        console.log("Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!")
    };
} else {
    console.log("Kamu tidak memenuhi syarat")
}
/*
Pseudocode1
STORE nama AS STRING WITH ANY
STORE tinggi AS NUMBER WITH ANY
STORE umur AS NUMBER WITH ANY
SOTRE uang AS NUMBER WITH ANY
IF umur LESS THAN 18
    DISPLAY "/Maaf [nama pengunjung], kamu tidak dapat memasuki kawasan ini!"
ELSE IF uang LESS THAN 50000 AND tinggi LESS THAN 166
    DISPLAY "Tinggi kamu kurang [selisih tinggi]cm dan kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!"
ELSE IF uang LESS THAN 50000 AND tinggi MORE THAN 166
    DISPLAY "/Kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!/i"
ELSE IF uang MORE THAN 50000 AND tinggi LESS THAN 166
    DISPLAY "Tinggi kamu kurang [selisih tinggi]cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!"
ELSE IF uang MORE THAN 50000 AND tinggi MORE THAN 166
    DISPLAY "Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!"
ELSE DISPLAY "Kamu tidak memenuhi syarat"

Pseudocode2
STORE nama AS STRING WITH ANY
STORE tinggi AS NUMBER WITH ANY
STORE umur AS NUMBER WITH ANY
SOTRE uang AS NUMBER WITH ANY
IF umur LESS THAN 18
    DISPLAY "/Maaf [nama pengunjung], kamu tidak dapat memasuki kawasan ini!"
ELSE IF umur MORE THAN 18
    IF uang LESS THAN 50000 AND tinggi LESS THAN 166
        DISPLAY "Tinggi kamu kurang [selisih tinggi]cm dan kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!"
    ELSE IF uang LESS THAN 50000 AND tinggi MORE THAN 166
        DISPLAY "/Kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!/i"
    ELSE IF uang MORE THAN 50000 AND tinggi LESS THAN 166
        DISPLAY "Tinggi kamu kurang [selisih tinggi]cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!"
    ELSE IF uang MORE THAN 50000 AND tinggi MORE THAN 166
        DISPLAY "Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!"
ELSE DISPLAY "Kamu tidak memenuhi syarat"



INPUT
umur
uang
tinggi
nama

PROCESS
1- pengecekan umur
    1a- kalau dia <18
        output v1
    1b- kalau usianya >=18
        2- cek uangnya
            2a- sedikit
                3- cek tinggi
                    3a- pendek
                        output v2
                    3b- tinggi
                        output v3
            2b- banyak
                3- cek tinggi
                    3c- pendek
                        output v4
                    3d- tinggi
                        output v5

OUTPUT
v1: Maaf [nama pengunjung], kamu tidak dapat memasuki kawasan ini!
v2: Tinggi kamu kurang [selisih tinggi]cm dan kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!
v3: Kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!
v4: Tinggi kamu kurang [selisih tinggi]cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!
v5: Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!


*/