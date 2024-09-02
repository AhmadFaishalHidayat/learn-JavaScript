let kata = 'Stefani';
// let kata = 25
// let kata = 0
// let kata = '0'
// let kata = false

// code here
if (typeof kata === "string") {
    if (kata !== ``) {
        console.log(`username ${kata}`);
    } else {
        console.log(`Invalid data`);

    }
} else if (typeof kata === typeof 2) {
    if (kata !== 0 && !isNaN(kata)) {
        console.log(`age ${kata}`);
    } else {
        console.log(`Invalid data`);
    }
} else if (typeof kata === typeof true) {
    if (kata !== false) {
        console.log(`thank you for agreeing`);
    } else {
        console.log(`cannot proceed without agreement`);
    }
} else {
    console.log(`Invalid data`);
}
