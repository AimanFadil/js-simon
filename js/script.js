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

});