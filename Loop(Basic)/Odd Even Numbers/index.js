// insert your code here
for (let i = 1; i <= 100; i += 3) {
    // console.log(i);
    if (i % 2 === 0) {
        console.log(`${i}-genap`);
    } else {
        console.log(`${i}-ganjil`);
    }
}

for (let i = 50; i <= 200; i += 5) {
    // console.log(i);
    if (i % 3 === 0) {
        console.log(`${i}-faktor 3`);
    } else {
        console.log(`${i}-tidak bisa dibagi 3`);
    }
}

for (i = 100; i <= 200; i += 7) {
    if (i % 8 === 0) {
        console.log(i);
    }
}