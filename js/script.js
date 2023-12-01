// JS SIMON

document.getElementById('bottone').addEventListener('click', () => {
    let numeriCasuali = [];
    let numeriInseriti = [];

    while (numeriCasuali.length < 5) {
        let num = Math.floor(Math.random() * 100) + 1;
        if (!numeriCasuali.includes(num)) {
            numeriCasuali.push(num);
        }
    }

    let numeriAvideo = document.getElementById('numeriAvideo');
    numeriAvideo.textContent = numeriCasuali.join(', ');

    setTimeout(() => {
        numeriAvideo.textContent = '';

        for (let i = 0; i < 5; i++) {
            let num = parseInt(prompt('Inserisci i numeri che hai visto in precedenza:'));
            numeriInseriti.push(num);
        }

        let RispostaCorretta = 0;
        for (let i = 0; i < 5; i++) {
            if (numeriCasuali.includes(numeriInseriti[i])) {
                RispostaCorretta++;
            }
        }

        alert(`Hai indovinato ${RispostaCorretta} numeri`);
    }, 30000);
});