let herois = [
    ["Vinicius" , 15.000],
    ["João" , 3.000]
];

for (let heroi of herois) {
    let nome = heroi[0];
    let xp = heroi[1];

    if (xp <= 1.000) {
        console.log(`O Herói de nome ${nome} está no nível de Ferro`);
    } else if (xp > 1.000 && xp <= 2.000) {
        console.log(`O Herói de nome ${nome} está no nível de Bronze`);
    } else if (xp > 2.000 && xp <= 5.000) {
        console.log(`O Herói de nome ${nome} está no nível de Prata`);
    } else if (xp > 5.000 && xp <= 7.000) {
        console.log(`O Herói de nome ${nome} está no nível de Ouro`);
    } else if (xp > 7.000 && xp <= 8.000) {
        console.log(`O Herói de nome ${nome} está no nível de Platina`);
    } else if (xp > 8.000 && xp <= 9.000) {
        console.log(`O Herói de nome ${nome} está no nível de Ascendente`);
    } else if (xp > 9.000 && xp <= 10.000) {
        console.log(`O Herói de nome ${nome} está no nível de Imortal`);
    } else if (xp > 10.000) {
        console.log(`O Herói de nome ${nome} está no nível de Radiante`);
    }
}