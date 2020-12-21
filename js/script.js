// | GIOCO PARI O DISPARI
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//Nome utente
/* var userName = prompt('Benvenuto! \n Inserisci il tuo nome per iniziare');
document.getElementById('user_name').innerHTML = userName; */

//Variabili iniziali
var firstChoice, secondChoice, cpufirstChoice, cpusecondChoice;

//Stampo le scelte dell'utente all'interno del gioco
var choiceButton = document.getElementById("stamp_choice");
choiceButton.addEventListener("click", function() {

    firstChoice = document.getElementById('option_choice').value;
    secondChoice = document.getElementById('number_choice').value;

    document.getElementById('opt_choice').innerHTML = firstChoice;
    document.getElementById('numb_choice').innerHTML = secondChoice;

    document.getElementById('play_btn').classList.remove('hidden');

});

// Calcolo scelte del computer sulla base di quelle dell'utente
var playButton = document.getElementById("play_btn");
playButton.addEventListener("click", function() {

    //Scelta alternativa in base alla scelta dell'utente
    if (firstChoice == 'pari'){
        cpufirstChoice = 'dispari';
    } else {
        cpufirstChoice = 'pari';
    }

    //NUmero random generato per CPU
    cpusecondChoice = Math.floor(Math.random() * 6);

    //Visualizzo risultati su doc HTML
    document.getElementById('opt_cpu_choice').innerHTML = cpufirstChoice;
    document.getElementById('numb_cpu_choice').innerHTML = cpusecondChoice;

    //Calcolo l'esito della partita e stabilisco se il num. è pari o dispari
    var choiceResult = Number(secondChoice) + Number(cpusecondChoice);

    var catResult = choiceResult % 2;

    // Converto il risultato in un valore pari o dispari
    if (catResult == 0) {
        choiceResult = 'pari';
    }   else {
        choiceResult = 'dispari';
    }

    //Visualizzo risultati su doc HTML
    document.getElementById('sum_result').innerHTML = 'La somma è: ' + choiceResult;

    //Stabilisco esito partita in base alla scelta iniziale
    var finalMessage = 'Hai perso';

    if (choiceResult == firstChoice) {
        finalMessage = 'Hai vinto!';
    }

    //Visualizzo risultati su doc HTML
    document.getElementById('final_result').innerHTML = finalMessage;
});

var resetButton = document.getElementById("reset_choice");
resetButton.addEventListener("click", function() {

    document.getElementById('option_choice').value = '';
    document.getElementById('number_choice').value = '';

    document.getElementById('opt_choice').innerHTML = '';
    document.getElementById('numb_choice').innerHTML = '';
    document.getElementById('opt_cpu_choice').innerHTML = '';
    document.getElementById('numb_cpu_choice').innerHTML = '';

    document.getElementById('sum_result').innerHTML = '';
    document.getElementById('final_result').innerHTML = '';

    document.getElementById('play_btn').classList.add('hidden');

});