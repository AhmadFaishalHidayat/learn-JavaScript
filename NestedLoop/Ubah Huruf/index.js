let kata = "I love Javascript";
let hurufVocal = "AaIiUuEeOo";
let kataBaru = "";

// code here
for (let i = 0; i < kata.length; i++) {

    let isHurufvokal = false;
    for (let j = 0; j < hurufVocal.length; j++) {
        if (kata[i] == hurufVocal[j]) {
            kataBaru += "$";
            isHurufvokal = true;
        }
    }
    if (!isHurufvokal) {
        kataBaru += kata[i];

    }
}
console.log(kataBaru)