// jangan ubah isi variabel dibawah
let row = 5;
let coordinate = '45';

// write your code here

for (let i = 1; i <= row; i++) {
    let tmp = "";
    for (let j = 1; j <= 5; j++) {
        if (i == coordinate[0] && j == coordinate[1]) {
            tmp += "*";
        } else {
            tmp += "#";
        }
    }
    console.log(tmp);
}
