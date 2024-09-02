// isi variabel wahana, usia dan saldo tidak boleh dirubah
// variabel tarif tidak boleh langsung di isi, gunakan proses untuk mengisinya

let wahana = "Wahana Utara"
let usia = 1
let saldo = 180000

// code here
let tarif;

if (usia <= 1) {
    console.log(`Dilarang Masuk`);
} else {
    if (usia >= 2 && usia <= 12) {
        if (wahana === "Wahana Utara") {
            tarif = 85000
            if (saldo >= tarif) {
                console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
            } else {
                console.log(`Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
            }
        } else if (wahana === "Wahana Selatan") {
            tarif = 143000
            if (saldo >= tarif) {
                console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
            } else {
                console.log(`Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
            }
        } else {
            console.log(`Tarif tidak ditemukan!`);
        }

    } else if (usia >= 13 && usia <= 49) {
        if (wahana === "Wahana Utara") {
            tarif = 125000
            if (saldo >= tarif) {
                console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
            } else {
                console.log(`Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
            }
        } else if (wahana === "Wahana Selatan") {
            tarif = 125000
            if (saldo >= tarif) {
                console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
            } else {
                console.log(`Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
            }
        } else {
            console.log(`Tarif tidak ditemukan!`);
        }

    } else if (usia >= 50) {
        if (wahana === "Wahana Utara") {
            tarif = 125000
            if (saldo >= tarif) {
                console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
            } else {
                console.log(`Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
            }
        } else if (wahana === "Wahana Selatan") {
            tarif = 125000
            if (saldo >= tarif) {
                console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
            } else {
                console.log(`Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);
            }
        } else {
            console.log(`Tarif tidak ditemukan!`);
        }
    }
}