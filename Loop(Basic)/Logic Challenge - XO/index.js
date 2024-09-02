let kata = 'oxooxox';
// insert your coding here
let jmlx = 0;
let jmlo = 0;

for (let i = 0; i < kata.length; i++) {
    if (kata[i] === 'x') {
        jmlx += 1;
    } else if (kata[i] === 'o') {
        jmlo += 1;
    }
}

if (jmlx === jmlo) {
    console.log(true);
} else {
    console.log(false);
} 