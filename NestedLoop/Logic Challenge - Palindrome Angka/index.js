let angka = 10;

let hasilPalindrome = "";

if (angka < 9) {
    angka += 1;
    console.log(angka + " INI PALINDROME");
} else {
    if (angka === 9) {
        angka += 1
    }
    for (let i = 0; i >= 0; angka++) {
        let angkaString = angka.toString();
        hasilPalindrome = "";
        // console.log(i);
        for (let j = angkaString.length - 1; j >= 0; j--) {
            hasilPalindrome += angkaString[j];
            // 
        }
        // console.log(hasilPalindrome, angkaString);
        let isPalindrome = false;
        if (hasilPalindrome === angkaString) {
            isPalindrome = true;
            break;
        }


    }
    console.log(hasilPalindrome)
}