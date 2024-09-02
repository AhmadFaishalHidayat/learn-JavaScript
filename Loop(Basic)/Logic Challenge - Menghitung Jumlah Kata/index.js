// let kalimat = "I have a dream";
let kalimat = 'I believe I can code';
// let kalimat = 'I';
// let kalimat = '';
let kata = 0;
let isSpasi = true;
// code here
if (kalimat.length <= 0) {
    console.log(kata);
} else {
    for (let i = 0; i < kalimat.length; i++) {// looping cek spasi
        // console.log(kalimat[i]);
        if (kalimat[i] !== " ") {
            isSpasi = false
            break
        }
    }
    if (isSpasi) {
        console.log(kata);

    } else {
        kata += 1
        for (let i = 0; i < kalimat.length; i++) {
            if (kalimat[i] === " ") {
                kata += 1;
            }
        }
        console.log(kata)
    }
}


