let randomTickets = "TDKHKI";
let money = 0;

// 1- telusuri random ticket (money, totalPoin)
let totalPoin = 0;
let kamusYoman = "YOMAN";
let kamusSpesial = "!@#$%^&*";

for (let i = 0; j < randomTickets.length; i++) {
    let perTicket = randomTickets[i]; //Y, O, M, dst

    money += 1000;

    let perTicketDapatBerapa = 0;

    // ngecek dia yoman atau bukan 
    let perTicketApakahYOMAN = false;
    for (let j = 0; j < kamusYoman; j++) {
        let perhurufKamusYOMAN = kamusYoman[j]; // Y, O, M, A, N.
        if (perTicket === perhurufKamusYOMAN) {
            perTicketApakahYOMAN = true;
        }
    }

    if (perTicketApakahYOMAN === true) {
        perTicketDapatBerapa = 1;
    }

    // akumulasi total poin
    totalPoin += perTicketDapatBerapa;

    console.log(i, perTicket, money, perTicketDapatBerapa, perTicketApakahYOMAN, perTicket)
}