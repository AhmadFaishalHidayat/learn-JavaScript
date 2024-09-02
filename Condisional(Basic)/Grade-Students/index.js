let nama = "Jennie";
let nilai = 70;

// code here


if (nilai >= 80 && nilai <= 100) { //kondisi 1 Nilai 80 - 100: A
    console.log("nama: " + nama + "; score: A")
} else if (nilai >= 65 && nilai <= 79) { //kondisi 2 Nilai 65 - 79: B
    console.log("nama: " + nama + "; score: B")
} else if (nilai >= 50 && nilai <= 64) { //kondisi 3 Nilai 50 - 64: C
    console.log("nama: " + nama + "; score: C")
} else if (nilai >= 35 && nilai <= 49) { //kondisi 4 Nilai 35 - 49: D
    console.log("nama: " + nama + "; score: D")
} else if (nilai >= 0 && nilai <= 34) { //kondisi 5 Nilai 0 - 34: E
    console.log("nama: " + nama + "; score: E")
} else {
    console.log("Nilai Invalid")
}


/*
INPUT
nama = "Jennie"
nilai = 70

PROSES
- Menampung nama dan nilai
- Kondisi besar kecilnya score nilai :
    - Nilai 80 sampai 100 scorenya A maka akan ditampilkan di output v1
    - Nilai 65 sampai 79 scorenya B maka akan ditampilkan di output v2
    - Nilai 50 sampai 64 scorenya C maka akan ditampilkan di output v3
    - Nilai 35 sampai 49 scorenya D maka akan ditampilkan di output v4
    - Nilai 0 sampai 34 scorenya E maka akan ditampilkan di output v5
    - selain itu maka akan ditampilkan di output v6

OUTPUT
v1 : nama: nama siswa; score: A
v2 : nama: nama siswa; score: B
v3 : nama: nama siswa; score: C
v4 : nama: nama siswa; score: D
v5 : nama: nama siswa; score: E
v6 : Nilai Invalid

*/