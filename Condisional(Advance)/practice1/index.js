let nama = "Lele";
let peran = "Penyihir";

if (nama !== "") {
    if (peran === "") {
        console.log(`Halo ${nama}, Ayo pilih peranmu untuk memulai game!`);
    } else if (peran === "Ksatria") {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}\nHalo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if (peran === "Tabib") {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}\nHalo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`);
    } else if (peran === "Penyihir") {
        console.log("Selamat datang di Dunia Proxytia, " + nama + "\nHalo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
    }
} else {
    console.log(`Nama harus di isi untuk langkah berikutnya!`)
}
