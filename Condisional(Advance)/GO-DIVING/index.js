
let age = 19;
let canSwim = true;
let haveLicense = true;

// Your code here
if (age < 10) {
    console.log(`Mohon maaf, kamu belum cukup umur!`)
} else if (age >= 10 && age <= 15) {
    if (!canSwim) {
        console.log(`Mohon maaf, kamu tidak bisa berenang!`)
    } else if (canSwim === true && haveLicense === false) {
        console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan snorkling`)
    }
} else if (age >= 15) {
    if (!canSwim) {
        console.log(`Mohon maaf, kamu tidak bisa berenang!`)
    } else if (canSwim === true && haveLicense === false) {
        console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving, dan ditemani oleh buddy`)
    } else if (canSwim === true && haveLicense === true) {
        console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving`);
    }

}