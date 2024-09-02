// let word = '';
let word = 'hackt1iv8';
// let word = 'I Lo1ve Co4ding';
// write your code
let angka = '123456789';
let result = "";
if (word !== '') {
    for (let i = 0; i < word.length; i++) {//luar
        // console.log(word[i]);
        let isNumber = false;

        for (let j = 0; j < angka.length; j++) {//dalem
            // console.log(word[i], angka[j], word[i] !== angka[j]);
            if (word[i] === angka[j]) {
                isNumber = true;
                for (let k = 1; k <= angka[j]; k++) {
                    result = result + word[i - 1];
                    // console.log(result);
                }
            }
        }
        if (!isNumber) {
            result = result + word[i];
        }
    }
    console.log(result);
} else {
    console.log("Tidak ada kata yang bisa di proses");
}

