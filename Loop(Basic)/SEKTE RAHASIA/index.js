let name = "Misk Spasela"
let id = "R2R2R2R2R2R"

// 1- telusuri string id
let jenisAnggota = '';
let berapaLama = 0;
for (let i = 0; i < id.length; i++) {
    let perHurufId = id[i]; // S, i, 0, 2, 1, dst

    if (perHurufId === "S") {
        jenisAnggota = "pengurus sekte";
        berapaLama += 1;
    }
    else if (perHurufId === "R") {
        jenisAnggota = "anggota biasa";
        berapaLama += 1;
    }
    console.log(i, perHurufId, jenisAnggota, berapaLama);
}

// 2- dapat mendali atau engga itu tergantung
let mendali = "";
if (jenisAnggota === 'pengurus sekte' && berapaLama >= 3) {
    mendali = 'platinum';
}
else if (jenisAnggota === 'anggota biasa' && berapaLama >= 5) {
    mendali = 'gold';
}
console.log(mendali);

// 3- susunan laporannya (DISPLAY);
let result = '';
if (mendali === '') {
    result = `${name} sudah menjadi ${jenisAnggota} selama ${berapaLama} tahun`;
}
else {
    result = `${name} sudah menjadi ${jenisAnggota} selama ${berapaLama} tahun dan berhak mendapatkan mendali ${mendali}`;
}
console.log(result);