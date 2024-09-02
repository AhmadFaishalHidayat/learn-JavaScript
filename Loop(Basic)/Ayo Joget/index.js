// Jangan merubah isi variabel di bawah
let exercise = '<>^v>>>'
let userInput = '<>^^>><'
// code here
let point = 0;
let persentase = 0;
let perseratus = 0;

if (exercise.length !== userInput.length) {
    console.log(`Input yang anda masukkan tidak lengkap!`);
} else {
    for (let i = 0; i < exercise.length; i++) {
        // console.log(exercise[i],exercise[i]);
        if (exercise[i] === userInput[i]) {
            point += 10;
        }
    }
    perseratus += exercise.length * 10;
    persentase += Math.floor([point / perseratus] * 100);

    if (persentase === 100) {
        console.log(`Anda mendapatkan score ${point} / ${perseratus}. Persentase: ${persentase}%, Kategori : Perfect`);
    } else if (persentase >= 80 && persentase <= 99) {
        console.log(`Anda mendapatkan score ${point} / ${perseratus}. Persentase: ${persentase}%, Kategori : Great`);
    } else if (persentase >= 60 && persentase <= 79) {
        console.log(`Anda mendapatkan score ${point} / ${perseratus}. Persentase: ${persentase}%, Kategori : Good`);
    } else if (persentase >= 0 && persentase <= 59) {
        console.log(`Anda mendapatkan score ${point} / ${perseratus}. Persentase: ${persentase}%, Kategori : Bad`);
    }
}